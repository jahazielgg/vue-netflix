<script>
import { Button } from 'primevue';
import { RouterLink } from 'vue-router';
import { Movie } from '../model/movie.entity';

export default {
    name: 'MovieCard',
    components: {
        Button,
        RouterLink
    },
    props: {
        movie: {
            type: Movie,
            required: true
        }
    }
};
</script>


<template>
    <div class="movie-card surface-card border-round shadow-2 overflow-hidden">
        <img 
        :src="movie.fullPosterUrl"
        :alt="movie.title"
        :aria-label="movie.title"
        class="w-full h-20rem object-cover"
        />

        <div class="p-3 flex flex-column justify-between h-10rem">
            <div>
                <h3 class="text-xl font-medium mb-2 text-ellipsis white-space-nowrap overflow-hidden">
                    {{ movie.title }}
                </h3>
                <div class="flex align-items-center gap-2 text-sm text-yellow-400">
                    <i class="pi pi-star-fill"></i>
                    <span>{{ movie.vote_average.toFixed(1) }}</span>
                </div>
            </div>

            <RouterLink :to="`/movie/${movie.id}`">
                <Button label="See more" icon="pi pi-info-circle" class="p-button-sm w-full mt-3" />
            </RouterLink>
        </div>
    </div>
</template>


<style>
.movie-card {
    width: 200px;
    transition: transform 0.2s ease-in-out;
}
.movie-card:hover {
    transform: scale(1.03);
}
</style>