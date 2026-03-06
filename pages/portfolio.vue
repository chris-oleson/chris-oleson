<template>
    <div data-aos="fade-in">
        <section>
            <h1>Projects</h1>
            <div class="row">
                <a href="https://vufi.app" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/vufi.svg" height="24" width="24"/>
                        <h3>VuFi</h3>
                    </div>
                    <p>
                        VuFi a web app for tracking financial assets and liabilities.
                        It is written in Nuxt, but the github repository is private for security reasons.
                    </p>
                </a>
                <a href="https://chrisoleson.dev" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/fish.png" height="24" width="24"/>
                        <h3>chrisoleson.dev</h3>
                    </div>
                    <p>
                        This is the site you are currently using, which acts as a business card, portfolio, and blog.
                    </p>
                </a>
                <a href="https://cinematrix.chrisoleson.dev" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/cinematrix.png" height="24" width="24"/>
                        <h3>Cinematrix</h3>
                    </div>
                    <p>
                        Built over a weekend for a job interview, Cinematrix showcases a beautiful UI,
                        third party API integrations, and a secure authentication system.
                    </p>
                </a>
            </div>
        </section>

        <section>
            <h1 style="margin-top: 0;">Technologies</h1>
            <div class="row">
                <div v-for="technology in technologies" class="tech card">
                    <h3>{{ technology }}</h3>
                </div>
            </div>
        </section>
    </div>
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
.card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    min-width: 250px;
    &.tech {
        min-width: fit-content;
        min-height: 0;
    }
    &:hover {
        background-color: var(--secondary);
    }
}

.row {
    max-width: 1000px;
    margin: 0 auto;
    justify-content: center;
}

.project-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

h3 {
    margin: 0;
}
</style>
