<template>
    <section class="full height section">
        <nuxt-link v-for="(post, i) in data" class="card" :to="post.path">
            <h2>{{ post.title }}</h2>
            <p>{{ post.date }}</p>
        </nuxt-link>
    </section>
</template>

<script setup>
useHead ({ title: 'Blog - Chris Oleson' })

const { data } = await useAsyncData('/blog', () => {
    return queryCollection('blog').order('date', 'DESC').all()
})
</script>

<style scoped>
.card {
    width: 100%;
}
</style>
