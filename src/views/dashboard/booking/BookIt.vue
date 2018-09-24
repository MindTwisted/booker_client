<template>
    <div class="bookIt">

        <div class="dashboard__title">
            <h1 class="title">Book Room '{{ room.name }}'</h1>
        
            <router-link v-bind:to="{name: 'dashboard.booking'}"
                        class="button is-success">
                Back
            </router-link>
        </div>

        <div class="bookIt__form">

             <div class="field">
                <label class="label">User</label>
                <div v-if="isAdmin" 
                    class="control select" 
                    v-bind:class="{ 'is-danger':errors.userId.length > 0 }">
                    <select v-model="userId">
                        <option v-for="user in users" 
                                v-bind:key="user.id" 
                                v-bind:value="user.id">{{ user.name }}</option>
                    </select>
                </div>
                <div v-else class="control select">
                    <select disabled>
                        <option v-bind:value="auth.id">{{ auth.name }}</option>
                    </select>
                </div>
                <ul class="help is-danger">
                    <li v-for="error in errors.userId" 
                        v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Event Date</label>
                <date-picker v-model="selectedDate" 
                            v-bind:weekStart="settings.weekStart"></date-picker>
            </div>

            <div class="field">
                <label class="label">Event Start Time</label>
                <time-picker v-model="selectedTime.start" 
                            v-bind:timeFormat="settings.timeFormat"></time-picker>
            </div>

            <div class="field">
                <button v-if="!isLoading" 
                    v-on:click="handleCreateEvent" 
                    class="button is-success">
                    Submit
                </button>
                <button v-else class="button is-success is-loading" disabled>
                    Submit
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import DatePicker from '@/components/datepicker/DatePicker.vue'
import TimePicker from '@/components/timepicker/TimePicker.vue'

export default {
    name: 'book-it',
    components: {
        'date-picker': DatePicker,
        'time-picker': TimePicker
    },
    data() {
        return {
            userId: '',
            selectedDate: {},
            selectedTime: {
                start: {

                }
            },
            errors: {
                userId: []
            },
            isLoading: false
        }
    },
    mounted() {
        this.userId = this.auth.id;
    },
    computed: {
        ...Vuex.mapState([
            'rooms',
            'users',
            'auth',
            'settings'
        ]),
        ...Vuex.mapGetters([
            'getRoomById',
            'isAdmin'
        ]),
        room() {
            const room = this.getRoomById(this.$route.query.room_id);

            if (!room.id) {
                this.$router.push({name: 'dashboard.booking'});
            }

            return room;
        }
    },
    methods: {
        ...Vuex.mapActions([
            'addEvent'
        ]),
        handleCreateEvent() {
            this.isLoading = true;

            this.addEvent({
                    userId: this.userId,
                    roomId: this.room.id
                })
                .then(data => {
                    this.$notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: data.text
                    });

                    this.$router.push({
                        name: 'dashboard.booking'
                    });
                })
                .catch(error => {
                    this.$notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.text
                    });

                    if (!error.data) {
                        this.errors.userId = [];

                        return false;
                    }

                    const userIdErrors = error.data.user_id;

                    this.errors.userId = userIdErrors ? userIdErrors : [];
                })
                .finally(() => this.isLoading = false);
        }
    }
}
</script>

