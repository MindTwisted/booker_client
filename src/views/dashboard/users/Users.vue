<template>
    <div class="users">

        <loader v-if="isLoading"></loader>

        <div class="dashboard__title">
            <h1 class="title">Users</h1>
        
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
                <user-item v-for="user in users" 
                        v-bind:key="user.id" 
                        v-bind:user="user"></user-item>
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
import Loader from '@/components/Loader'
import UserItem from '@/views/dashboard/users/UserItem'

export default {
    name: 'users',
    components: {
        'loader': Loader,
        'user-item': UserItem
    },
    data() {
        return {
            isLoading: false
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.isLoading = true;

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
                })
                .finally(() => vm.isLoading = false);
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