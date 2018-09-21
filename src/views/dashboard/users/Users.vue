<template>
    <div class="users">
        <h1 class="title">Users</h1>

        <div class="users__add">
            <router-link v-bind:to="{name: 'dashboard.users.create'}" 
                        class="button is-success">
                Create
            </router-link>
        </div>
        
        <table class="table is-fullwidth is-striped is-hoverable">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ user.email }}</td>
                    <td class="users__actions">
                        <router-link v-bind:to="'users/' + user.id + '/edit'" class="button is-primary is-small">
                            Edit
                        </router-link>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
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

export default {
    name: 'users',
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getUsers()
                .then(() => {

                })
                .catch(error => {
                    vm.$notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.text
                    });
                });
        });
    },
    computed: {
        ...Vuex.mapState([
            'users'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'getUsers'
        ]),
    }
}
</script>

<style lang="scss" scoped>
.users {
    &__add {
        text-align: right;
        margin-bottom: 2rem;
    }
}
</style>


