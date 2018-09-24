<template>
    <div class="eventDetails">
        <div class="modal is-active">
            <div class="modal-background" 
                v-on:click="handleRemoveModal"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Event #{{ event.id }} Details</p>
                    <button class="delete" 
                            v-on:click="handleRemoveModal"
                            aria-label="close"></button>
                </header>
                <section class="modal-card-body">

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
                        <label class="label">Event Start Time</label>
                        <time-picker v-model="selectedTime.start" 
                                    v-bind:timeFormat="settings.timeFormat"
                                    v-bind:isError="errors.startTime.length > 0"
                                    v-bind:initHours="getHoursFromUnix(event.start_time)"
                                    v-bind:initMinutes="getMinutesFromUnix(event.start_time)"></time-picker>
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
                                    v-bind:isError="errors.endTime.length > 0"
                                    v-bind:initHours="getHoursFromUnix(event.end_time)"
                                    v-bind:initMinutes="getMinutesFromUnix(event.end_time)"></time-picker>
                        <ul class="help is-danger">
                            <li v-for="error in errors.endTime" 
                                v-bind:key="error">
                                {{ error | ucfirst }}
                            </li>
                        </ul>
                    </div>

                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import TimePicker from '@/components/timepicker/TimePicker'

export default {
    name: 'event-details',
    components: {
        'time-picker': TimePicker
    },
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            userId: '',
            selectedTime: {
                start: {},
                end: {}
            },
            errors: {
                userId: [],
                startTime: [],
                endTime: []
            }
        }
    },
    mounted() {
        this.userId = this.event.user.id;
    },
    computed: {
        ...Vuex.mapState([
            'users',
            'auth',
            'settings'
        ]),
        ...Vuex.mapGetters([
            'isAdmin'
        ])
    },
    methods: {
        handleRemoveModal() {
            this.$emit('remove-modal');
        },
        getHoursFromUnix(unix) {
            return (new Date(unix * 1000)).getHours();
        },
        getMinutesFromUnix(unix) {
            return (new Date(unix * 1000)).getMinutes();
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    z-index: 1000;

    &-card {
        min-height: 40rem;
    }
}
</style>


