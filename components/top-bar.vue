<template>
    <header>
        <div>
            <div>
                <FishButton simple to="/" text="Home"/>
                <FishButton simple to="/portfolio" text="Portfolio"/>
                <FishButton simple to="/blog" text="Blog"/>
            </div>

            <div>
                <FishButton big simple newTab to="https://github.com/chris-oleson" title="github.com/chris-oleson" icon="mdi:github"/>
                <FishButton big simple newTab to="https://www.linkedin.com/in/chris-oleson" title="https://www.linkedin.com/in/chris-oleson" icon="mdi:linkedin"/>
                <FishButton big simple newTab to="https://www.google.com/maps/place/Denver,+CO" title="Denver, Colorado" icon="mdi:location"/>
                <FishButton big simple to="mailto:chris@oleson.family" title="chris@oleson.family" icon="mdi:email"/>
            </div>
        </div>
    </header>
</template>
