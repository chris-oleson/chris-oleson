<template>
<header>
    <div>
        <div>
            <nuxt-link class="simple button" to="/">Home</nuxt-link>
            <nuxt-link class="simple button" style="margin: 0 1rem;" to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link class="simple button" to="/blog">Blog</nuxt-link>
        </div>

        <div>
            <a class="big simple icon button" title="github.com/chris-oleson" href="https://github.com/chris-oleson" target="_blank" rel="noopener noreferrer">
                <Icon name="mdi:github"/>
            </a>
            <a class="big simple icon button" title="linkedin.com/in/chris-oleson" href="https://www.linkedin.com/in/chris-oleson" target="_blank" rel="noopener noreferrer">
                <Icon name="mdi:linkedin"/>
            </a>
            <a class="big simple icon button" title="Denver, Colorado" href="https://www.google.com/maps/place/Denver,+CO" target="_blank" rel="noopener noreferrer">
                <Icon name="mdi:location"/>
            </a>
            <a class="big simple icon button" title="chris@oleson.family" href="mailto:chris@oleson.family">
                <Icon name="mdi:email"/>
            </a>
        </div>
    </div>
</header>
</template>
