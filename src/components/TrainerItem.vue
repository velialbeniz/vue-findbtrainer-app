<template>
	<li>
		<div
			class="relative px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600"
		>
			<div class="flex flex-col sm:-mx-4 sm:flex-row">
				<img
					class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
					:src="trainerImage"
					alt=""
				/>

				<div class="mt-4 sm:mx-4 sm:mt-0">
					<h1
						class="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white"
					>
						{{ fullName }}
					</h1>

					<div class="flex items-center gap-x-3">
						<p
							v-for="area in trainer.areas"
							:key="area"
							class="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
						>
							{{ area }}
						</p>
					</div>
				</div>
			</div>

			<p
				class="mt-4 text-gray-500 capitalize group-hover:text-gray-300"
			>
				{{ trainer.description }}
			</p>

			<div class="flex mt-4 -mx-2">
				<router-link
					:to="{ name: 'trainerdetail', params: { id: props.trainer.id } }"
					class="flex gap-x-2 items-center rounded border px-4 py-2 mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
					aria-label="Detail"
				>
					Details
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4M7 9c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m-3 9h8c0-1.1-1.79-2-4-2s-4 .9-4 2m18-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"
						/>
					</svg>
				</router-link>

				<router-link
					:to="{ name: 'trainercontact', params: { id: props.trainer.id } }"
					class="flex gap-x-2 items-center rounded border px-4 py-2 mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white"
					aria-label="Contact"
				>
					Contact
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<g
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect
								width="16"
								height="12"
								x="4"
								y="6"
								rx="2"
							/>
							<path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9" />
						</g>
					</svg>
				</router-link>
			</div>

            <div class="absolute top-8 right-8 flex items-center group-hover:text-white">
                <h4>{{ trainer.hourlyRate }}</h4>
                <span>&#x20BA; - 1hr</span>
            </div>
		</div>
	</li>
</template>

<script setup>
	import { computed } from "vue";
	import { useRoute, useRouter } from "vue-router";

	const props = defineProps(["trainer"]);

	const route = useRoute();

	const fullName = computed(() => {
		return props.trainer.firstName + " " + props.trainer.lastName;
	});

	const trainerContactLink = computed(() => {
		return route.path + "/" + props.trainer.id + "/contact";
	});

	const trainerDetailLink = computed(() => {
		return route.path + "/" + props.trainer.id;
	});

    const trainerImage = computed(()=> {
        if(props.trainer.imageUrl) {
            return props.trainer.imageUrl
        } else {
            return "https://picsum.photos/200"
        }
    })
</script>

<style lang="scss" scoped></style>
