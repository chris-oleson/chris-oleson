<template>
<header data-aos="fade-down">
    <div>
        <div class="show-desktop">
            <FishButton simple to="/">Home</FishButton>
            <FishButton simple to="/portfolio">Portfolio</FishButton>
            <FishButton simple to="/technologies">Technologies</FishButton>
            <FishButton simple to="/blog">Blog</FishButton>
        </div>

        <div>
            <FishButton simple newTab to="https://github.com/chris-oleson" title="GitHub"><Icon class="big" name="mdi:github"/></FishButton>
            <FishButton simple newTab to="https://www.linkedin.com/in/chris-oleson" title="LinkedIn"><Icon class="big" name="mdi:linkedin"/></FishButton>
            <FishButton simple newTab to="https://www.google.com/maps/place/Denver,+CO" title="Denver, Colorado"><Icon class="big" name="mdi:location"/></FishButton>
            <FishButton simple to="mailto:chris@oleson.family" title="chris@oleson.family"><Icon class="big" name="mdi:email"/></FishButton>
            <FishButton simple newTab to="https://buy.stripe.com/aEUaGJ7iH1aO9e84gg" title="Buy me a coffee"><Icon class="big" name="mdi:coffee"/></FishButton>
        </div>

        <div class="show-mobile">
            <FishButton simple title="Menu" @click="showMenu = !showMenu"><Icon class="big" name="mdi:menu"/></FishButton>
        </div>
    </div>
</header>

<div v-if="showMenu" class="mobile-nav">
    <FishButton simple to="/">Home</FishButton>
    <FishButton simple to="/portfolio">Portfolio</FishButton>
    <FishButton simple to="/technologies">Technologies</FishButton>
    <FishButton simple to="/blog">Blog</FishButton>
</div>
</template>

<script setup>
const route = useRoute()
const showMenu = ref(false)

watch(() => route.path, () => {
    showMenu.value = false
})
</script>

<style scoped>
header {
    backdrop-filter: blur(3px);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    & > div {
        padding: 1rem;
        margin: auto;
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;

        & div {
            display: flex;
            gap: 1rem;
        }

        & :first-child {
            gap: 2rem;
        }

    }
}

.show-mobile {
    display: none;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    inset: 0;
    padding: 1rem;
    padding-top: 5rem;
    background-color: var(--background);
    z-index: 99;
    align-items: end;
}

@media (max-width: 700px) {
    .show-desktop {
        display: none;
    }
    .show-mobile {
        display: block;
    }
}
</style>
