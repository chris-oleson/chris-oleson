<template>
<header class="header">
    <div>
        <nuxt-link class="simple button" to="/">Home</nuxt-link>
        <nuxt-link class="simple button" to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link class="simple button" to="/blog">Blog</nuxt-link>
    </div>
</header>
</template>

<style scoped>
.header {
    backdrop-filter: blur(3px);
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    & > * {
        height: var(--header-height);
        margin: 0 auto;
        max-width: 800px;
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;
    }
}
</style>
