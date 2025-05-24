<script>
import MovieCard from './movie-card.component.vue';
import { TMDBService } from '../services/tmdb.service';
import { Movie } from '../model/movie.entity';
import MovieSliderItem from './movie-slider-item.component.vue';
import MovieDetails from './movie-details.component.vue';
import clickOutside from '@/shared/directives/clickOutside.js'; // Asumiendo ruta


export default {
    name: 'MovieSlider',
    components: {
        MovieCard,
        MovieSliderItem,
        MovieDetails
    },
    directives: {
        clickOutside    
    },
    props: {
        categoryTitle: String,
        requestUrl: String
    },
    data() {
        return {
            movies: [],
            selectedMovie: null,
            tmdbService: new TMDBService()
        }
    },
    async mounted() {
        try {
            const res = await this.tmdbService.fetchRaw(this.requestUrl);
            this.movies = res.results.map(m => new Movie(m));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    },   
    methods: {
        selectMovie(movie) {
            this.selectedMovie = this.selectMovie?.id === movie.id ? null : movie;
        },
        unselectMovie() {
            this.selectedMovie = null;
        }
    } 
}

</script>


<template>
    <section class="mb-5 px-4">
        <h2 class="text-2xl font-semibold text-white mb-3">{{ categoryTitle }}</h2>

        <div v-click-outside="unselectMovie">
            <div class="flex gap-1 pb-4">
                <MovieSliderItem
                    v-for="movie in movies"
                    :key="movie.id"
                    :movie="movie"
                    @select-movie="selectMovie" />
            </div>
        </div>

        <transition name="fade-in-up">
            <div v-if="selectedMovie" class="movie-details-overlay">
                <div @click.stop>
                    <MovieDetails :movie="selectedMovie" />
                    <Button icon="pi pi-times" class="p-button-rounded absolute top-0 right-0 m-3 text-white" @click="unselectMovie" />
                </div>
            </div>
        </transition>
    </section>
</template>

<style>
.movie-details-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>