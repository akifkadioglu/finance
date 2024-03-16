<template>
  <div>

    <UButton :ui="{ rounded: 'rounded-full' }" v-motion :visible="{ scale: 1 }" :tapped="{ scale: 0.8 }" variant="ghost"
      color="gray" @click="toggleColorMode">
      <client-only>
        <Icon v-if="!preference" :name="icon.MOON" size="30" />
        <Icon v-else :name="icon.SUNNY" color="#fef08a" size="30" />
      </client-only>
    </UButton>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.preference = colorMode.value == "dark" ? "light" : "dark";
};
const preference = computed(() => {
  return colorMode.preference == "dark";
});
</script>