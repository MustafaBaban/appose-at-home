<template>
    <div ref="root" class="relative inline-flex items-center">
        <button ref="btn" type="button"
            class="p-2 m-6 rounded hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            :aria-expanded="open ? 'true' : 'false'" aria-haspopup="menu" @click="toggle"
            @keydown.down.prevent="openAndFocus(0)" @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle"
            @keydown.esc.prevent="close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                    d="M1 8.0001C1 7.57214 1.17019 7.16171 1.47313 6.8591C1.77608 6.55649 2.18696 6.38648 2.61538 6.38648C3.04381 6.38648 3.45469 6.55649 3.75763 6.8591C4.06057 7.16171 4.23076 7.57214 4.23076 8.0001C4.23076 8.42805 4.06057 8.83848 3.75763 9.14109C3.45469 9.44371 3.04381 9.61371 2.61538 9.61371C2.18696 9.61371 1.77608 9.44371 1.47313 9.14109C1.17019 8.83848 1 8.42805 1 8.0001ZM6.45018 7.99984C6.45018 7.57189 6.62037 7.16146 6.92332 6.85885C7.22626 6.55623 7.63714 6.38623 8.06556 6.38623C8.49399 6.38623 8.90487 6.55623 9.20781 6.85885C9.51076 7.16146 9.68095 7.57189 9.68095 7.99984C9.68095 8.4278 9.51076 8.83823 9.20781 9.14084C8.90487 9.44345 8.49399 9.61346 8.06556 9.61346C7.63714 9.61346 7.22626 9.44345 6.92332 9.14084C6.62037 8.83823 6.45018 8.4278 6.45018 7.99984ZM13.3846 6.38648C12.9562 6.38648 12.5453 6.55649 12.2424 6.8591C11.9394 7.16171 11.7692 7.57214 11.7692 8.0001C11.7692 8.42805 11.9394 8.83848 12.2424 9.14109C12.5453 9.44371 12.9562 9.61371 13.3846 9.61371C13.813 9.61371 14.2239 9.44371 14.5269 9.14109C14.8298 8.83848 15 8.42805 15 8.0001C15 7.57214 14.8298 7.16171 14.5269 6.8591C14.2239 6.55649 13.813 6.38648 13.3846 6.38648Z"
                    fill="#625DF5" />
            </svg>
        </button>

        <Transition enter-active-class="transition ease-out duration-150" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <div v-if="open" class="absolute right-full mr-2 top-1/2 -translate-y-1/2 z-50">
                <div class="min-w-44 rounded-xl border border-zinc-200 bg-white shadow-lg p-1" role="menu"
                    aria-orientation="vertical" tabindex="-1" @keydown.esc.prevent="close"
                    @keydown.up.prevent="moveFocus(-1)" @keydown.down.prevent="moveFocus(1)">
                    <button v-for="(item, i) in items" :key="item.label" ref="menuItems" type="button"
                        class="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
                        role="menuitem" @click="select(item)" @keydown.enter.prevent="select(item)"
                        @keydown.space.prevent="select(item)" :data-index="i"
                        :class="item.color === 'red' ? 'text-red-600 hover:bg-red-50 focus:bg-red-50' : ''">
                        {{ item.label }}
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

type Item = { label: string; value: string; color: string };

const open = ref(false);
const root = ref<HTMLElement | null>(null);
const btn = ref<HTMLButtonElement | null>(null);
const menuItems = ref<Array<HTMLButtonElement | null>>([]);

const items = ref<Item[]>([
    { label: 'Add to Group', value: 'add', color: 'default' },
    { label: 'Remove from Group', value: 'remove', color: 'default' },
    { label: 'Delete Account', value: 'delete', color: 'red' },
]);

function toggle() {
    open.value ? close() : openAndFocus(0);
}

function openAndFocus(index = 0) {
    open.value = true;
    nextTick(() => {
        const target = menuItems.value[index];
        target?.focus();
    });
}

function close() {
    open.value = false;
    // btn.value?.focus();
}

function select(item: Item) {
    console.log(item);
    // Emit or handle selection here
    close();
}

function onClickOutside(e: MouseEvent) {
    if (!root.value) return;
    if (!root.value.contains(e.target as Node)) close();
}

function moveFocus(delta: number) {
    const els = menuItems.value.filter(Boolean) as HTMLButtonElement[];
    if (!els.length) return;
    const currentIndex =
        els.findIndex((el) => el === document.activeElement) ?? 0;
    const nextIndex = (currentIndex + delta + els.length) % els.length;
    els[nextIndex]!.focus();
}

onMounted(() => {
    document.addEventListener('click', onClickOutside, { capture: true });
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside, { capture: true });
});
</script>

<style scoped>
/* Optional: fine-tune transform origin for a nicer "from-left" pop */
.v-enter-from,
.v-leave-to {
    transform-origin: right center;
}
</style>
