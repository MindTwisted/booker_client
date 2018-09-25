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
                    `room_id=${data.roomId}&user_id=${data.userId}&start_time=${data.startTime}&end_time=${data.endTime}&description=${data.description}&recur_type=${data.recurType}&recur_duration=${data.recurDuration}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateEvent(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                    `${rootUrl}/api/events/${data.id}`,
                    `room_id=${data.roomId}&user_id=${data.userId}&start_time=${data.startTime}&end_time=${data.endTime}&description=${data.description}&recur_id=${data.recurId}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    deleteEvent(data) {
        return new Promise((resolve, reject) => {
            axios.delete(
                    `${rootUrl}/api/events/${data.id}`,
                    {data: `recur_id=${data.recurId}`}
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