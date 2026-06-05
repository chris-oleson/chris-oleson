<template>
    <div data-aos="fade-in">
        <section>
            <h1>Projects</h1>
            <div class="grid">
                <NuxtLink to="https://vufi.app" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/vufi.svg" height="24" width="24"/>
                        <h3>VuFi</h3>
                    </div>
                    <p>
                        VuFi a web app for tracking financial assets and liabilities.
                        It is written in Nuxt, but the github repository is private for security reasons.
                    </p>
                </NuxtLink>
                <NuxtLink to="https://chrisoleson.dev" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/fish.png" height="24" width="24"/>
                        <h3>chrisoleson.dev</h3>
                    </div>
                    <p>
                        This is the site you are currently using, which acts as a business card, portfolio, and blog.
                    </p>
                </NuxtLink>
                <NuxtLink to="https://cinematrix.chrisoleson.dev" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/cinematrix.png" height="24" width="24"/>
                        <h3>Cinematrix</h3>
                    </div>
                    <p>
                        Built over a weekend for a job interview, Cinematrix showcases a beautiful UI,
                        third party API integrations, and a secure authentication system.
                    </p>
                </NuxtLink>
                <NuxtLink to="https://github.com/chris-oleson/fish-ui" target="_blank" rel="noopener" class="project card">
                    <div class="project-title">
                        <NuxtImg src="/images/fishui.svg" height="24" width="24"/>
                        <h3>Fish UI</h3>
                    </div>
                    <p>
                        Fish UI is a Nuxt UI component library that I maintain for use across all my projects.
                    </p>
                </NuxtLink>
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
    gap: 1rem;
    justify-content: start;
    min-width: min-content;
    transition-duration: var(--fast);
    &.tech {
        min-width: fit-content;
        min-height: 0;
    }
    &:hover {
        filter: brightness(var(--hover-brightness));
    }
}

.grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
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

@media screen and (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
