<template>
<section v-if="post">
    <content-renderer :value="post" />
</section>
<section v-else class="full height section">
    <h1>Page not found: {{ route.path.split('/').pop() }}</h1>
    <FishButton big border to="/" text="Return to home page"/>
</section>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
    title: post.value?.title + ' - Chris Oleson',
    ogTitle: post.value?.title,
    author: 'Chris Oleson',
    ogImage: 'https://chrisoleson.dev/images/fish.png',
})
</script>
