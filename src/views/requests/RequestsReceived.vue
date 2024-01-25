<template>
    <section class="w-full text-center">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Mesajlarınız</h1>
        <ul class="max-w-lg mx-auto flex flex-col gap-4 p-8 mt-4 rounded shadow-lg outline outline-gray-200">
            <li v-if="requestStore.hasRequests" v-for="req in requestStore.requests" :key="req.id" class="outline outline-gray-100 p-4">
                <a href="#" class="font-semibold text-sm">Kimden: {{ req.userEmail }}</a>
                <p class="mt-4">{{ req.message }}</p>
            </li>
            <h3 v-else>Herhangi bir mesajınız bulunmamaktadır.</h3>
        </ul>
    </section>
</template>

<script setup>
import { useRequestStore } from '@/stores/requests';

const requestStore = useRequestStore()
</script>

<style lang="scss" scoped>

</style>