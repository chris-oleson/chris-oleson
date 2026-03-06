<template>
<section data-aos="fade-in">
    <div class="picture">
        <h1>Hi, I'm Chris.</h1>
        <NuxtImg src="/images/profile-pic.png" height="200" width="200" alt="Chris Oleson"/>
    </div>
    <h2>
        I'm a designer, engineer, and entrepreneur. Technology fascinates me; it's the perfect blend of creativity and problem-solving.
        If you're building something on the web, let's talk!
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
    max-width: 800px;
    margin: 3rem auto;
}

section {
    padding-top: 25vh;
}
</style>
