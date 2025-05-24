<script>
import { Movie } from '../model/movie.entity.js';
import { TMDBService } from '../services/tmdb.service.js';

export default {
    name: 'MovieDetails',
    props: {
        movie: {
            type: Movie,
            required: true
        }
    },
    data() {
        return {
            trailerUrl: null,
            cast: [],
            genreMap: {},
            service: new TMDBService()
        }
    },
    async created() {
        try {
            const videos = await this.service.getMovieVideos(this.movie.id);
            const trailer = videos.find(v => v.type === 'Trailer' && v.isYoutube);
            this.trailerUrl = trailer?.embedUrl || null;

            const credits = await this.service.getMovieCredits(this.movie.id);
            this.cast = credits.cast.filter(c => c.character);

            const genres = await this.service.getGenres();
            this.genreMap = Object.fromEntries(genres.map(g => [g.id, g.name]));
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    }
}
</script>

<template>
  <div class="movie-details p-5 surface-900 text-white border-round w-full max-w-6xl shadow-4 relative">
    <!-- Cabecera -->
    <div class="flex flex-column md:flex-row gap-4">
      <img
        :src="movie.fullPosterUrl"
        :alt="movie.title"
        class="w-full md:w-12rem border-round shadow-2"
      />
      <div class="flex flex-column justify-between">
        <div>
          <h2 class="text-3xl font-bold mb-2">{{ movie.title }}</h2>
          <p class="text-sm text-gray-300 mb-3">{{ movie.releaseDate }}</p>
          <p class="mb-4 text-sm">{{ movie.overview }}</p>
          <div class="flex gap-2 flex-wrap">
            <span v-for="genreId in movie.genreIds" :key="genreId" class="text-xs px-2 py-1 border-round bg-primary">
              {{ genreMap[genreId] || 'Género' }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-2 mt-4">
          <i class="pi pi-star-fill text-yellow-400"></i>
          <span class="text-sm">{{ movie.vote_average.toFixed(1) }}</span>
        </div>
      </div>
    </div>

    <!-- Trailer -->
    <div v-if="trailerUrl" class="mt-5">
      <h3 class="text-xl mb-2">Tráiler</h3>
      <iframe
        :src="trailerUrl"
        width="100%"
        height="360"
        frameborder="0"
        allowfullscreen
        class="border-round"
      ></iframe>
    </div>

    <!-- Créditos -->
    <div v-if="cast.length" class="mt-5">
      <h3 class="text-xl mb-3">Reparto principal</h3>
      <div class="flex gap-3 overflow-x-auto">
        <div
          v-for="actor in cast.slice(0, 10)"
          :key="actor.id"
          class="text-center text-xs w-7rem"
        >
          <img
            :src="actor.profileUrl"
            class="w-full h-10rem object-cover border-round shadow-1"
            :alt="actor.name"
          />
          <p class="mt-2 font-semibold">{{ actor.name }}</p>
          <p class="text-gray-400 italic">{{ actor.character }}</p>
        </div>
      </div>
    </div>
  </div>
</template>