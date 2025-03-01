<template>
<div>
    <div class="section">
        <h1 class="title">Hi, I'm Chris.</h1>
        <h2 class="subtitle">
            I'm an engineer, designer, and entrepreneur. Technology fascinates me; the perfect blend of creativity and problem-solving.
            If you're building something on the internet, let's talk!
        </h2>
    </div>
    <div class="secondary section">
        <h2 class="title">Projects</h2>
        <div class="row">
            <a href="https://vufi.app" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">VuFi</h2>
                <div class="text">
                    As my first self-built commercial web application,
                    VuFi automatically tracks and visualizes financial asset data.
                    The github repository is private for security reasons.
                </div>
            </a>
            <a href="https://bluprint.chrisoleson.dev" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">bluprint</h2>
                <div class="text">
                    After finding a tech stack that I enjoyed working with,
                    I built bluprint; a saas boilerplate for launching MVPs more quickly.
                </div>
            </a>
            <a href="https://chrisoleson.dev" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">chrisoleson.dev</h2>
                <div class="text">
                    This is the site you are currently using, which acts as a business card, portfolio, and resume.
                </div>
            </a>
            <a href="https://cinematrix.site" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">Cinematrix</h2>
                <div class="text">
                    Built over a weekend for a job interview, Cinematrix showcases a beautiful UI,
                    third party API integrations, and a secure authentication system.
                </div>
            </a>
        </div>
    </div>

    <div class="section">
        <h2 class="title">Technologies</h2>
        <div class="row">
            <div class="tech card">
                <h2 class="subtitle">HTML</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">CSS</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Javascript</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Vue</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Nuxt</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Express</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Node</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">MySQL</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">SQLite</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">React</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">PHP</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">C#</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Tailwind</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Sass</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Python</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Python</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Postmark</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Stripe</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Plaid</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Git</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Coolify</h2>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
useHead ({ title: 'Chris Oleson' })
</script>

<style scoped>
.card {
    flex: 1;
    min-width: 17em;
    min-height: 11rem;
    display: flex;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;
    transition-duration: .2s;
    text-align: justify;
    & .subtitle {
        text-align: center;
    }
    &.project:hover, &.project:focus {
        background-color: var(--low-accent);
    }
    &.tech {
        min-width: fit-content;
        min-height: 0;
    }
}
</style>
