<template>
    <header>
        <div>
            <div>
                <FishButton simple to="/" text="Home"/>
                <FishButton simple to="/portfolio" text="Portfolio"/>
                <FishButton simple to="/blog" text="Blog"/>
            </div>

            <div>
                <FishButton big simple newTab to="https://github.com/chris-oleson" title="GitHub" icon="mdi:github"/>
                <FishButton big simple newTab to="https://www.linkedin.com/in/chris-oleson" title="LinkedIn" icon="mdi:linkedin"/>
                <FishButton big simple newTab to="https://www.google.com/maps/place/Denver,+CO" title="Denver, Colorado" icon="mdi:location"/>
                <FishButton big simple to="mailto:chris@oleson.family" title="chris@oleson.family" icon="mdi:email"/>
                <FishButton big simple newTab to="https://buy.stripe.com/aEUaGJ7iH1aO9e84gg" title="Buy me a coffee" icon="mdi:coffee"/>
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
    left: 1rem;
    right: 1rem;

    & > div {
        height: var(--header-height);
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
