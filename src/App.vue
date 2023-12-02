<template>
    <div id="header">
        <a href="mailto:crolesonjr@gmail.com">crolesonjr@gmail.com</a>
        <a href="https://github.com/chris-oleson" target="_blank">
            <img v-if="theme == 'light'" class="circle" height="32" width="32" src="https://cdn.simpleicons.org/github/202d3b"/>
            <img v-if="theme == 'dark'" class="circle" height="32" width="32" src="https://cdn.simpleicons.org/github/ffffff"/>
        </a>
        <a href="https://www.linkedin.com/in/chris-oleson-8372b2160/" target="_blank">
            <img v-if="theme == 'light'" height="32" width="32" src="https://cdn.simpleicons.org/linkedin/202d3b"/>
            <img v-if="theme == 'dark'" height="32" width="32" src="https://cdn.simpleicons.org/linkedin/ffffff"/>
        </a>
    </div>

    <div class="container">
        <div class="title">
            <h1>Chris Oleson</h1>
            <div class="subtitle">
                <p>Developer</p>
                <p>Designer</p>
                <p>Entrepreneur</p>
            </div>
        </div>

        <div class="projects">
            <h2>Projects</h2>
            <hr>
            <a @click="display('portfolio')">Portfolio</a>
            <a @click="display('vufi')">VuFi</a>
        </div>

        <div class="details">
            <Transition mode="out-in">
                <p v-if="details == 'portfolio'">
                    <p>I created this website using only the Vue javascript framework, which is probably overkill for such a simple project. However, future features will be easy to add because because of it.</p>
                    <div><a href="https://chrisoleson.dev" target="_blank">Site ▶︎</a></div>
                    <div><a href="https://github.com/chris-oleson/my-website">Code ▶︎</a></div>
                </p>
                <p v-else-if="details == 'vufi'">
                    <p>VuFi is a full stack commercial web application that automatically tracks and visualizes financial asset data. The frontend is built with Vue, and the backend uses Express, Node, and MySQL</p>
                    <div><a href="https://vufi.app" target="_blank">Site ▶︎</a></div>
                    <div><a href="https://github.com/chris-oleson/vufi-frontend">Code ▶︎</a></div>
                </p>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const details = ref('')
function display(project) {
    if (project == details.value) {
        details.value = ''
    }
    else {
        details.value = project
    }
}

let theme = 'light'
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
    document.documentElement.setAttribute('data-theme', 'dark')
}
</script>

<style>
:root {
  --background: #ffffff;
  --text: #202d3b;
  --shadow: 4px 4px 3px rgba(136, 136, 136, 0.5);
  --shadow-title: 7px 7px 6px rgba(136, 136, 136, 0.5);
}

[data-theme="dark"] {
    --background: #202d3b;
    --text: #ffffff;
    --shadow: none;
    --shadow-title: none;
}

body {
    font-family: Roboto, Geneva, Tahoma, sans-serif;
    font-weight: 300;
    background-color: var(--background);
    color: var(--text)
}

a {
    color: inherit;
    text-decoration: inherit;
    transition-duration: 200ms;
    font-weight: 400;
}
a:hover {
    transform: scale(1.05);
    text-shadow: var(--shadow)
}

h1 {
    font-size: 6em;
    margin: 0;
    font-weight: 100;
    text-shadow: var(--shadow-title)
}

h2 {
    font-weight: 300;
    margin: 0;
}

img {
    transition-duration: 200ms;
}
img:hover{
    box-shadow: var(--shadow)
}

.circle {
    border-radius: 100%;
}

#header {
    display: flex;
    justify-content: right;
    align-content: center;

    a {
        margin: auto 10px auto 10px;
    }
}

.container {
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

.title {
    margin: 0px 50px 20px 50px;
    text-align: center;

    .subtitle {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    p {
        padding: 0px 10px
    }
}

.projects {
    text-align: center;

    hr {
        border: none;
        height: 1px;
        background: #202d3b;
    }

    a {
        padding: 5px;
        user-select: none;
        cursor: pointer;
        display: block;
    }
}

.details {
    width: 300px;

    div {
        text-align: right;
    }

    a {
        display: inline-block;
    }
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.2s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>