<script>
export default {
    name: 'Section',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <section class="section-container">
        <h2 class="text-2xl font-semibold text-white mb-3"> {{ title }}</h2>
        <slot />
    </section>
</template>

<style>

.section-container {
    padding: 1.5rem 2rem;
}
</style>