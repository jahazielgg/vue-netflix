<script>
import { Movie } from '../model/movie.entity';

export default {
    name: 'HeroBanner',
    props: {
        movie: {
            type: Movie,
            required: true
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.movie.fullBackdropUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
        }
    }
}
</script>


<template>
    <section class="hero-banner" :style="backgroundStyle">
        <div class="overlay flex flex-column justify-end h-full p-5">
            <div class="content text-white max-w-30rem">
                <h1 class="text-5xl font-bold mb-3">{{ movie.title }}</h1>
                <p class="text-base line-height-3 mb-4">{{ movie.overview }}</p>
                <div class="flex-gap-3">
                    <Button label="Watch now" icon="pi pi-play" class="p-button-rounded p-button-lg text-black bg-white border-none" />
                    <Button label="My list" icon="pi pi-plus" class="p-button-rounded p-button-lg p-button-secondary" />
                </div>
            </div>
        </div>
    </section>
</template>


<style>
.hero-banner {
    position: relative;
}

.overlay {
    position:absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
</style>