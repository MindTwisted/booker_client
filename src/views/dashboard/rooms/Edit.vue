<template>
     <div class="create" 
        v-on:keyup.enter="handleUpdateRoom">

        <div class="dashboard__title">
            <h1 class="title">Update Room # {{ room.id }}</h1>
        
            <router-link v-bind:to="{name: 'dashboard.rooms'}"
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
                <button v-if="!isLoading" 
                    v-on:click="handleUpdateRoom" 
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
    name: 'edit-room',
    data() {
        return {
            name: '',
            errors: {
                name: []
            },
            isLoading: false
        }
    },
    mounted() {
        this.name = this.room.name;
    },
    computed: {
        ...Vuex.mapGetters([
            'getRoomById'
        ]),
        room() {
            return this.getRoomById(this.$route.params.id);
        },
    },
    methods: {
        ...Vuex.mapActions([
            'updateRoom'
        ]),
        handleUpdateRoom() {
            this.isLoading = true;

            this.updateRoom({
                id: this.room.id,
                name: this.name
            })
            .then(data => {
                this.$notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: data.text
                });

                this.$router.push({name: 'dashboard.rooms'});
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

                    return false;
                }

                const nameErrors = error.data.name;

                this.errors.name = nameErrors ? nameErrors : [];
            })
            .finally(() => this.isLoading = false);
        }
    }
}
</script>

