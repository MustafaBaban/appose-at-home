<script setup lang="ts">
import TabHeader from '../components/TabHeader.vue';
</script>
<template>
    <TabHeader>
        <template #title>Account & Access Management</template>
        <template #subtitle>Control access for employees with appose accounts and manage their permissions.</template>
    </TabHeader>
    <hr class="mb-8 mt-5">
    <section class="w-full flex flex-row gap-6  justify-between max-sm:flex-col">
        <div class="flex flex-col gap-4 ">
            <div class="section-label pr-6">
                <h5 class="text-sm font-semibold ">Permission Groups</h5>
                <p class="text-sm text-info font-normal mb-3">Define permissions levels and what each level can do</p>
                <a href="#" class="button-link">New Group</a>
            </div>

        </div>
        <div class="grow rounded-2xl border border-zinc-200 overflow-hidden shadow-xxs ">
            <table class="table-auto w-full" style=" border-collapse: separate; border-spacing: 0; ">
                <thead class="bg-zinc-50 text-xs font-semibold">
                    <tr class="">
                        <!-- //TODO make padding correct number -->
                        <th class="px-6 py-3">Group Name</th>
                        <th class="px-6 py-3">Available Features</th>
                    </tr>
                </thead>
                <tbody class="text-sm font-medium">
                    <tr class="">
                        <td class=" px-6 py-6">
                            <div class="section-label pr-6">
                                <p class="text-sm font-medium ">Administrator</p>
                                <p class="text-sm text-info  font-normal">System Required</p>
                            </div>
                        </td>
                        <td class=" px-6 py-6 text-info">All Features</td>
                    </tr>
                    <tr>
                        <td class=" px-6 py-6 ">Human Resources</td>
                        <td class=" px-6 py-6 text-info font-normal">Teachers, Subjects, 2 more</td>
                    </tr>
                    <tr>
                        <td class=" px-6 py-6">Teachers</td>
                        <td class=" px-6 py-6 text-info font-normal">Classes, Student Groups</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<style scoped></style>