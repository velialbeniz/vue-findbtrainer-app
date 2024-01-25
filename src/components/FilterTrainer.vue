<template>
	<div
		class="relative max-w-md mx-auto flex text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
	>
		<nav
			class="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700"
		>
			<div
				role="button"
				class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
			>
				<label
					class="flex items-center w-full px-3 py-2 cursor-pointer"
				>
					<div class="grid mr-3 place-items-center">
						<div class="inline-flex items-center">
							<label
								class="relative flex items-center p-0 rounded-full cursor-pointer"
							>
								<input
                                    @change="handleInput"
                                    checked
									id="functional"
									type="checkbox"
									class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
								/>
								<span
									class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										viewBox="0 0 20 20"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</label>
						</div>
					</div>
					<p
						class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
					>
						Functional
					</p>
				</label>
			</div>
			<div
				role="button"
				class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
			>
				<label
					class="flex items-center w-full px-3 py-2 cursor-pointer"
				>
					<div class="grid mr-3 place-items-center">
						<div class="inline-flex items-center">
							<label
								class="relative flex items-center p-0 rounded-full cursor-pointer"
							>
								<input
                                    @change="handleInput"
                                    checked
									id="strength"
									type="checkbox"
									class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
								/>
								<span
									class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										viewBox="0 0 20 20"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</label>
						</div>
					</div>
					<p
						class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
					>
						Strength
					</p>
				</label>
			</div>
			<div
				role="button"
				class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
			>
				<label
					class="flex items-center w-full px-3 py-2 cursor-pointer"
				>
					<div class="grid mr-3 place-items-center">
						<div class="inline-flex items-center">
							<label
								class="relative flex items-center p-0 rounded-full cursor-pointer"
							>
								<input
                                    @change="handleInput"
                                    checked
									id="stretching"
									type="checkbox"
									class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
								/>
								<span
									class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										viewBox="0 0 20 20"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</label>
						</div>
					</div>
					<p
						class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
					>
						Stretching
					</p>
				</label>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const emits = defineEmits()

const filters = ref({
        functional: true,
        strength: true,
        stretching: true
    })


    
    const handleInput = (event) => {
        const inputId = event.target.id
        const isActive = event.target.checked
        const updatedFilters = {
            ...filters.value,
            [inputId]: isActive
        }
        filters.value = updatedFilters
        emits('change-filter', updatedFilters)
        console.log(filters.value)
}


</script>

<style scoped></style>
