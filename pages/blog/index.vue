<template>
    <section>
        <h1 class="heading">Blog</h1>
        <div class="column">
            <NuxtLink v-for="post in data" class="card" :to="post.path">
                <h3>{{ post.title }}</h3>
                <p>{{ post.date }}</p>
            </NuxtLink>
        </div>
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
    align-items: start;
    min-width: 100%;
    &:hover {
        filter: brightness(var(--hover-brightness));
    }
}

.column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
