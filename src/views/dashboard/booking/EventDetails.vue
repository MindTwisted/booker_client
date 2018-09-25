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

                    <div v-if="!isEditable" 
                        class="eventDetails__wrapper"></div>

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
                                <option v-bind:value="event.user.id">{{ event.user.name }}</option>
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

                    <div v-if="event.recur_id && isEditable" 
                        class="field">
                        <label class="checkbox">
                            <input type="checkbox" 
                                v-model="isRecur">
                            Apply to all occurences?
                        </label>
                    </div>

                    <div v-if="isEditable" 
                        class="field is-grouped">
                        <p class="control">
                            <button v-if="!isLoadingUpdate" 
                                v-on:click="handleUpdateEvent" 
                                class="button is-success">
                                Update
                            </button>
                            <button v-else class="button is-success is-loading" disabled>
                                Update
                            </button>
                        </p>
                        <p class="control">
                            <button v-if="!isLoadingDelete" 
                                v-on:click="handleDeleteEvent" 
                                class="button is-danger">
                                Delete
                            </button>
                            <button v-else class="button is-danger is-loading" disabled>
                                Delete
                            </button>
                        </p>
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
            description: '',
            isRecur: false,
            errors: {
                userId: [],
                startTime: [],
                endTime: [],
                description: []
            },
            isLoadingUpdate: false,
            isLoadingDelete: false
        }
    },
    mounted() {
        this.userId = this.event.user.id;
        this.description = this.event.description;
    },
    computed: {
        ...Vuex.mapState([
            'users',
            'auth',
            'settings'
        ]),
        ...Vuex.mapGetters([
            'isAdmin'
        ]),
        isEditable() {
            const isOwner = +this.auth.id === +this.event.user.id;
            const isComing = (new Date(this.event.start_time * 1000)) > (new Date());

            return (this.isAdmin || isOwner) && isComing;
        }
    },
    methods: {
        ...Vuex.mapActions([
            'updateEvent',
            'deleteEvent'
        ]),
        handleRemoveModal() {
            this.$emit('remove-modal');
        },
        getHoursFromUnix(unix) {
            return (new Date(unix * 1000)).getHours();
        },
        getMinutesFromUnix(unix) {
            return (new Date(unix * 1000)).getMinutes();
        },
        handleUpdateEvent() {
            this.isLoadingUpdate = true;

            const oldStartTime = new Date(this.event.start_time * 1000);

            const date = oldStartTime.getDate();
            const month = oldStartTime.getMonth() + 1;
            const year = oldStartTime.getFullYear();

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

            const recurId = this.isRecur ? this.event.recur_id : '';

            this.updateEvent({
                    id: this.event.id,
                    userId: this.userId,
                    roomId: this.event.room.id,
                    description: this.description,
                    startTime: startTime / 1000,
                    endTime: endTime / 1000,
                    recurId
                })
                .then(data => {
                    this.$notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: data.text
                    });

                    this.handleRemoveModal();
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
                .finally(() => this.isLoadingUpdate = false);
        },
        handleDeleteEvent() {
            this.isLoadingDelete = true;

            const recurId = this.isRecur ? this.event.recur_id : '';

            this.deleteEvent({
                    id: this.event.id,
                    recurId
                })
                .then(data => {
                    this.$notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: data.text
                    });

                    this.handleRemoveModal();
                })
                .catch(error => {
                    this.$notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.text
                    });
                })
                .finally(() => this.isLoadingDelete = false);
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    z-index: 1000;

    &-card {
        min-height: 20rem;
    }

    &-card-body {
        position: relative;
    }
}

.eventDetails {
    &__wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 10;
    }
}
</style>