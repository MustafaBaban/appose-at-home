<template>
    <h1 class="text-3xl font-semibold">
        <slot name="title" />
    </h1>
</template>
<script setup lang="ts">

defineSlots<{
  title: () => string | HTMLElement 
}>()
</script>