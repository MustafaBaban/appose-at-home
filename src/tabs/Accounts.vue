<script setup lang="ts">
import TabHeader from '../components/TabHeader.vue';
import UserCard from '../components/UserCard.vue';
import DropdownButton from '../components/DropdownButton.vue';
import Badge from '../components/Badge.vue';

</script>
<template>
    <TabHeader>
        <template #title>Accounts (10)</template>
        <template #subtitle>Manage access and permissions for employees with accounts.</template>
    </TabHeader>
    <section class="w-full mt-4">
        <div class="grow  border rounded-2xl border-zinc-200 overflow-hidden">
            <table class="table-auto w-full shadow-xs  min-w-full"
                style=" border-collapse: separate; border-spacing: 0; ">
                <thead class="bg-zinc-50 text-xs">
                    <tr class="">
                        <th class=" px-6 py-3">Name</th>
                        <th class="px-6 py-3">Permission Group</th>
                        <th class="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody class="text-sm">
                    <tr class="">
                        <td class=" px-2 py-1 truncate ">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Employee" class="m-1" />
                            <Badge name="Manager" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr>
                        <td class=" px-2 py-1 truncate">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info ">
                            <Badge name="Employee" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr>
                        <td class=" px-2 py-1 truncate">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Administrator" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" px-2 py-1 truncate ">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Employee" class="m-1" />
                            <Badge name="Manager" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr>
                        <td class=" px-2 py-1 truncate">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info ">
                            <Badge name="Employee" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr>
                        <td class=" px-2 py-1 truncate">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Administrator" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" px-2 py-1 truncate ">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Employee" class="m-1" />
                            <Badge name="Manager" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" px-2 py-1 truncate ">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Employee" class="m-1" />
                            <Badge name="Manager" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr>
                        <td class=" px-2 py-1 truncate">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info ">
                            <Badge name="Employee" class="m-1" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                    <tr>
                        <td class=" px-2 py-1 truncate">
                            <UserCard imageSrc="https://i.pravatar.cc/300?img=32">
                                <template #name>John Doe</template>
                                <template #email>nefarious_musician_97@appose.com</template>
                            </UserCard>
                        </td>
                        <td class=" px-6 py-6 text-info">
                            <Badge name="Administrator" />
                        </td>
                        <td style="text-align: right;">
                            <DropdownButton />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
