<template>
	<section>
		<div
			class="w-full max-w-md mx-auto px-8 py-4 mt-16 bg-white rounded-lg shadow-lg"
		>
			<div class="flex justify-center -mt-16 md:justify-end">
				<img
					class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
					alt="Testimonial avatar"
					src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
				/>
			</div>

			<h1 class="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
				{{ fullName }}
			</h1>

			<p class="mt-2 text-sm text-gray-600">
				{{ selectedTrainer.description }}
			</p>

			<div class="flex justify-end mt-4">
				<p class="text-gray-600 text-sm">
					{{ selectedTrainer.hourlyRate }} &#x20BA; / 1hr
				</p>
			</div>
		</div>

		<div
			class="w-full max-w-md mx-auto px-8 py-4 mt-16 bg-white rounded-lg shadow-lg"
		>
			<h3 class="text-gray-800 font-semibold">Specialties</h3>
			<div class="flex items-center gap-x-3">
				<p
					v-for="area in selectedTrainer.areas"
					:key="area"
					class="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
				>
					{{ area }}
				</p>
			</div>
		</div>

		<Transition name="modal">
			<div
				v-if="isModalOpen"
				class="w-full max-w-md absolute bottom-5 right-4 px-8 py-4 mt-16 bg-white rounded-lg shadow-lg"
			>
				<div class="flex flex-col gap-y-4 items-center">
					<h3 class="font-bold text-gray-800">Want to reach out!</h3>
					<div>
						<router-link
							@click="isModalOpen = false"
							:to="contactTrainer"
							class="px-4 py-2 bg-blue-600 rounded outline-none text-white hover:bg-blue-500"
							>Contact</router-link
						>
					</div>
				</div>
			</div>
		</Transition>
		<router-view v-slot="{ Component }">
			<transition name="contactview">
				<component :is="Component" />
			</transition>
		</router-view>
	</section>
</template>

<script setup>
	import { ref, computed, onMounted } from "vue";
	import { useTrainerStore } from "@/stores/trainer";
	import { useRoute } from "vue-router";

	const route = useRoute();

	const trainerStore = useTrainerStore();

	const props = defineProps(["id"]);

	const selectedTrainer = ref([]);

	selectedTrainer.value = trainerStore.trainers.find(
		(trainer) => trainer.id === props.id,
	);

	const fullName = computed(() => {
		return (
			selectedTrainer.value.firstName +
			" " +
			selectedTrainer.value.lastName
		);
	});

	const isModalOpen = ref(false);

	const contactTrainer = computed(() => {
		return route.path + "/contact";
	});

	onMounted(() => {
		setTimeout(() => {
			isModalOpen.value = true;
		}, 1500);
	});

	console.log(selectedTrainer.value);
</script>

<style scoped>
	.modal-enter-active {
		transition: all 0.3s ease-out;
	}

	.modal-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.modal-enter-from,
	.modal-leave-to {
		transform: translateX(-120px);
		opacity: 0;
	}

	/* contact transition */
	.contactview-enter-active {
		transition: all 0.3s ease-out;
	}
	.contactview-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.contactview-enter-from,
	.contactview-leave-to {
		opacity: 0;
		transform: translateX(120px);
	}
</style>