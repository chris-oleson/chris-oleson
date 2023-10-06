<template>
    <v-app>
        <v-app-bar class="bg-background" flat>
            <v-spacer></v-spacer>
            <v-btn class="font-weight-light text-none" variant="plain" href="mailto:crolesonjr@gmail.com">crolesonjr@gmail.com</v-btn>
            <v-btn icon variant="plain" href="https://github.com/chris-oleson" target="_blank"><img height="32" width="32" src="https://cdn.simpleicons.org/github/ffffff"/></v-btn>
            <v-btn class="mx-2" icon variant="plain" href="https://www.linkedin.com/in/chris-oleson-8372b2160/" target="_blank"><img height="32" width="32" src="https://cdn.simpleicons.org/linkedin/ffffff"/></v-btn>
        </v-app-bar>

        <v-main>
            <v-fade-transition appear>
                <router-view/>
            </v-fade-transition>
        </v-main>
    </v-app>
</template>

<style>
/* Disable ripple effect */
.v-ripple__container {
    opacity: 0 !important;
}

/* Removing default link styling */
a {
    color: inherit;
    text-decoration: inherit;
}
</style>