<template>
<NuxtLayout>
    <NuxtPage/>
</NuxtLayout>
</template>

<script setup>
useHead({
    script: [{
        defer: true,
        'data-domain': 'chrisoleson.dev',
        src: 'https://plausible.chrisoleson.dev/js/script.js',
    }]
})
</script>
