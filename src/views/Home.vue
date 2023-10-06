<template>
    <v-container class="fill-height mt-n8">
        <v-row class="align-center">
            <v-col>
                <h1 class="text-h1 font-weight-thin d-flex justify-center">Chris Oleson</h1>
                <div class="d-flex justify-space-around my-8">
                    <p class="font-weight-light">Developer</p>
                    <p class="font-weight-light">Designer</p>
                    <p class="font-weight-light">Entrepreneur</p>
                </div>
            </v-col>

            <v-col class="text-right d-flex justify-end">
                <div>
                    <v-list-item class="my-10 font-weight-light" variant="plain" to="/about">About Me</v-list-item>
                    <v-list-item class="my-10 font-weight-light" variant="plain" to="/projects">Projects</v-list-item>
                    <v-list-item class="my-10 font-weight-light" variant="plain" to="/blog">Blog</v-list-item>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>