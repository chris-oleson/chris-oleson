<template>
    <section>
        <h1 class="heading">Technologies</h1>
        <div class="row">
            <div v-for="technology in technologies" class="tech card">
                <h3>{{ technology }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead ({ title: 'Technologies - Chris Oleson' })

const technologies = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Vue',
    'Nuxt',
    'React',
    'Next',
    'Node',
    'Express',
    'PHP',
    'Wordpress',
    'Python',
    'FastAPI',
    'C#',
    'Tailwind',
    'SCSS',
    'MySQL',
    'MariaDB',
    'SQLite',
    'Git'
]
</script>

<style scoped>
.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
