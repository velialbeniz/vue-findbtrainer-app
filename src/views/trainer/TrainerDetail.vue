<template>
	<section>
		<div
			class="w-full max-w-md mx-auto px-8 py-4 mt-16 bg-white rounded-lg shadow-lg"
		>
			<div class="flex justify-center -mt-16 md:justify-end">
				<img
					class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
					alt="Testimonial avatar"
					:src="selectedTrainer.imageUrl"
				/>
			</div>

			<h1 class="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
				{{ fullName }}
			</h1>

			<p class="mt-2 text-sm text-gray-600">
				{{ selectedTrainer.description }}
			</p>

            <p class="mt-2 text-sm font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm5-2.5q.425 0 .713-.288T13 19.5q0-.425-.288-.712T12 18.5q-.425 0-.712.288T11 19.5q0 .425.288.713T12 20.5M7 16h10V6H7z"/></svg>
                <a :href="'tel:' + selectedTrainer.phoneNumber">{{ selectedTrainer.phoneNumber }}</a>
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
							class="px-4 py-2 bg-slate-900 rounded outline-none text-white hover:bg-slate-600 transition"
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
	import { ref, computed } from "vue";
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


	const contactTrainer = computed(() => {
		return route.path + "/contact";
	});

    const isModalOpen = computed(() => {
        return !route.matched.some(rec => rec.name === 'trainercontact')
    })

	// onMounted(() => {
	// 	setTimeout(() => {
	// 		isModalOpen.value = true;
	// 	}, 1500);
	// });

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
