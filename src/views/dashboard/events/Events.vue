<template>
    <div class="events">
        <loader v-if="isLoading"></loader>

        <div class="dashboard__title">
            <h1 class="title">Events</h1>
        
            <router-link v-bind:to="{name: 'dashboard.events.create'}" 
                        class="button is-success">
                Create
            </router-link>
        </div>

        <div class="calendar">
            <div class="calendar__header">
                <div v-on:click="handlePrevMonth" class="calendar__prevMonth">
                    &larr;
                </div>
                <div class="calendar__monthInfo">
                    {{ month + "/" + year }}
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <img class="icon-gear" src="@/assets/gear.png" alt="Gear Icon">
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <div class="control">
                                        <label class="radio">
                                            <input v-model="settings.type" type="radio" value="FROM_MONDAY">
                                            Monday start
                                        </label>
                                    </div>
                                    <div class="control">
                                        <label class="radio">
                                            <input v-model="settings.type" type="radio" value="FROM_SUNDAY">
                                            Sunday start
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-on:click="resetCalendar" v-if="checkSwitched()" class="calendar__reset">
                        today
                    </div>
                </div>
                <div v-on:click="handleNextMonth" class="calendar__nextMonth">
                    &rarr;
                </div>
            </div>
            <div class="calendar__body">
                <div class="calendar__weekDays">
                    <div v-for="(day, i) in weekDays" v-bind:key="i" class="calendar__item">
                        {{ day }}
                    </div>
                </div>
                <div class="calendar__dates">
                    <div v-for="(day, i) in days" v-bind:key="i" class="calendar__item calendar__dayItem">
                        <div v-if="day" 
                            v-bind:class="{'current': checkCurrent(day)}">
                            <div class="calendar__dateNumber">
                                {{ day.date }}
                            </div>
                        </div>
                        <template v-else>
                            {{ day }}
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import Loader from '@/components/Loader'

export default {
    name: 'events',
    components: {
        'loader': Loader
    },
    data() {
        return {
            isLoading: false,
            settings: {
                type: 'FROM_MONDAY'
            },
            date: null,
            weekDays: [],
            days: [],
            month: '',
            year: '',
            currentDate: {},
            selectedDate: {}
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.isLoading = true;

            vm.getEvents()
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
    mounted() {
        this.date = new Date();
        this.currentDate = {
            date: this.date.getDate(),
            month: this.date.getMonth() + 1,
            year: this.date.getFullYear()
        };

        this.handleSelectDate(this.currentDate);
    },
    computed: {
        ...Vuex.mapState([
            'events'
        ])
    },
    watch: {
        date() {
            this.month = this.date.getMonth() + 1;
            this.year = this.date.getFullYear();
            this.days = this.generateDays();
            this.weekDays = this.generateWeekDays();
        },
        settings: {
            handler() {
                this.days = this.generateDays();
                this.weekDays = this.generateWeekDays();
            },
            deep: true
        }
    },
    methods: {
        ...Vuex.mapActions([
            'getEvents'
        ]),
        handlePrevMonth() {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1);
        },
        handleNextMonth() {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1);
        },
        generateWeekDays() {
            switch (this.settings.type) {
                case 'FROM_MONDAY':
                    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                case 'FROM_SUNDAY':
                    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                default:
                    return false;
            }
        },
        generateDays() {
            const result = [];
            const daysInMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

            for (let i = 1; i <= daysInMonth; i++) {
                result.push({
                    date: i,
                    month: this.month,
                    year: this.year
                });
            }

            const weekDayStart = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
            const weekDayEnd = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();

            if (this.settings.type === 'FROM_SUNDAY') {
                for (let i = 0; i < weekDayStart; i++) {
                    result.unshift(null);
                }

                for (let i = weekDayEnd; i < 6; i++) {
                    result.push(null);
                }
            } else {
                for (let i = 1; i < weekDayStart; i++) {
                    result.unshift(null);
                }

                if (weekDayEnd > 0) {
                    for (let i = weekDayEnd; i < 7; i++) {
                        result.push(null);
                    }
                }
            }

            return result;
        },
        handleSelectDate(day) {
            this.selectedDate = {
                date: day.date,
                month: day.month,
                year: day.year
            };

            this.$root.$emit('select-date', day);
        },
        checkCurrent(day) {
            return +day.date === +this.currentDate.date &&
                +day.month === +this.currentDate.month &&
                +day.year === +this.currentDate.year;
        },
        checkSelected(day) {
            return +day.date === +this.selectedDate.date &&
                +day.month === +this.selectedDate.month &&
                +day.year === +this.selectedDate.year;
        },
        checkSwitched() {
            const currentMonth = new Date().getMonth() + 1;
            const currentYear = new Date().getFullYear();

            return !this.checkSelected(this.currentDate) ||
                +this.year !== +currentYear ||
                +this.month !== +currentMonth;
        },
        resetCalendar() {
            this.date = new Date();
            this.handleSelectDate(this.currentDate);
        }
    }
}
</script>

<style lang="scss" scoped>
$accentColor: hsl(171, 100%, 41%);

.calendar {
    
    &__header {
        justify-content: space-between;
    }

    &__body {
        padding: 0;
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.25), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }

    &__prevMonth,
    &__nextMonth {
        padding: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }

    &__monthInfo {
        padding: 1rem;
        position: relative;
    }

    &__monthInfo .dropdown label.radio {
        font-size: 0.85rem;
    }

    &__reset {
        text-align: center;
        text-transform: uppercase;
        color: $accentColor;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: -1px;
        cursor: pointer;
        position: absolute;
        width: 100%;
        left: 0;
    }

    &__reset:hover {
        text-decoration: underline;
    }

    &__header,
    &__weekDays,
    &__dates {
        display: flex;
    }

    &__weekDays {
        font-weight: bold;
        text-align: center;
    }

    &__dates {
        flex-wrap: wrap;
    }

    &__item {
        width: calc(100% / 7);
        padding: 0.25rem;
        border: 0.3px solid rgba(#000, 0.15);
    }

    &__dayItem {
        min-height: 5rem;
        position: relative;

        .current {
            box-sizing: border-box;
            padding: 0.25rem;
            background-color: #fcf8e3;
            position: absolute;
            right: 0.6px;
            bottom: 0.6px;
            width: calc(100% - 2.4px);
            height: calc(100% - 1.2px);
        }
    }

    &__dateNumber {
        text-align: right;
    }

    & .icon-gear {
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>

