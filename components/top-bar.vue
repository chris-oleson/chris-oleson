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
