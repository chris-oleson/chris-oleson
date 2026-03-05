<template>
<section>
    <h1>Blog</h1>
    <NuxtLink v-for="post in data" class="card" :to="post.path">
        <h2>{{ post.title }}</h2>
        <p>{{ post.date }}</p>
    </NuxtLink>
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
    min-width: 100%;
    & h2 {
        margin: 0;
    }
    &:hover {
        background-color: var(--secondary);
    }
}

section {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
