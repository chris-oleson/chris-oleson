<template>
<div class="content">
    <div class="section">
        <h1 class="title">Hi, I'm Chris.</h1>
        <h2 class="subtitle">
            I'm a web developer, UI designer, and entrepreneur. Technology fascinates me; it's the perfect blend of creativity and problem-solving.
            If you're building something on the internet, let's talk!
        </h2>
    </div>

    <div class="horizontal divider"/>

    <div class="section">
        <h2 class="title">Professional Projects</h2>
        <div class="row">
            <a href="https://candaceowens.com" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">Candace Owens</h2>
                <div class="text">Built in Wordpress and Python, I worked on this site with a few other developers to implement features and bugfixes.</div>
            </a>
            <a href="https://inspireinsight.com" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">Inspire Insight</h2>
                <div class="text">The frontend of this site needed major refactoring, so another developer and I worked to rebuild it in React.</div>
            </a>
            <a href="https://entole.family" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">Entole</h2>
                <div class="text">I worked with another developer to rebuild the frontend of this Drupal site in Vue.</div>
            </a>
        </div>
    </div>

    <div class="horizontal divider"/>

    <div class="section">
        <h2 class="title">Personal Projects</h2>
        <div class="row">
            <a href="https://vufi.app" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">VuFi</h2>
                <div class="text">
                    As my first self-built commercial web application,
                    VuFi is built with a Vue frontend and an Express backend.
                    The github repository is private for security reasons.
                </div>
            </a>
            <a href="https://bluprint.chrisoleson.dev" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">bluprint</h2>
                <div class="text">
                    bluprint is a saas boilerplate framework for launching web app MVPs quickly.
                    It is built with Nuxt to improve the speed of one-man development.
                </div>
            </a>
            <a href="https://chrisoleson.dev" target="_blank" rel="noopener noreferrer" class="project card">
                <h2 class="subtitle">Chris Oleson</h2>
                <div class="text">
                    This is the site you are currently using, which acts as a business card, portfolio, and resume.
                    I recently rewrote it using bluprint as my starting point.
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

    <div class="horizontal divider"/>

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
                <h2 class="subtitle">JavaScript</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">TypeScript</h2>
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
                <h2 class="subtitle">Wordpress</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">PHP</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Tailwind</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">Python</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">FastAPI</h2>
            </div>
            <div class="tech card">
                <h2 class="subtitle">C#</h2>
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
        </div>
    </div>
</div>
</template>

<script setup>
useHead ({ title: 'Chris Oleson' })
</script>

<style scoped>
.content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
}

.card {
    flex: 1;
    min-width: 17em;
    min-height: 11rem;
    display: flex;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;
    transition-duration: .2s;
    max-width: 380px;
    & .subtitle {
        text-align: center;
    }
    &:hover, &:focus {
        background-color: var(--low-accent);
    }
    &.tech {
        min-width: fit-content;
        min-height: 0;
    }
}
</style>
