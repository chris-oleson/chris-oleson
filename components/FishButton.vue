<template>
<NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes" draggable="false" :target="newTab ? '_blank' : ''"><slot/></NuxtLink>
<button v-else :disabled="disabled" :class="classes" draggable="false"><slot/></button>
</template>

<script setup>
const props = defineProps({
    to: String,
    simple: Boolean,
    big: Boolean,
    small: Boolean,
    selected: Boolean,
    disabled: Boolean,
    error: Boolean,
    round: Boolean,
    secondary: Boolean,
    chip: Boolean,
    newTab: Boolean,
})

const classes = computed(() => ({
    simple: props.simple,
    big: props.big,
    small: props.small,
    selected: props.selected,
    disabled: props.disabled,
    error: props.error,
    round: props.round,
    secondary: props.secondary,
    chip: props.chip
}))
</script>

<style scoped>
button, a {
    color: var(--text-primary);
    padding: 0 .5rem;
    letter-spacing: 1.25px;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    font-weight: var(--bold-weight);
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: inherit;
    width: fit-content;
    height: 2rem;
    border: none;
    border-radius: var(--border-radius);
    transition-duration: .3s;
    user-select: none;
    outline: none;
    cursor: pointer;
    color: var(--white);
    background-color: var(--primary);
    box-shadow: var(--highlight-shadow);
    text-wrap: nowrap;
    &:is(:hover, :focus, .selected):not(.disabled) {
        filter: brightness(1.2);
    }
    &:active:not(.disabled) {
        filter: none;
    }
    &.round {
        width: fit-content;
        padding: .5rem;
        border-radius: 50%;
    }
    &.secondary {
        color: var(--text-primary);
        background-color: var(--secondary);
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: var(--hover-brightness);
        }
    }
    &.error {
        color: var(--white);
        background-color: var(--error);
    }
    &.disabled {
        opacity: .2;
        pointer-events: none;
    }
    &.big {
        gap: 1rem;
        padding: 0 1rem;
        font-size: 1.25rem;
        height: 3rem;
    }
    &.small {
        font-size: .75rem;
        height: 1.5rem;
    }
    &.simple {
        color: var(--text-secondary);
        padding: 0;
        background-color: transparent;
        border-radius: 0;
        position: relative;
        box-shadow: none;
        filter: none;
        &:is(:hover, :focus, .selected):not(.disabled) {
            color: var(--text-primary);
        }
    }
    &.chip {
        padding: 0 .5rem;
        border-radius: 999px;
        border: none;
        text-wrap: nowrap;
        text-transform: none;
        letter-spacing: 0px;
        height: 1.5rem;
        font-weight: var(--normal-weight);
    }
}
</style>
