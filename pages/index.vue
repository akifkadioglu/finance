<template>
    <UContainer>
        <div>
            <UTooltip text="Create an Organization" class="select-none" :popper="{ arrow: true }">
                <UCard v-motion :visible="{ scale: 1 }" :tapped="{ scale: 0.9 }" @click="createOrganizationModal = true"
                    class="w-48 h-48 cursor-pointer flex justify-center items-center text-center">
                    <Icon :name="icon.ADD_ORGANIZATION" size="40" />
                </UCard>
            </UTooltip>
        </div>
        <UDivider label="Organizations" />
        <CreateOrganizationModal v-model:createOrganizationModal="createOrganizationModal" />
    </UContainer>

</template>

<script setup>

const createOrganizationModal = ref(false)

definePageMeta({
    layout: 'default'
})

</script>