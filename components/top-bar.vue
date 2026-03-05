<template>
<header>
    <div>
        <div>
            <FishButton simple to="/">Home</FishButton>
            <FishButton simple to="/portfolio">Portfolio</FishButton>
            <FishButton simple to="/blog">Blog</FishButton>
        </div>

        <div>
            <FishButton simple newTab to="https://github.com/chris-oleson" title="GitHub"><Icon name="mdi:github"/></FishButton>
            <FishButton simple newTab to="https://www.linkedin.com/in/chris-oleson" title="LinkedIn"><Icon name="mdi:linkedin"/></FishButton>
            <FishButton simple newTab to="https://www.google.com/maps/place/Denver,+CO" title="Denver, Colorado"><Icon name="mdi:location"/></FishButton>
            <FishButton simple to="mailto:chris@oleson.family" title="chris@oleson.family"><Icon name="mdi:email"/></FishButton>
            <FishButton simple newTab to="https://buy.stripe.com/aEUaGJ7iH1aO9e84gg" title="Buy me a coffee"><Icon name="mdi:coffee"/></FishButton>
        </div>
    </div>
</header>
</template>

<style scoped>
header {
    backdrop-filter: blur(3px);
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    & > div {
        padding: 1rem;
        margin: auto;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & div {
            display: flex;
            gap: 1rem;
        }

        & :first-child {
            gap: 2rem;
        }

        @media (max-width: 550px) {
            flex-direction: column-reverse;
            justify-content: center;
            gap: 1rem;
        }
    }
}
</style>
