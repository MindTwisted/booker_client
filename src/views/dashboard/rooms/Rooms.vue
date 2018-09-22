<template>
    <div class="rooms">

        <loader v-if="isLoading"></loader>

        <div class="dashboard__title">
            <h1 class="title">Rooms</h1>
        
            <router-link v-bind:to="{name: 'dashboard.rooms.create'}" 
                        class="button is-success">
                Create
            </router-link>
        </div>
        
        <table class="table is-fullwidth is-striped is-hoverable">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <room-item v-for="room in rooms" 
                        v-bind:key="room.id" 
                        v-bind:room="room"></room-item>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
    </div>
</template>

<script>
import Vuex from 'vuex'
import Loader from '@/components/Loader'
import RoomItem from '@/views/dashboard/rooms/RoomItem'

export default {
    name: 'rooms',
    components: {
        'loader': Loader,
        'room-item': RoomItem
    },
    data() {
        return {
            isLoading: false
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.isLoading = true;

            vm.getRooms()
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
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'getRooms'
        ]),
    }
}
</script>