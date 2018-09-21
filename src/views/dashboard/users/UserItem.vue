<template>
    <tr class="userItem">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.role }}</td>
        <td>{{ user.email }}</td>
        <td class="dashboard__actions">
            <router-link v-bind:to="{name: 'dashboard.users.edit', params: {id: user.id}}" 
                        class="button is-primary is-small">
                Edit
            </router-link>
            <template v-if="+auth.id !== +user.id">
                <button v-if="!isLoading" 
                        v-on:click="handleDeleteUser(user.id)"
                        class="button is-danger is-small">Delete</button>
                <button v-else class="button is-danger is-small is-loading" disabled>
                    Delete
                </button>
            </template>
        </td>
    </tr>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'user-item',
    props: {
        user: {
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
            'deleteUser'
        ]),
        handleDeleteUser(id) {
            this.isLoading = true;

            this.deleteUser(id)
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

