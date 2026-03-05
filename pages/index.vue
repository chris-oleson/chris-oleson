<template>
    <section>
        <div class="picture">
            <h1>Hi, I'm Chris.</h1>
            <NuxtImg src="/images/profile-pic.png" height="200" width="200" alt="Chris Oleson"/>
        </div>
        <h2 style="max-width: 800px; margin: 3rem auto;">
            I'm a web developer, UI designer, and entrepreneur. Technology fascinates me; it's the perfect blend of creativity and problem-solving.
            If you're building something on the internet, let's talk!
        </h2>
    </section>
</template>

<script setup>
useHead ({ title: 'Chris Oleson' })
</script>

<style scoped>
.picture {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    & h1 {
        text-wrap: nowrap;
    }
    & img {
        border-radius: 50%;
        box-shadow: var(--highlight-shadow);
    }
}

h1 {
    margin: 0;
}

h2 {
    font-size: 1.5rem;
}

section {
    padding-top: 25vh;
}
</style>
