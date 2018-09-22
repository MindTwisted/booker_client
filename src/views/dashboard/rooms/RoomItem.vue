<template>
    <tr class="roomItem">
        <td>{{ room.id }}</td>
        <td>{{ room.name }}</td>
        <td class="dashboard__actions">
            <router-link v-bind:to="{name: 'dashboard.rooms.edit', params: {id: room.id}}" 
                        class="button is-primary is-small">
                Edit
            </router-link>
            <button v-if="!isLoading" 
                    v-on:click="handleDeleteRoom(room.id)"
                    class="button is-danger is-small">Delete</button>
            <button v-else class="button is-danger is-small is-loading" disabled>
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'room-item',
    props: {
        room: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...Vuex.mapState([
            'auth'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'deleteRoom'
        ]),
        handleDeleteRoom(id) {
            this.isLoading = true;

            this.deleteRoom(id)
                .then(data => {
                    this.$notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: data.text
                    });
                })
                .catch(error => {
                    this.$notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.text
                    });
                })
                .finally(() => this.isLoading = false);
        }
    }
}
</script>

