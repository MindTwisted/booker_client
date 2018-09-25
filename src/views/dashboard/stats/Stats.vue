<template>
    <div class="stats">
        <div class="dashboard__title">
            <h1 class="title">Stats</h1>
        </div>

        <div class="box stats__box">
            <h2 class="is-size-5">
                Events activity
                <div class="select is-small calendar__rooms">
                    <select v-model="selectedRoom">
                        <option v-for="room in rooms" 
                                v-bind:key="room.id" 
                                v-bind:value="room.id">{{ room.name }}</option>
                    </select>
                </div>
            </h2>
            <column-chart :data="getColumnChartData()"></column-chart>
        </div>

        <div class="box stats__box">
            <h2 class="is-size-5">
                Rooms usage
            </h2>
            <pie-chart :data="getPieChartData()"></pie-chart>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import api from '@/api'

export default {
    name: 'stats',
    data() {
        return {
            selectedRoom: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        Promise.all([api.fetchEvents(), api.fetchRooms()])
            .then(response => {
                next(vm => {
                    vm.setEvents(response[0].data.message.data);
                    vm.setRooms(response[1].data.message.data);
                })
            })
            .catch(error => {
                next(vm => {
                    vm.$notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });
                })
            });
    },
    watch: {
        rooms() {
            if (this.rooms.length > 0) {
                this.selectedRoom = this.rooms[0].id;
            }
        },
    },
    computed: {
        ...Vuex.mapState([
            'events',
            'rooms'
        ])
    },
    methods: {
        ...Vuex.mapMutations([
            'setEvents',
            'setRooms'
        ]),
        getColumnChartData() {
            let data = {};

            this.events
                .filter(event => {
                    return +event.room.id === +this.selectedRoom;
                })
                .map(event => {
                    let dateString = (new Date(event.start_time * 1000))
                        .toDateString().split(' ').splice(1).join(' ');

                    if (!data[dateString]) {
                        data[dateString] = 1;
                    } else {
                        data[dateString]++;
                    }
                });

            return data;
        },
        getPieChartData() {
            let roomsStats = {};

            this.events.map(event => {
                const roomName = event.room.name;

                if (!roomsStats[roomName]) {
                    roomsStats[roomName] = 1;
                } else {
                    roomsStats[roomName]++;
                }
            });

            return roomsStats;
        }
    }
}
</script>

<style lang="scss" scoped>
.stats {
    &__box {
        h2 {
            margin-bottom: 1.5rem;
        }
    }
}
</style>


