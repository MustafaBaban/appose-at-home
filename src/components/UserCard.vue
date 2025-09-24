<template>
    <div class="flex flex-row items-center gap-4">
        <img :src="imageSrc" alt="" width="48" height="48" class="rounded-full border border-zinc-200">
        <div class="info">
            <p class="text-lg font-semibold">
                <slot name="name" />
            </p>
            <p class="text-sm text-info font-normal">
                <slot name="email" />
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

defineSlots<{
    name: () => string | HTMLElement
    email: () => string | HTMLElement
}>()


defineProps<{
    imageSrc: string
}>()

</script>

<style scoped>
/* Add your styles here if needed */
</style>