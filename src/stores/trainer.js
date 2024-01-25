import { defineStore } from "pinia";
// import { v4 as uuid } from 'uuid'

export const useTrainerStore = defineStore("trainerStore", {
	state: () => ({
		trainers: [],
	}),

	getters: {
		hasTrainers() {
			return this.trainers && this.trainers.length > 0;
		},
	},

	actions: {
		registerTrainer(trainer) {
			this.trainers.push(trainer);
		},

        async fetchTrainers() {
            try {
                const response = await fetch(`https://vue-trainerapp-default-rtdb.europe-west1.firebasedatabase.app/trainers.json`)

                if(!response.ok) {
                    console.error("Trainerlar yüklenemedi...")
                    return
                }

                const responseData = await response.json()

                const trainerArray = Object.values(responseData)

                this.trainers = trainerArray

            } catch(error) {
                console.log("Trainerlar yüklenirken hata oldu", error)
            }
        }
	},
});
