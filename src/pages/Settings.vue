<script lang="ts" setup>
import Header from '../components/PageHeader.vue';
import AccountManagment from '../tabs/AccountManagment.vue';
import Accounts from '../tabs/Accounts.vue';
</script>
<template>
    <Header class="mt-12 mb-6"><template #title>Settings</template></Header>
    <AccountManagment />
    <hr class="my-8">
    <Accounts />

</template>
<style scoped></style>