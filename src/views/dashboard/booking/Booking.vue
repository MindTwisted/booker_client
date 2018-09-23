<template>
    <div class="booking">
        <loader v-if="isLoading"></loader>

        <div class="dashboard__title">
            <h1 class="title">Booking</h1>
        
            <router-link v-bind:to="{name: 'dashboard.booking.create'}" 
                        class="button is-success">
                Book It
            </router-link>
        </div>

        <div class="booking__calendar">
            <calendar v-bind:events="events" 
                    v-bind:rooms="rooms"></calendar>
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
            isLoading: false
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.isLoading = true;

            const events = vm.getEvents();
            const rooms = vm.getRooms();

            Promise.all([events, rooms])
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
            'events',
            'rooms'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'getEvents',
            'getRooms'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>

