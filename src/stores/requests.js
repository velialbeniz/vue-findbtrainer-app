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

        selectedRequests(){
            const coachId = this.requests.coachId
            return this.requests.filter(req => req.coachId === coachId)
        }
    },

    actions: {
        receiveMessage(message) {
            this.requests.push({
                messageid: uuid(),
                ...message
            })
        }
    }
})