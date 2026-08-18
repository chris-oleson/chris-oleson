<template>
    <section data-aos="fade-in">
        <h1 class="heading">Blog</h1>
        <NuxtLink v-for="post in data" class="card" :to="post.path">
            <h3>{{ post.title }}</h3>
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 100%;
    &:hover {
        filter: brightness(var(--hover-brightness));
    }
}

section {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
