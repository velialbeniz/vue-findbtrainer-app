<template>
    <teleport to="body">
        <div v-if="show" class="fixed top-0 left-0 h-full w-full bg-black/75 z-10"></div>
        <dialog open v-if="show" class="fixed top-[20vh] md:left-[10%] left-[calc(50%-20rem)] w-[40rem] md:w-[80%] z-100 border-none rounded-lg shadow-md overflow-hidden bg-white">
            <header class="p-4 bg-black/95 text-white w-full">
                <slot name="header">
                    <h2>{{ title }}</h2>
                </slot>
            </header>
            <section>
                <slot></slot>
            </section>
            <menu v-if="!fixed" class="flex justify-end p-4">
                <slot name="actions">
                    <button @click="tryClose">Close</button>
                </slot>
            </menu>
        </dialog>
    </teleport>
</template>

<script setup>

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    fixed: {
        type: Boolean,
        required: false,
        default: false
    }
})

defineEmits(['close'])

const tryClose = () => {
    if(props.fixed) {
        return
    }
    emit('close')
}
</script>

<style>

</style>