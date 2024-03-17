<template>
    <div>
        <UTable :columns="columns" :rows="workList">
            <template #user-data="{ row }">
                <NuxtLink
                    :to="pagePath(Pages.ORGANIZATION) + '/' + route.params.id + pagePath(Pages.USER) + '/' + row.user.id">
                    {{ row.user.name }}
                </NuxtLink>
            </template>
            <template #startTime-data="{ row }">
                <NuxtTime :datetime="row.startTime" hour="numeric" minute="numeric" />
            </template>
            <template #sum-data="{ row }">
                <NuxtTime :datetime="calculateSum(row.startTime, row.endTime)" hour="numeric" minute="numeric" />
            </template>
            <template #endTime-data="{ row }">
                <NuxtTime :datetime="row.endTime" hour="numeric" minute="numeric" />
            </template>
        </UTable>
        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="page" :page-count="pageCount" :total="15" />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const page = ref(1)
const pageCount = 5

const columns = [
    {
        key: 'user',
        label: 'User',
        sortable: true,
    },
    {
        key: 'money',
        label: 'Money',
        sortable: true,
    },
    {
        key: 'sum',
        label: 'Amount time',
        sortable: true,
    },
    {
        key: 'startTime',
        label: 'start',
    }, {
        key: 'endTime',
        label: 'end',
    },
]
import type { User } from '~/types/user';
import type { WorkSchema } from '~/types/workschema';
const userList = ref<User[]>([])
const workList = ref<WorkSchema[]>([])
onMounted(() => {
    initSchema()
})
function calculateSum(startTime: Date, endTime: Date) {
    return (endTime.getTime() - startTime.getTime() - 2 * 60 * 60 * 1000)
}
function initSchema() {
    var user: User = {
        id: "adsfdafvsda",
        name: "akif",
        email: "akif@kadioglu.win",
        password: "asdads",
        perHourMoney: 225
    }
    for (let index = 0; index < 5; index++) {
        workList.value.push({
            endTime: new Date(new Date().getTime() - (0 * 60 * 60 * 1000)),
            money: user.perHourMoney * (index ** index),
            startTime: new Date(new Date().getTime() - (5 * 60 * 60 * 1000)),
            user: user
        })

    }

}
definePageMeta({
    layout: 'default'
})


</script>