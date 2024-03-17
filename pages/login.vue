<template>

    <div class="flex justify-center items-center h-screen">

        <UCard class="w-96">

            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

                <transition-expand :offset="[-16, 0]">
                    <UFormGroup v-if="isRegistering" label="Name" name="name">
                        <UInput placeholder="name" v-model="state.name" />
                    </UFormGroup>
                </transition-expand>

                <UFormGroup label="Email" name="email">
                    <UInput placeholder="name@mail.com" v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput placeholder="password" v-model="state.password" type="password" />
                </UFormGroup>

                <UButton color="gray" variant="ghost" type="submit">
                    Submit
                </UButton>
            </UForm>

            <template #footer>
                <transition-slide :offset="[-16, 0]" mode="out-in">
                    <div class="flex items-center" v-if="!isRegistering">
                        <span>Don't have an account? </span>
                        <UButton @click="isRegistering = true" color="gray" variant="link" label="Register" />
                    </div>
                    <div class="flex items-center" v-else>
                        <span>Already have an account? </span>
                        <UButton @click="isRegistering = false" color="gray" variant="link" label="Login" />
                    </div>
                </transition-slide>

            </template>
        </UCard>
    </div>
</template>
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
definePageMeta({
    layout: 'default'
})
const schema = z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined
})
const isRegistering = ref(false)
async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    console.log(event.data)
}
</script>
