<template>
    <div class="login"
        v-on:keyup.enter="handleLoginUser">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
                </header>
                <section class="modal-card-body">

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input v-model.trim="email" 
                                v-focus
                                v-bind:class="{ input:true, 'is-danger':errors.email.length > 0 }"
                                ref="email" 
                                type="text" 
                                placeholder="Email">
                        </div>
                        <ul class="help is-danger">
                            <li v-for="error in errors.email" 
                                v-bind:key="error">
                                {{ error | ucfirst }}
                            </li>
                        </ul>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input v-model.trim="password" 
                                v-bind:class="{ input:true, 'is-danger':errors.password.length > 0 }"
                                type="password" 
                                placeholder="Password">
                        </div>
                        <ul class="help is-danger">
                            <li v-for="error in errors.password" 
                                v-bind:key="error">
                                {{ error | ucfirst }}
                            </li>
                        </ul>
                    </div>

                </section>
                <footer class="modal-card-foot">
                    <template v-if="!isLoading">
                        <button v-on:click="handleLoginUser" 
                            class="button is-success">Submit</button>
                    </template>
                    <button v-else class="button is-success is-loading" disabled>
                        Submit
                    </button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            errors: {
                email: [],
                password: []
            },
            isLoading: false
        }
    },
    methods: {
        ...Vuex.mapActions([
            'loginUser'
        ]),
        handleLoginUser() {
            this.isLoading = true;

            this.loginUser({
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

                this.$router.push('/dashboard');
            })
            .catch(error => {
                this.$notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });

                if (!error.data.message.data) {
                    this.errors.email = [];
                    this.errors.password = [];

                    return false;
                }

                const emailErrors = error.data.message.data.email;
                const passwordErrors = error.data.message.data.password;

                this.errors.email = emailErrors ? emailErrors : [];
                this.errors.password = passwordErrors ? passwordErrors : [];
            })
            .finally(() => this.isLoading = false);
        }
    }
}
</script>


<style lang="scss" scoped>
.modal {
    background-image: url('../assets/login-bg.jpg');
    background-position: center;
    background-size: cover;
}
</style>

