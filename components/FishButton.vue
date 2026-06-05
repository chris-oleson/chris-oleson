<template>
<NuxtLink v-if="to" :to="to" :disabled="disabled" :class="classes" draggable="false"><slot/></NuxtLink>
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
    success: Boolean,
    error: Boolean,
    round: Boolean,
    secondary: Boolean,
    chip: Boolean,
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
    chip: props.chip
}))
</script>

<style scoped>
button, a {
    padding: 0 var(--size4);
    letter-spacing: .05em;
    display: flex;
    gap: var(--size2);
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: inherit;
    width: fit-content;
    line-height: var(--size4);
    height: var(--size6);
    border: none;
    border-radius: var(--border-radius);
    transition-duration: var(--fast);
    user-select: none;
    outline: none;
    cursor: pointer;
    color: var(--gold1);
    background: var(--primary);
    text-wrap: nowrap;
    &:is(:hover, :focus, .selected):not(.disabled) {
        filter: brightness(1.2);
    }
    &:active:not(.disabled) {
        filter: none;
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
        gap: var(--size4);
        height: var(--size9);
        padding: 0 var(--size5);
        outline: 1px solid var(--gold2);
        outline-offset: -5px;
    }
    &.secondary {
        color: var(--text-primary);
        background: var(--secondary);
        &:is(:hover, :focus, .selected):not(.disabled) {
            filter: brightness(var(--hover-brightness));
        }
    }
    &.simple {
        color: var(--text-secondary);
        padding: 0;
        background: transparent;
        border-radius: 0;
        position: relative;
        height: var(--size4);
        &:is(:hover, :focus, .selected):not(.disabled) {
            color: var(--text-primary);
            filter: none;
        }
    }
    &.small {
        font-size: var(--size3);
        gap: var(--size1);
    }
    &.round {
        width: var(--size8) !important;
        height: var(--size8) !important;
        padding: 0;
        border-radius: 50%;
    }
    &.chip {
        height: calc(var(--size5) - 2px);
        padding: 0 var(--size2);
        border-radius: var(--border-radius);
        font-size: var(--size3);
        gap: var(--size1);
    }
}
</style>
