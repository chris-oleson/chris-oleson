<template>
    <NuxtLink v-if="to" :to="to" :class="classes" :target="newTab ? '_target' : ''">
        <Icon v-if="icon" :name="icon"/>
        <slot>{{ text }}</slot>
    </NuxtLink>

    <button v-else :class="classes">
        <Icon v-if="icon" :name="icon"/>
        <slot>{{ text }}</slot>
    </button>
</template>

<script setup>
const props = defineProps({
    text: { type: String, default: '' },
    to: { type: String, default: '' },
    primary: Boolean,
    border: Boolean,
    background: Boolean,
    simple: Boolean,
    big: Boolean,
    small: Boolean,
    selected: Boolean,
    disabled: Boolean,
    newTab: Boolean,
    error: Boolean,
    icon: { type: String, default: '' }
})

const classes = computed(() => ({
    primary: props.primary,
    border: props.border,
    background: props.background,
    simple: props.simple,
    big: props.big,
    small: props.small,
    selected: props.selected,
    disabled: props.disabled,
    error: props.error,
    icon: props.icon,
    text: props.text,
}))
</script>

<style scoped>
button, a {
    padding: .5em 1em;
    letter-spacing: 1.25px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-size: 1em;
    text-transform: uppercase;
    text-decoration: inherit;
    min-width: fit-content;
    border: none;
    border-radius: .5em;
    transition-duration: .2s;
    line-height: 1em;
    user-select: none;
    outline: none;
    cursor: pointer;
    height: fit-content;
    &.primary {
        color: white;
        background-color: var(--primary);
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: brightness(1.2);
        }
        &.error {
            background-color: var(--error);
        }
    }
    &.border {
        color: var(--text);
        border: 1px solid var(--accent);
        background-color: transparent;
        &.selected {
            background-color: var(--accent);
            border-color: transparent;
        }
        &:is(:hover, :focus):not(.disabled, .selected) {
            border: 1px solid var(--text);
        }
        &.error {
            color: var(--error);
            border-color: var(--error);
            &:is(:hover, :focus, .selected):not(.disabled) {
                background-color: var(--error);
                border-color: var(--error);
                color: white;
            }
        }
    }
    &.background {
        color: var(--text-accent);
        background-color: transparent;
        text-transform: none;
        letter-spacing: normal;
        &:is(:hover, :focus):not(.disabled, .selected) {
            color: var(--text);
        }
        &.selected {
            color: var(--text);
            background-color: var(--accent);
        }
    }
    &.selected {
        pointer-events: none;
    }
    &.disabled {
        opacity: .2;
        pointer-events: none;
    }
    &.big {
        &.text {
            padding: 1rem;
            & .iconify {
                font-size: 1.5rem;
            }
        }
        &:not(.text) {
            font-size: 2rem;
        }
    }
    &.small {
        font-size: .75rem;
    }
    &:not(.text) {
        border-radius: 50%;
        font-size: 1.5rem;
        padding: .5rem;
    }
    &.simple {
        color: var(--text-accent);
        padding: 0;
        background-color: transparent;
        &:is(:hover, :focus, .selected):not(.disabled) {
            color: var(--text);
        }
    }
}
</style>
