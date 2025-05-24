<script>
import HeroBanner from '../components/hero-banner.component.vue';
import MovieCard from '../components/movie-card.component.vue';
import Section from '../components/section.component.vue';
import MovieSlider from '../components/movie-slider.component.vue';
import { TMDBService } from '../services/tmdb.service';

export default {
  name: 'HomePage',
  components: {
    HeroBanner,
    MovieSlider
  },
  data() {
    return {
      featuredMovie: null,
      tmdb: new TMDBService()
    };
  },
  async created() {
    try {
      const res = await this.tmdb.getPopularMovies();
      this.featuredMovie = res[0]; // O selecciona aleatoria con Math.random()
    } catch (err) {
      console.error('Error al cargar la película destacada:', err);
    }
  }
};
</script>


<template>
  <div class="home-page">
    <!-- HeroBanner -->
    <HeroBanner v-if="featuredMovie" :movie="featuredMovie" />

    <!-- Secciones de sliders -->
    <div class="mt-5">
      <MovieSlider
        category-title="Netflix Originals"
        request-url="discover/tv?with_networks=213"
      />
      <MovieSlider
        category-title="Tendencias"
        request-url="trending/all/week"
      />
      <MovieSlider
        category-title="Lo más valorado"
        request-url="movie/top_rated"
      />
      <MovieSlider
        category-title="Estrenos recientes"
        request-url="movie/now_playing"
      />
    </div>
  </div>
</template>


<style>
.home-page {
  padding-bottom: 4rem;
  font-family: 'Montserrat', sans-serif;
  background-color: black;
}
</style>