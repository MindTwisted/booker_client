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
                            v-bind:timeFormat="settings.timeFormat"
                            v-bind:isError="errors.startTime.length > 0"></time-picker>
                <ul class="help is-danger">
                    <li v-for="error in errors.startTime" 
                        v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Event End Time</label>
                <time-picker v-model="selectedTime.end" 
                            v-bind:timeFormat="settings.timeFormat"
                            v-bind:isError="errors.endTime.length > 0"></time-picker>
                <ul class="help is-danger">
                    <li v-for="error in errors.endTime" 
                        v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea v-model.trim="description"  
                        class="textarea"
                        v-bind:class="{ 'is-danger':errors.description.length > 0 }"
                        placeholder="Description"></textarea>
                </div>
                <ul class="help is-danger">
                    <li v-for="error in errors.description" 
                        v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
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
            description: '',
            selectedDate: {},
            selectedTime: {
                start: {},
                end: {}
            },
            errors: {
                userId: [],
                description: [],
                startTime: [],
                endTime: []
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
            const date = this.selectedDate.date;
            const month = this.selectedDate.month;
            const year = this.selectedDate.year;

            const startHours = this.selectedTime.start.hours;
            const startMinutes = this.selectedTime.start.minutes;
            const startAMPM = this.selectedTime.start.ampm ? 
                this.selectedTime.start.ampm : '';

            const startTime = new Date(`${month}/${date}/${year} ${startHours}:${startMinutes}:00 ${startAMPM}`);

            const endHours = this.selectedTime.end.hours;
            const endMinutes = this.selectedTime.end.minutes;
            const endAMPM = this.selectedTime.end.ampm ? 
                this.selectedTime.end.ampm : '';

            const endTime = new Date(`${month}/${date}/${year} ${endHours}:${endMinutes}:00 ${endAMPM}`);

            this.isLoading = true;

            this.addEvent({
                    userId: this.userId,
                    description: this.description,
                    roomId: this.room.id,
                    startTime: startTime / 1000,
                    endTime: endTime / 1000
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
                        this.errors.description = [];
                        this.errors.startTime = [];
                        this.errors.endTime = [];

                        return false;
                    }

                    const userIdErrors = error.data.user_id;
                    const descriptionErrors = error.data.description;
                    const startTimeErrors = error.data.start_time;
                    const endTimeErrors = error.data.end_time;

                    this.errors.userId = userIdErrors ? userIdErrors : [];
                    this.errors.description = descriptionErrors ? descriptionErrors : [];
                    this.errors.startTime = startTimeErrors ? startTimeErrors : [];
                    this.errors.endTime = endTimeErrors ? endTimeErrors : [];
                })
                .finally(() => this.isLoading = false);
        }
    }
}
</script>

