<template>
    <section>
        <h1>Technologies</h1>
        <div class="row">
            <div v-for="technology in technologies" class="tech card">
                <h3>{{ technology }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead ({ title: 'Portfolio - Chris Oleson' })

const technologies = [
    'HTML',
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
    'CSS',
    'Tailwind',
    'SCSS',
    'MySQL',
    'MariaDB',
    'SQLite',
    'Git',
    'Linux',
    'Stripe',
    'Plaid',
]
</script>

<style scoped>
.row {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

h3 {
    margin: 0;
}
</style>
