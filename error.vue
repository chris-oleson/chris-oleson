<template>
<NuxtLayout>
    <div class="full height section">
        <h1>{{ error.message }}</h1>
        <nuxt-link class="big border button" to="/">Return to home page</nuxt-link>
    </div>
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
