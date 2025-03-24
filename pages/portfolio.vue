<template>
<div>
    <section>
        <h2>Projects</h2>
        <div class="row">
            <a href="https://vufi.app" target="_blank" rel="noopener noreferrer" class="project card">
                <h3>VuFi</h3>
                <p>
                    As my first self-built commercial web application,
                    VuFi is built with a Vue frontend and an Express backend.
                    The github repository is private for security reasons.
                </p>
            </a>
            <a href="https://bluprint.chrisoleson.dev" target="_blank" rel="noopener noreferrer" class="project card">
                <h3>bluprint</h3>
                <p>
                    bluprint is a saas boilerplate framework for launching web app MVPs quickly.
                    It is built with Nuxt to improve the speed of one-man development.
                </p>
            </a>
            <a href="https://chrisoleson.dev" target="_blank" rel="noopener noreferrer" class="project card">
                <h3>Chris Oleson</h3>
                <p>
                    This is the site you are currently using, which acts as a business card, portfolio, and blog.
                    I recently rewrote it using bluprint as my starting point.
                </p>
            </a>
            <a href="https://cinematrix.site" target="_blank" rel="noopener noreferrer" class="project card">
                <h3>Cinematrix</h3>
                <p>
                    Built over a weekend for a job interview, Cinematrix showcases a beautiful UI,
                    third party API integrations, and a secure authentication system.
                </p>
            </a>
        </div>
    </section>

    <section>
        <h2>Technologies</h2>
        <div class="row">
            <div class="tech card">
                <h3 class="">HTML</h3>
            </div>
            <div class="tech card">
                <h3 class="">CSS</h3>
            </div>
            <div class="tech card">
                <h3 class="">JavaScript</h3>
            </div>
            <div class="tech card">
                <h3 class="">TypeScript</h3>
            </div>
            <div class="tech card">
                <h3 class="">Vue</h3>
            </div>
            <div class="tech card">
                <h3 class="">Express</h3>
            </div>
            <div class="tech card">
                <h3 class="">Node</h3>
            </div>
            <div class="tech card">
                <h3 class="">Nuxt</h3>
            </div>
            <div class="tech card">
                <h3 class="">MySQL</h3>
            </div>
            <div class="tech card">
                <h3 class="">SQLite</h3>
            </div>
            <div class="tech card">
                <h3 class="">React</h3>
            </div>
            <div class="tech card">
                <h3 class="">Wordpress</h3>
            </div>
            <div class="tech card">
                <h3 class="">PHP</h3>
            </div>
            <div class="tech card">
                <h3 class="">Tailwind</h3>
            </div>
            <div class="tech card">
                <h3 class="">Python</h3>
            </div>
            <div class="tech card">
                <h3 class="">FastAPI</h3>
            </div>
            <div class="tech card">
                <h3 class="">C#</h3>
            </div>
            <div class="tech card">
                <h3 class="">Git</h3>
            </div>
            <div class="tech card">
                <h3 class="">Postmark</h3>
            </div>
            <div class="tech card">
                <h3 class="">Stripe</h3>
            </div>
            <div class="tech card">
                <h3 class="">Plaid</h3>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
useHead ({ title: 'Portfolio - Chris Oleson' })
</script>

<style scoped>
.card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 17em;
    min-height: 13rem;
    max-width: 396px;
    &.tech {
        min-width: fit-content;
        min-height: 0;
    }
}

p {
    text-align: start;
}

h2 {
    font-size: 3rem;
    font-weight: 100;
    text-align: center;
}
</style>
