<template>
    <div class="datepicker" 
        v-click-outside="closeDropdown">
        <div class="dropdown" 
            v-bind:class="{'is-active':isDropdownOpen}">
            <div class="dropdown-trigger">
                <button class="button" 
                        v-on:click="toggleDropdown"
                        aria-haspopup="true" 
                        aria-controls="dropdown-menu">
                    <span class="date">{{ month | getMonthString }} {{ date }}, {{ year }}</span>
                    <span class="icon">
                        <img src="@/assets/angle-down.png" alt="">
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" 
                role="menu">
                <div class="dropdown-content">
                    <calendar v-on:select-date="handleSelectDate" 
                            v-bind:weekStart="weekStart"></calendar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Calendar from './Calendar'

export default {
    name: 'date-picker',
    components: {
        'calendar': Calendar
    },
    props: {
        weekStart: {
            type: String,
            required: true,
            validator: function (value) {
                return ['sunday', 'monday'].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            isDropdownOpen: false,
            date: '',
            month: '',
            year: ''
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        handleSelectDate(date) {
            this.date = date.date;
            this.month = date.month;
            this.year = date.year;

            this.$emit('input', {
                date: this.date,
                month: this.month,
                year: this.year
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.datepicker {
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
        min-width: 18rem;
    }
}
</style>

