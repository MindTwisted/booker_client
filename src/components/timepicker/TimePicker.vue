<template>
    <div class="timepicker" 
        v-click-outside="closeDropdown">
        <div class="dropdown" 
            v-bind:class="{'is-active':isDropdownOpen}">
            <div class="dropdown-trigger">
                <button class="button" 
                        v-on:click="toggleDropdown"
                        v-bind:class="{'is-danger is-outlined':isError}"
                        aria-haspopup="true" 
                        aria-controls="dropdown-menu">
                    <span class="date">
                        <template v-if="timeFormat === '24h'">
                            {{ pickedTime.hours | zeroFill }} : {{ pickedTime.minutes | zeroFill }}
                        </template>
                        <template v-else>
                            {{ pickedTime.hours | zeroFill }} : {{ pickedTime.minutes | zeroFill }} {{ pickedTime.ampm }}
                        </template>
                    </span>
                    <span class="icon">
                        <img src="@/assets/angle-down.png" alt="">
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" 
                role="menu">
                <div class="dropdown-content">
                    <timer v-bind:timeFormat="timeFormat"
                        v-bind:initHours="initHours"
                        v-bind:initMinutes="initMinutes" 
                        v-on:set-time="handleSetTime"></timer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import Timer from './Timer'

export default {
    name: 'time-picker',
    components: {
        'timer': Timer
    },
    props: {
        timeFormat: {
            type: String,
            required: true,
            validator(value) {
                return ['12h', '24h'].indexOf(value) !== -1;
            }
        },
        initHours: {
            type: Number,
            validator(value) {
                return value >= 0 && value <= 23;
            },
            default() {
                return (new Date()).getHours();
            }
        },
        initMinutes: {
            type: Number,
            validator(value) {
                return value >= 0 && value <= 59;
            },
            default() {
                return (new Date()).getMinutes();
            }
        },
        isError: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    data() {
        return {
            isDropdownOpen: false,
            pickedTime: {}
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        handleSetTime(time) {
            this.pickedTime = time;

            this.$emit('input', this.pickedTime);
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style lang="scss" scoped>
.timepicker {

    .button {
        .date {
            margin-right: 0.5rem;
        }

        .icon {
            width: 0.75rem;
            margin-right: 0.01rem;
        }
    }

    .dropdown-menu {
        min-width: 14rem;
    }
}
</style>

