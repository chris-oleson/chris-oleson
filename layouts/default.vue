<template>
<div>
    <top-bar/>
    <main><slot/></main>
</div>
</template>

<style scoped>
main {
    background-color: var(--background);
    min-height: 100vh;
}
</style>
