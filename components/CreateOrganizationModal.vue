<template>
	<UModal prevent-close v-model="createOrganizationModal">
		<div class="p-4">
			<div class="flex justify-end">
				<UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
					@click="createOrganizationModal = false" />

			</div>

			<UForm :schema="schema" :state="state" :onSubmit="onSubmit" class="space-y-4">
				<UFormGroup label="Name" name="name" required description="You can change this later">
					<UInput v-model="state.name" placeholder="Organization Name" />
				</UFormGroup>
				<UButton color="gray" variant="ghost" type="submit">
					Submit
				</UButton>
			</UForm>
		</div>
	</UModal>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
const schema = z.object({
	name: z.string(),
})
const state = reactive({
	name: undefined,

})
const createOrganizationModal = defineModel<boolean>('createOrganizationModal', { required: true })

watch(createOrganizationModal, () => {
	if (createOrganizationModal.value) {
		state.name = undefined
	}
})
type Schema = z.output<typeof schema>
async function onSubmit(event: FormSubmitEvent<Schema>) {
	// Do something with data
	console.log(event.data)
}
</script>
