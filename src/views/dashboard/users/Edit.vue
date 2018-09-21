<template>
     <div class="create" 
        v-on:keyup.enter="handleUpdateUser">

        <div class="dashboard__title">
            <h1 class="title">Update User # {{ user.id }}</h1>
        
            <router-link v-bind:to="{name: 'dashboard.users'}"
                        class="button is-success">
                Back
            </router-link>
        </div>

        <div class="create__form">

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input v-model.trim="name" 
                        v-focus 
                        v-bind:class="{ input:true, 'is-danger':errors.name.length > 0 }"
                        type="text" 
                        placeholder="Name">
                </div>
                <ul class="help is-danger">
                    <li v-for="error in errors.name" v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input v-model.trim="email" 
                        v-bind:class="{ input:true, 'is-danger':errors.email.length > 0 }"
                        type="text" 
                        placeholder="Email">
                </div>
                <ul class="help is-danger">
                    <li v-for="error in errors.email" v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">
                    Password
                    <button v-if="!isPasswordEditable"
                            v-on:click="togglePasswordEditable"
                            class="button is-primary is-small">Edit</button>
                </label>
                <div class="control">
                    <input v-model.trim="password" 
                        v-bind:class="{ input:true, 'is-danger':errors.password.length > 0 }"
                        v-bind:disabled="!isPasswordEditable"
                        type="password" 
                        placeholder="Password">
                </div>
                <ul class="help is-danger">
                    <li v-for="error in errors.password" v-bind:key="error">
                        {{ error | ucfirst }}
                    </li>
                </ul>
            </div>

            <div class="field">
                <button v-if="!isLoading" 
                    v-on:click="handleUpdateUser" 
                    class="button is-success">
                    Update
                </button>
                <button v-else class="button is-success is-loading" disabled>
                    Update
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'edit-user',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errors: {
                name: [],
                email: [],
                password: []
            },
            isLoading: false,
            isPasswordEditable: false
        }
    },
    mounted() {
        this.name = this.user.name;
        this.email = this.user.email;
    },
    computed: {
        ...Vuex.mapGetters([
            'getUserById'
        ]),
        user() {
            return this.getUserById(this.$route.params.id);
        },
    },
    methods: {
        ...Vuex.mapActions([
            'updateUser'
        ]),
        handleUpdateUser() {
            this.isLoading = true;

            this.updateUser({
                id: this.user.id,
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(data => {
                this.$notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: data.text
                });

                this.$router.push({name: 'dashboard.users'});
            })
            .catch(error => {
                this.$notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.text
                });

                if (!error.data) {
                    this.errors.name = [];
                    this.errors.email = [];
                    this.errors.password = [];

                    return false;
                }

                const nameErrors = error.data.name;
                const emailErrors = error.data.email;
                const passwordErrors = error.data.password;

                this.errors.name = nameErrors ? nameErrors : [];
                this.errors.email = emailErrors ? emailErrors : [];
                this.errors.password = passwordErrors ? passwordErrors : [];
            })
            .finally(() => this.isLoading = false);
        },
        togglePasswordEditable() {
            this.isPasswordEditable = !this.isPasswordEditable;
        }
    }
}
</script>

