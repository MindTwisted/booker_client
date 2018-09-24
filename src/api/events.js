import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchEvents() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/events/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addEvent(data) {
        return new Promise((resolve, reject) => {
            axios.post(
                    `${rootUrl}/api/events/`,
                    `room_id=${data.roomId}&user_id=${data.userId}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
}