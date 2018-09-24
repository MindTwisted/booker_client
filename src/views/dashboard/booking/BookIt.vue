<template>
    <div class="bookIt">

        <div class="dashboard__title">
            <h1 class="title">Book Room</h1>
        
            <router-link v-bind:to="{name: 'dashboard.booking'}"
                        class="button is-success">
                Back
            </router-link>
        </div>

        <div class="bookIt__form">

             <div class="field">
                <label class="label">User</label>
                <!-- <div class="control">
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
                </ul> -->
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'book-it'
}
</script>

