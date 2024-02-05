<template>
    <div class="py-6">
        <div
			class="flex items-center hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
		>
			<div class="flex flex-col justify-center rounded-[10px] bg-white p-8 sm:p-6 min-h-[300px]">
				<h2
					class="block font-medium text-lg text-gray-900"
				>
                    {{ title }}
            </h2>

				<div>
					<h3 class="mt-0.5 text-sm font-regular text-gray-500">
                        {{ subtitle }}
					</h3>
				</div>
			</div>
		</div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    }
})
</script>

<style lang="scss" scoped>

</style>