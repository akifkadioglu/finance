<template>

    <UButton v-motion @click="modal.open()" :visible="{ scale: 1 }" :tapped="{ scale: 0.8 }"
        :ui="{ rounded: 'rounded-full' }" color="gray" variant="ghost" class="fixed bottom-7 left-7">
        <Icon color="teal" :name="icon.MORE" size="40" />
    </UButton>
    <UModal v-model="modal.$state.isOpen">
        <div class="p-4 space-y-5">
            <div class="flex justify-end">
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                    @click="modal.close()" />
            </div>
            <div class="flex items-center space-x-2">
                <UButton :ui="{ rounded: 'rounded-full' }" v-motion :visible="{ scale: 1 }" :tapped="{ scale: 0.8 }"
                    variant="ghost" color="gray">
                    <Icon size="30" :name="icon.CREATOR" />
                </UButton>
                <span>Visit Creator</span>
            </div>
            <UDivider label="Settings" />

            <div class="flex items-center space-x-2">
                <SwitchMode />
                <span>Switch Mode</span>
            </div>
            <div class="flex items-center space-x-2">
                <NuxtLink :to="pages.LOGIN">
                    <UButton :ui="{ rounded: 'rounded-full' }" v-motion :visible="{ scale: 1 }" :tapped="{ scale: 0.8 }"
                        variant="ghost" color="gray">
                        <Icon size="30" :name="icon.LOGOUT" />
                    </UButton>
                </NuxtLink>
                <span>Log Out</span>
            </div>
        </div>
    </UModal>
</template>

<script setup>
const modal = useModalStore()


</script>
