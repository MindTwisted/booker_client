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
    }
}