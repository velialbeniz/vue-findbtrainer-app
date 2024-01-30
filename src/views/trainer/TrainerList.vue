<template>
	<!-- filtreleme -->
	<section>
		<h1
			class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
		>
			Trainers
		</h1>

		<p class="max-w-2xl mx-auto my-6 text-center text-gray-900">
			Aradığınız eğitmenleri filtreleyebilirsiniz.
		</p>

		<!-- Filter trainer -->
		<FilterTrainer @change-filter="setFilters" />
		<!-- Filter end -->
		<div class="w-full flex flex-row justify-end">
            <button
                @click="refreshTrainers"
                class="bg-black/90 px-4 py-2 text-gray-100 rounded-lg mt-4"
            >
                Yenile
            </button>
        </div>
	</section>
	<!-- trainer lists -->
	<section>
		<Spinner
			v-if="isLoading"
			class="w-full text-center"
		/>
		<ul
			class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2"
			v-else-if="hasCoaches"
		>
			<TrainerItem
				v-for="trainer in filteredTrainers"
				:key="trainer.id"
				:trainer="trainer"
			/>
		</ul>
		<h3 v-else>No trainers found</h3>
	</section>
</template>

<script setup>
	import { ref, onMounted, computed } from "vue";
	import { useTrainerStore } from "@/stores/trainer";
	import TrainerItem from "@/components/TrainerItem.vue";
	import FilterTrainer from "@/components/FilterTrainer.vue";
	import Spinner from "@/components/Spinner.vue";

	const isLoading = ref(false);

	// const filters = ref({
	//     functional: true,
	//     strength: true,
	//     stretching: true
	// })

	const activeFilters = ref({
        functional: true,
        strength: true,
        stretching: true
    });

	const setFilters = (updatedFilters) => {
		activeFilters.value = updatedFilters;
	};

	const trainerStore = useTrainerStore();

	const fetchedTrainers = onMounted(() => {
		trainerStore.fetchTrainers();
	});

	async function refreshTrainers() {
		isLoading.value = true;
		await trainerStore.fetchTrainers();
		isLoading.value = false;
	}

	fetchedTrainers();

	const hasCoaches = computed(() => {
		return !isLoading.value && trainerStore.hasTrainers;
	});

	const filteredTrainers = computed(() => {
		const trainers = trainerStore.trainers;
		return trainers.filter((trainer) => {
			if (
				activeFilters.value.functional &&
				trainer.areas.includes("functional")
			) {
				return true;
			}
			if (
				activeFilters.value.strength &&
				trainer.areas.includes("strength")
			) {
				return true;
			}
			if (
				activeFilters.value.stretching &&
				trainer.areas.includes("stretching")
			) {
				return true;
			}
			return false;
		});
	});

    console.log(trainerStore.trainers)
</script>

<style lang="scss" scoped></style>
