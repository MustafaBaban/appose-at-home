<template>
    <h5 class="text-lg font-semibold mb-1">
        <slot name="title" />
    </h5>
    <p class="text-sm text-info font-normal">
        <slot name="subtitle" />
    </p>
</template>
<script setup lang="ts">

defineSlots<{
    title: () => string | HTMLElement
    subtitle: () => string | HTMLElement
}>()
</script>