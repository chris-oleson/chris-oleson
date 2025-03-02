<template>
<header class="header">
    <div>
        <img src="/images/profile-pic.jpg" height="42" width="42" alt="Profile Picture">
        <h2 class="subtitle">Chris Oleson</h2>

        <div class="horizontal spacer"/>

        <a class="big simple icon button" title="Email" href="mailto:chris@oleson.family">
            <Icon name="mdi:email"/>
        </a>
        <a class="big simple icon button" title="LinkedIn" href="https://www.linkedin.com/in/chris-oleson/" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:linkedin"/>
        </a>
        <a class="big simple icon button" title="GitHub" href="https://github.com/chris-oleson" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:github"/>
        </a>
    </div>
</header>
</template>

<style scoped>
.header {
    backdrop-filter: blur(5px);
    height: var(--header-height);
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    & > * {
        height: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        gap: .5rem;
        padding: 0 1rem;
        justify-content: space-between;
        align-items: center;
    }
}

.subtitle {
    text-wrap: nowrap;
}
img {
    border-radius: 50%;
}

.vertical.list {
    border: none;
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    & .button {
        width: 100%;
        text-align: end;
        text-transform: none;
    }
}
</style>
