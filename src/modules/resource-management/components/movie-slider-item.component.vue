<script>
import { Movie } from '../model/movie.entity';


export default {
    name: 'MovieSliderItem',
    props: {
        movie: {
            type: Movie,
            required: true
        }
    }
}

</script>

<template>
    <div 
        class="movie-slider-item cursor-pointer"
        @click="$emit('select-movie', movie)"
        :title="movie.title">
        
        <img
            :src="movie.fullPosterUrl"
            :alt="movie.title"
            class="w-full h-11rem object-cover border-round shadow-3 transition-transform transition-duration-200 hover:scale-105" />
        
        <div class="overlay absolute top-0 left-0 w-full h-full surface-overlay opacity-0 hover:opacity-100 transition-opacity">
            <div class="p-3 flex flex-column justify-end h-full text-white">
                <h4 class="text-lg font-bold mb-2">{{ movie.title }}</h4>
                <div class="flex items-center gap-2 text-sm">
                    <i class="pi pi-star-fill text-yellow-400"></i>
                    <span>{{ movie.vote_average.toFixed(1) }}</span>
                </div> 
            </div>
        </div>

    
    </div>
</template>


<style>
.movie-slider-item {
    position: relative;
    width: 200px;
}

.overlay {
    position: absolute;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    z-index: 2;
}

</style>