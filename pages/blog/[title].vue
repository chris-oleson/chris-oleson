<template>
<div v-if="post" class="section">
    <content-renderer :value="post" />
</div>
<div v-else class="full height section">
    <h1>Page not found: {{ route.path.split('/').pop() }}</h1>
    <nuxt-link class="big border button" to="/">Return to home page</nuxt-link>
</div>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
})
useHead({ title: post.value.title + ' - Chris Oleson' })
</script>
