<template>
    <section class="py-8">
        <div class="flex flex-col gap-4 max-w-xl mx-auto shadow-md px-4 py-8">
            <h1 class="text-2xl font-bold">Register as a Trainer</h1>
            <form @submit.prevent="createTrainer">
                <div class="flex flex-col gap-4">
                    <input v-model="trainerData.firstName" class="px-6 py-4 border rounded" type="text" placeholder="Firstname">
                    <span v-for="error in v$.firstName.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
                    <input v-model="trainerData.lastName" class="px-6 py-4 border rounded" type="text" placeholder="Lastname">
                    <span v-for="error in v$.lastName.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
                    <input v-model="trainerData.city" class="px-6 py-4 border rounded" type="text" placeholder="City">
                    <span v-for="error in v$.city.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
                    <input v-model="trainerData.phoneNumber" class="px-6 py-4 border rounded" type="tel" placeholder="Phone">
                    <span v-for="error in v$.phoneNumber.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
                    <div>
                        <h3 class="text-gray-800 font-bold">Areas of Expertise</h3>
                        <div class="flex flex-col gap-y-2 mt-2">
                            <div class="flex flex-row gap-x-1">
                                <input v-model="trainerData.areas" type="checkbox" id="functional" value="functional">
                                <label class="text-sm" for="strength">Functional</label>
                            </div>
                            <div class="flex flex-row gap-x-1">
                                <input v-model="trainerData.areas" type="checkbox" id="strength" value="strength">
                                <label class="text-sm" for="strength">Strength</label>
                            </div>
                            <div class="flex flex-row gap-x-1">
                                <input v-model="trainerData.areas" type="checkbox" id="stretching" value="stretching">
                                <label class="text-sm" for="strength">Stretching</label>
                            </div>
                        </div>
                    </div>
                    <input v-model="trainerData.hourlyRate" class="px-6 py-4 border rounded" type="number" id="hourlyRate" placeholder="Hourly rate">
                    <span v-for="error in v$.hourlyRate.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
                    <label class="text-gray-800 font-bold" for="description">Description</label>
                    <textarea v-model="trainerData.description" class="px-6 py-4 -mt-2 border rounded" id="description" rows="5"></textarea>
                    <span v-for="error in v$.description.$errors" :key="error.$uid" class="text-sm text-red-500">{{ error.$message }}</span>
                    <div class="flex flex-row justify-end">
                        <button class="px-4 py-2 bg-black/90 rounded text-gray-50 text-sm hover:bg-black/75 transition-all duration-500">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { useTrainerStore } from '@/stores/trainer';

import { useRouter } from 'vue-router';

import { ref, computed } from 'vue'

import { v4 as uuid } from 'uuid'

import useVuelidate from '@vuelidate/core'
import { required, minLength, numeric } from '@vuelidate/validators'


const router = useRouter()
const trainerStore = useTrainerStore()

const trainerData = ref({
    id: uuid(),
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    areas: [],
    hourlyRate: "",
    description: "",
})

const rules = computed(() => {
    return {
        firstName: {required, minLength: minLength(2)},
        lastName: {required, minLength: minLength(2)},
        city: {required, minLength: minLength(2)},
        phoneNumber: {required, numeric},
        areas: {required},
        hourlyRate: {required, numeric},
        description: {required},
    }
})

const v$ = useVuelidate(rules, trainerData)

const createTrainer = async () => {
    const result = await v$.value.$validate()

    if(result) {

        const response = await fetch(`https://vue-trainerapp-default-rtdb.europe-west1.firebasedatabase.app/trainers/${trainerData.value.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(trainerData.value)
            })

            // const responseData = await response.json()

            if(!response.ok) {
                // error
            }

        trainerStore.registerTrainer(trainerData.value)
        router.push('/trainer')
        console.log(trainerStore.trainers)
    } else {
        alert("Eksik veya hatalı kullanıcı girişi.")
    }
    

}
</script>

<style scoped>

</style>