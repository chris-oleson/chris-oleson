<template>
<div class="full height section">
    <div class="picture">
        <h1>Hi, I'm Chris.</h1>
        <nuxt-img src="/images/profile-pic.jpg" height="200" width="200"/>
    </div>
    <h3>
        I'm a web developer, UI designer, and entrepreneur. Technology fascinates me; it's the perfect blend of creativity and problem-solving.
        If you're building something on the internet, let's talk!
    </h3>
    <div class="contact">
        <a class="very big simple icon button" title="Denver, Colorado" href="https://www.google.com/maps/place/Denver,+CO" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:location"/>
        </a>
        <a class="very big simple icon button" title="chris@oleson.family" href="mailto:chris@oleson.family">
            <Icon name="mdi:email"/>
        </a>
        <a class="very big simple icon button" title="linkedin.com/in/chris-oleson" href="https://www.linkedin.com/in/chris-oleson" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:linkedin"/>
        </a>
        <a class="very big simple icon button" title="github.com/chris-oleson" href="https://github.com/chris-oleson" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:github"/>
        </a>
    </div>
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

.contact {
    display: flex;
}
</style>
