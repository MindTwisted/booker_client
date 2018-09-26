<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img alt="Vue logo" src="../assets/logo.png">
                    Boardroom Booker
                </router-link>
                <a v-on:click="toggleActive"
                    v-bind:class="{'is-active': isActive}"
                    role="button" 
                    class="navbar-burger" 
                    aria-label="menu" 
                    aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" 
                v-bind:class="{'is-active': isActive}">
                <div class="navbar-end">

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            {{ auth.name }}
                        </a>

                        <div class="navbar-dropdown">
                            <a v-on:click="handleLogoutUser" 
                                class="navbar-item">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'navbar',
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        ...Vuex.mapState([
            'auth'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'logoutUser'
        ]),
        handleLogoutUser() {
            this.logoutUser()
                .then(data => {
                    this.$notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: data.text
                    });

                    this.$router.push({name: 'login'});
                });
        },
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-brand {

  img {
    margin-right: 0.5rem;
  }
}
</style>
