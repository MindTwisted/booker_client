import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchRooms() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/rooms/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addRoom(data) {
        return new Promise((resolve, reject) => {
            axios.post(
                    `${rootUrl}/api/rooms/`,
                    `name=${data.name}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateRoom(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                    `${rootUrl}/api/rooms/${data.id}`,
                    `name=${data.name}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    deleteRoom(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${rootUrl}/api/rooms/${id}`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
}