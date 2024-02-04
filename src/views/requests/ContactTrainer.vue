<template>
	<div
		class="max-w-xl mx-auto h-full rounded-md shadow-lg mt-4 bg-blue-50 px-4 py-8"
	>
		<form @submit.prevent="sendMessage">
			<div class="flex flex-col gap-y-2">
				<label
					class="text-sm font-semibold"
					for="email"
					>Mail:</label
				>
				<input
                    v-model="messageData.userEmail"
					class="p-2 rounded outline outline-gray-200"
					type="email"
				/>
                <span v-for="error in v$.userEmail.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
			</div>
			<div class="flex flex-col gap-y-2 mt-4">
				<label
					class="text-sm font-semibold"
					for="message"
					>Mesajınız:</label
				>
				<textarea
                    v-model="messageData.message"
					class="flex-1 py-4 px-2 outline outline-gray-200"
					name="message"
					id="message"
					rows="5"
				></textarea>
                <span v-for="error in v$.message.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
			</div>
			<div class="w-full text-center mt-4">
				<button class="px-4 py-2 bg-orangedim text-gray-50 rounded">
					Gönder
				</button>
			</div>
			<!-- <div class="flex flex-row w-full justify-end mt-4 text-sm text-gray-600">
                    <a :href="currentEmailSent">{{ currentEmailSent }}</a>
            </div> -->
		</form>
	</div>
</template>

<script setup>
	import { getAuth } from "firebase/auth";
	import { useRoute, useRouter } from "vue-router";
	import { ref, computed } from "vue";
	import useVuelidate from "@vuelidate/core";
	import { email, minLength, required } from "@vuelidate/validators";

    import { useRequestStore } from '@/stores/requests'

    const requestStore = useRequestStore()

	const route = useRoute();
    const router = useRouter()
    const auth = getAuth()

	const messageData = ref({
        userId: auth.currentUser.uid,
		userEmail: "",
		message: "",
        coachId: route.params.id,
        created_at: new Date()
	});

	const rules = computed(() => {
		return {
			userEmail: { required, email },
			message: { required, minLength: minLength(2) },
		};
	});


	const v$ = useVuelidate(rules, messageData);

	const sendMessage = async () => {
		const result = await v$.value.$validate();

        if(result) {
            requestStore.receiveMessage(messageData.value)
            router.push('/trainer')
            console.log(messageData.value)
        } else {
            alert("Hatalı giriş!")
        }
	};
</script>

<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
