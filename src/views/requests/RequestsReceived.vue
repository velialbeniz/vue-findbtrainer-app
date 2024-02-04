<template>
	<section class="w-full text-center">
		<h1
			class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
		>
			Mesajlarınız
		</h1>
		<ul
			class="max-w-lg mx-auto flex flex-col gap-4 p-8 mt-4 rounded shadow-lg outline outline-gray-200"
		>
			<li
                v-if="selectedRequests"
				v-for="(requests, userId) in selectedRequests"
				:key="userId"
				
			>
				<div v-for="(req, messageId) in requests" :key="messageId" class="relative outline outline-gray-100 p-4 mt-4">
                    <a
                        :href="'mailto:' + req.userEmail"
                        class="font-semibold text-sm"
                        >Kimden: {{ req.userEmail }}</a
                    >
                    <p class="mt-4">{{ req.message }}</p>
                    <p class="text-xs text-gray-400 absolute top-2 right-2">{{ moments.diff(moment(req.created_at), 'days') }} gün önce</p>
                </div>
			</li>
            <h3 v-else>Mesajınız bulunmamaktadır</h3>
		</ul>
	</section>
</template>

<script setup>
	import { useRequestStore } from "@/stores/requests";
    import { getAuth } from "firebase/auth";
    import { computed } from "vue";
    import moment from 'moment'

    const moments = moment()

	const requestStore = useRequestStore();

	async function fetchMessages() {
        const auth = getAuth()
        const userId = auth.currentUser.uid
		await requestStore.getMessages(userId)
	}

	fetchMessages();

    const selectedRequests = computed(() => {
        return requestStore.requests
    })

</script>

<style lang="scss" scoped></style>
