<script>
import HeroBanner from '../components/hero-banner.component.vue';
import MovieCard from '../components/movie-card.component.vue';
import Section from '../components/section.component.vue';
import { TMDBService } from '../services/tmdb.service';

export default {
    name: 'HomePage',
    components: {
        HeroBanner,
        MovieCard,
        Section
    },
    data() {
        return {
            tmdbService: new TMDBService(),
            featureMovie: null,
            popularMovies: []
        };
    },
    async created() {
        this.popularMovies = await this.tmdbService.getPopularMovies();
        this.featureMovie = this.popularMovies[0];
    }
}
</script>


<template>
    <div class="home">
        <HeroBanner :movie="featureMovie" />
        <Section title="Popular Movies">
            <div class="flex flex-wrap gap-4 justify-content">
                <MovieCard 
                    v-for="movie in popularMovies"
                    :key="movie.id"
                    :movie="movie" />
            </div>
        </Section>
    </div>
</template>


<style>
.home {
    font-family: 'Montserrat', Courier, monospace;
}
</style>