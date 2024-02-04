import { defineStore } from "pinia";
import { v4 as uuid } from 'uuid'

export const useRequestStore = defineStore('requestStore', {
    state: () => ({
        requests: []
    }),

    getters: {
        hasRequests(){
            return this.requests && this.requests.length > 0
        },
    },

    actions: {
        async receiveMessage(message) {
            const data = {
                messageId: uuid(),
                ...message
            }

                const response = await fetch(`https://vue-trainerapp-default-rtdb.europe-west1.firebasedatabase.app/requests/${message.userId}/${message.messageId}.json`, {
                    method: 'POST',
                    body: JSON.stringify(data)
                })
    
               const responseData = response.json()

                this.requests.push(responseData)
        },

        async getMessages(userID) {
            const response = await fetch(
                `https://vue-trainerapp-default-rtdb.europe-west1.firebasedatabase.app/requests/${userID}.json`,
            );
    
            const responseData = await response.json()
            this.requests = responseData
        }

    }
})