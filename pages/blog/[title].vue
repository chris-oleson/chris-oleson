<template>
<section v-if="post">
    <content-renderer :value="post" />
</section>
<section v-else class="full height section">
    <h1>Page not found: {{ route.path.split('/').pop() }}</h1>
    <nuxt-link class="big border button" to="/">Return to home page</nuxt-link>
</section>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
  title: post.value.title + ' - Chris Oleson',
  ogTitle: post.value.title,
  description: 'Chris Oleson',
  ogDescription: 'Chris Oleson',
  ogImage: '/favicon.svg',
})
</script>
