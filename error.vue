<template>
    <NuxtLayout>
        <section class="full height section">
            <h1>{{ error.message }}</h1>
            <FishButton big border text="Return to home page" to="/"/>
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
