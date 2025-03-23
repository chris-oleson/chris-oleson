<template>
<div class="full height section">
    <div class="picture">
        <h1>Hi, I'm Chris.</h1>
        <nuxt-img src="/images/profile-pic.jpg" height="200" width="200" alt="Chris Oleson"/>
    </div>
    <h2>
        I'm a web developer, UI designer, and entrepreneur. Technology fascinates me; it's the perfect blend of creativity and problem-solving.
        If you're building something on the internet, let's talk!
    </h2>
</div>
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
    }
}

h2 {
    font-size: 1.5rem;
    text-align: justify;
}
</style>
