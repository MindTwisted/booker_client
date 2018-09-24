<template>
    <div class="booking">
        <loader v-if="isLoading"></loader>

        <div class="dashboard__title">
            <h1 class="title">Booking</h1>
        
            <router-link v-bind:to="{name: 'dashboard.booking.bookIt', query: {room_id: selectedRoom}}" 
                        class="button is-success">
                Book It
            </router-link>
        </div>

        <div class="booking__calendar">
            <calendar v-bind:events="events" 
                    v-bind:rooms="rooms" 
                    v-on:select-room="handleSelectRoom"></calendar>
        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import Loader from '@/components/Loader'
import Calendar from './Calendar'

export default {
    name: 'booking',
    components: {
        'loader': Loader,
        'calendar': Calendar
    },
    data() {
        return {
            isLoading: false,
            selectedRoom: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.isLoading = true;

            let promises = [vm.getEvents(), vm.getRooms()];

            if (vm.isAdmin) {
                promises.push(vm.getUsers());
            }

            Promise.all(promises)
                .then(() => {

                })
                .catch(error => {
                    vm.$notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.text
                    });
                })
                .finally(() => vm.isLoading = false);
        });
    },
    computed: {
        ...Vuex.mapState([
            'rooms'
        ]),
        ...Vuex.mapGetters([
            'isAdmin',
            'getEventsSortedByStartTime'
        ]),
        events() {
            return this.getEventsSortedByStartTime;
        }
    },
    methods: {
        ...Vuex.mapActions([
            'getEvents',
            'getRooms',
            'getUsers'
        ]),
        handleSelectRoom(room) {
            this.selectedRoom = room;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

// TODO redirect from bootit to booking with query room_id and display events in this room
// bookit submit enter click