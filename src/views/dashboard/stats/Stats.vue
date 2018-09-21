<template>
    <div class="stats">
        <div class="dashboard__title">
            <h1 class="title">Stats</h1>
        </div>

        <div class="box stats__box">
            <h2 class="is-size-5">Events activity</h2>
            <area-chart :data="getAreaChartData()"></area-chart>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import api from '@/api'

export default {
    name: 'stats',
    beforeRouteEnter(to, from, next) {
        api.fetchEvents()
            .then(response => {
                next(vm => {
                    vm.setEvents(response.data.message.data);
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
    computed: {
        ...Vuex.mapState([
            'events'
        ])
    },
    methods: {
        ...Vuex.mapMutations([
            'setEvents'
        ]),
        getAreaChartData() {
            let data = {};

            this.events.map(event => {
                let date = new Date(event.created_at * 1000);

                if (!data[date]) {
                    data[date] = 0;
                }
                
                data[date]++;
            });

            return data;
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


