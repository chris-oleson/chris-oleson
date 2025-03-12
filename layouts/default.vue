<template>
<div>
    <landing-header/>
    <div class="content">
        <slot/>
    </div>
</div>
</template>

<style scoped>
.content {
    position: absolute;
    top: var(--header-height);
    bottom: 0;
    background-color: var(--background);
    width: 100%;
}
</style>
