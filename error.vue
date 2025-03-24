<template>
<NuxtLayout>
    <section class="full height section">
        <h1>{{ error.message }}</h1>
        <nuxt-link class="big border button" to="/">Return to home page</nuxt-link>
    </section>
</NuxtLayout>
</template>

<script setup>
useHead ({ title: 'Chris Oleson' })
defineProps({
    error: {
        type: Object,
        default: null
    },
})
</script>
