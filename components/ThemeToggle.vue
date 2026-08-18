<template>
    <ColorScheme>
        <FishButton v-if="colorMode.value === 'light'" class="theme-toggle" simple title="Dark mode" @click="colorMode.preference = 'dark'">
            <Icon class="big" name="mdi:moon-waning-crescent"/>
        </FishButton>
        <FishButton v-if="colorMode.value === 'dark'" class="theme-toggle" simple title="Light mode" @click="colorMode.preference = 'light'">
            <Icon class="big" name="mdi:white-balance-sunny"/>
        </FishButton>
    </ColorScheme>
</template>

<script setup>
const colorMode = useColorMode()
</script>
