<template>
    <div id="header">
        <a href="mailto:crolesonjr@gmail.com">crolesonjr@gmail.com</a>
        <a href="https://github.com/chris-oleson" target="_blank"><img height="32" width="32" src="https://cdn.simpleicons.org/github/202d3b"/></a>
        <a href="https://www.linkedin.com/in/chris-oleson-8372b2160/" target="_blank"><img height="32" width="32" src="https://cdn.simpleicons.org/linkedin/202d3b"/></a>
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
            <a href="https://vufi.app" target="_blank">VuFi</a>
        </div>
    </div>
</template>

<style>
body {
    font-family: Roboto, Geneva, Tahoma, sans-serif;
    font-weight: 300;
    color: #202d3b;
}

a {
    color: inherit;
    text-decoration: inherit;
    transition-duration: 200ms;
}
a:hover {
    filter: brightness(150%);
    transform: scale(1.05);
}

#header {
    display: flex;
    justify-content: right;
    align-content: center;
    margin-bottom: 100px;

    a {
        margin: auto 10px auto 10px;
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
}

.title {
    margin: 100px;
    text-align: center;

    h1 {
        font-size: 96px;
        margin: 0;
        font-weight: 100;
    }

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
    margin: 100px;
    text-align: center;

    h2 {
        font-weight: 300;
        margin: 0px;
    }

    hr {
        border: none;
        height: 1px;
        background: #202d3b;
    }

    a {
        font-size: 20px;
        font-weight: 400;
        display: block;
    }
}
</style>