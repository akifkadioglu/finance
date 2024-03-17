<template>
    <div>
        <div>
            <UTooltip text="Create an Organization" class="select-none" :popper="{ arrow: true }">
                <UCard v-motion :visible="{ scale: 1 }" :tapped="{ scale: 0.9 }" @click="createOrganizationModal = true"
                    class="w-48 h-48 cursor-pointer flex justify-center items-center text-center">
                    <Icon :name="icon.ADD_ORGANIZATION" size="40" />
                </UCard>
            </UTooltip>
        </div>
        <UDivider label="Organizations" />
        <NuxtLink :to="pagePath(Pages.ORGANIZATION) + '/1'">
            <UCard v-motion :visible="{ scale: 1 }" :tapped="{ scale: 0.9 }"
                class="w-48 h-48 cursor-pointer flex justify-center items-center text-center">
                <Icon :name="icon.ADD_ORGANIZATION" size="40" />
            </UCard>
        </NuxtLink>
        <CreateOrganizationModal v-model:createOrganizationModal="createOrganizationModal" />
    </div>

</template>

<script setup>

const createOrganizationModal = ref(false)

definePageMeta({
    layout: 'default'
})

</script>