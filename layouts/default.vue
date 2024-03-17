<template>
    <div class="py-4">
        <UContainer>
            <UBreadcrumb :links="breadcrumb.links" />

            <slot />
        </UContainer>
        <SettingModal />
    </div>
</template>
<script setup>
const route = useRoute()
const breadcrumb = useBreadcrumbStore()
watch(() => route.path, () => breadcrumb.setLinks());
onMounted(() => {
    breadcrumb.setLinks()
})
</script>