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
                <v-container class="fill-height">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <h1 class="text-h1 font-weight-thin text-center mt-n8">Chris Oleson</h1>
                            <div class="d-flex justify-space-around ma-8">
                                <p class="font-weight-light">Developer</p>
                                <p>•</p>
                                <p class="font-weight-light">Designer</p>
                                <p>•</p>
                                <p class="font-weight-light">Entrepreneur</p>
                            </div>
                        </v-col>

                        <v-col cols="12" sm="6" class="d-flex justify-center">
                            <v-list class="text-center">
                                <v-list-item class="font-weight-thin text-h5">
                                    Projects
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-btn class="text-none font-weight-light" size="x-large" variant="plain" href="https://vufi.app/" target="_blank">VuFi</v-btn>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
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