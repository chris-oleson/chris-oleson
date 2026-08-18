<template>
    <NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes" draggable="false" :title="title"><slot/></NuxtLink>
    <button v-else :disabled="disabled" :class="classes" draggable="false" :title="title"><slot/></button>
</template>

<script setup>
const props = defineProps({
    to: String,
    simple: Boolean,
    big: Boolean,
    small: Boolean,
    selected: Boolean,
    disabled: Boolean,
    success: Boolean,
    error: Boolean,
    round: Boolean,
    secondary: Boolean,
    chip: Boolean,
    title: String,
    outlined: Boolean
})

const classes = computed(() => ({
    simple: props.simple,
    big: props.big,
    small: props.small,
    selected: props.selected,
    disabled: props.disabled,
    success: props.success,
    error: props.error,
    round: props.round,
    secondary: props.secondary,
    chip: props.chip,
    outlined: props.outlined,
}))
</script>

<style scoped>
button, a {
    padding: 0 1rem;
    letter-spacing: .05em;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: inherit;
    width: fit-content;
    height: 2rem;
    border: none;
    border-radius: var(--border-radius);
    transition-duration: var(--fast);
    user-select: none;
    cursor: pointer;
    color: var(--gold1);
    background: var(--primary);
    text-wrap: nowrap;
    &:is(:hover, :focus, .selected):not(.disabled, :active) {
        filter: brightness(1.2);
    }
    &.error {
        background: var(--error);
    }
    &.success {
        background: var(--success);
    }
    &.disabled {
        opacity: .3;
        pointer-events: none;
    }
    &.big {
        gap: 1rem;
        height: 3rem;
        padding: 0 1.5rem;
    }
    &.secondary {
        color: var(--text-primary);
        background: var(--secondary);
        &:is(:hover, :focus, .selected):not(.disabled, :active) {
            filter: brightness(var(--hover-brightness));
        }
    }
    &.outlined {
        color: var(--text-primary);
        border: var(--border);
        background: transparent;
        &:is(:hover, :focus, .selected):not(.disabled, :active) {
            border-color: var(--border-hover);
            filter: none;
        }
    }
    &.simple {
        color: var(--text-secondary);
        padding: 0;
        background: transparent;
        border-radius: 0;
        position: relative;
        height: 1rem;
        &:is(:hover, :focus, .selected):not(.disabled, :active) {
            color: var(--text-primary);
            filter: none;
        }
    }
    &.small {
        font-size: var(--font-size-small);
        gap: .25rem;
    }
    &.round {
        width: 3rem !important;
        height: 3rem !important;
        padding: 0;
        border-radius: 50%;
    }
    &.chip {
        height: calc(1.5rem - 2px);
        padding: 0 .5rem;
        border-radius: var(--border-radius);
        font-size: var(--font-size-small);
        gap: .25rem;
    }
}
</style>
