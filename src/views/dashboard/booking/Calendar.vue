<template>
    <div class="calendar">
        <div class="calendar__header">

            <div class="calendar__monthInfo">
                {{ month | getMonthString }} {{ year }}
            </div>

            <div class="calendar__controls">
                <div class="buttons has-addons">
                    <div v-on:click="handlePrevMonth" class="calendar__prevButton button is-small">
                        <img src="@/assets/angle-down.png" alt="Arrow Icon">
                    </div>
                    <div v-on:click="handleNextMonth" class="calendar__nextButton button is-small">
                        <img src="@/assets/angle-down.png" alt="Arrow Icon">
                    </div>
                </div>

                <div class="select is-small calendar__rooms">
                    <select v-model="selectedRoom">
                        <option v-for="room in rooms" 
                                v-bind:key="room.id" 
                                v-bind:value="room.id">{{ room.name }}</option>
                    </select>
                </div>

                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger button is-small">
                        <img class="icon-gear" src="@/assets/gear.png" alt="Gear Icon">
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">

                            <div class="dropdown-item">
                                Week Start
                                <div class="control">
                                    <label class="radio">
                                        <input v-model="settings.weekStart" 
                                            type="radio" 
                                            value="monday">
                                        Monday
                                    </label>
                                </div>
                                <div class="control">
                                    <label class="radio">
                                        <input v-model="settings.weekStart" 
                                            type="radio" 
                                            value="sunday">
                                        Sunday
                                    </label>
                                </div>
                            </div>

                            <div class="dropdown-item">
                                Time Format
                                <div class="control">
                                    <label class="radio">
                                        <input v-model="settings.timeFormat" 
                                            type="radio" 
                                            value="24h">
                                        24h
                                    </label>
                                </div>
                                <div class="control">
                                    <label class="radio">
                                        <input v-model="settings.timeFormat" 
                                            type="radio" 
                                            value="12h">
                                        12h
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-on:click="resetCalendar" 
                    v-if="checkSwitched()" 
                    class="button is-small is-primary calendar__reset">
                    Today
                </div>
            </div>

        </div>

        <div class="calendar__body box">
            <div class="calendar__weekDays">
                <div v-for="(day, i) in weekDays" v-bind:key="i" class="calendar__item">
                    {{ day }}
                </div>
            </div>
            <div class="calendar__dates">
                <div v-for="(day, i) in days" 
                    v-bind:key="i" 
                    class="calendar__item calendar__dayItem"
                    v-bind:class="{'calendar__currentDay': day ? checkCurrent(day) : false}">

                    <template v-if="day">
                        <div class="calendar__dateNumber">
                            {{ day.date }}
                        </div>
                        
                        <div class="calendar__events">
                            <div class="tag" 
                                v-bind:class="{'is-success':event.user.id == auth.id, 'is-info':event.user.id != auth.id}"
                                v-for="(event, i) in getEventsByDay(day)"
                                v-on:click="handleSelectEvent(event)" 
                                v-bind:key="i">
                                {{ getFormattedTime(event.start_time, event.end_time) }}
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        {{ day }}
                    </template>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import { format24h, formatAMPM } from '@/functions'

export default {
    name: 'calendar',
    data() {
        return {
            date: null,
            weekDays: [],
            days: [],
            month: '',
            year: '',
            currentDate: {},
            selectedRoom: ""
        }
    },
    props: {
        events: {
            type: Array,
            required: true
        },
        rooms: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.date = new Date();
        this.currentDate = {
            date: this.date.getDate(),
            month: this.date.getMonth() + 1,
            year: this.date.getFullYear()
        };
    },
    computed: {
        ...Vuex.mapState([
            'settings',
            'auth'
        ]),
        ...Vuex.mapGetters([
            'getRoomById'
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

                localStorage.setItem('weekStart', this.settings.weekStart);
                localStorage.setItem('timeFormat', this.settings.timeFormat);
            },
            deep: true
        },
        rooms() {
            if (this.rooms.length > 0) {
                const queryId = this.$route.query.room_id;
                const queryRoom = this.getRoomById(queryId);

                this.selectedRoom = queryRoom && queryRoom.id ? 
                    queryId : this.rooms[0].id;
            }
        },
        selectedRoom() {
            this.$emit('select-room', this.selectedRoom);
        }
    },
    methods: {
        handlePrevMonth() {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1);
        },
        handleNextMonth() {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1);
        },
        generateWeekDays() {
            switch (this.settings.weekStart) {
                case 'monday':
                    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                case 'sunday':
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

            if (this.settings.weekStart === 'sunday') {
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
        checkCurrent(day) {
            return +day.date === +this.currentDate.date &&
                +day.month === +this.currentDate.month &&
                +day.year === +this.currentDate.year;
        },
        checkSwitched() {
            const currentMonth = new Date().getMonth() + 1;
            const currentYear = new Date().getFullYear();

            return +this.year !== +currentYear ||
                +this.month !== +currentMonth;
        },
        resetCalendar() {
            this.date = new Date();
        },
        getEventsByDay(day) {
            return this.events
                .filter(event => {
                    const startTime = new Date(event.start_time * 1000);

                    return +startTime.getDate() === +day.date && 
                        (+startTime.getMonth() + 1 === +day.month) &&
                        +startTime.getFullYear() === +day.year;
                })
                .filter(event => {
                    return +event.room.id === +this.selectedRoom;
                });
        },
        getFormattedTime(tsStart, tsEnd) {
            const startTime = new Date(tsStart * 1000);
            const endTime = new Date(tsEnd * 1000);

            if (this.settings.timeFormat === '12h') {
                return `${formatAMPM(startTime)} - ${formatAMPM(endTime)}`;
            }

            return `${format24h(startTime)} - ${format24h(endTime)}`;
        },
        handleSelectEvent(event) {
            this.$emit('select-event', event);
        }
    }
}
</script>

<style lang="scss" scoped>
.calendar {
    min-width: 65rem;

    &__header {
        justify-content: center;
        position: relative;
        margin-bottom: 0.5rem;

        @media screen and (max-width: 1023px) {
            flex-wrap: wrap;
        }
    }

    &__body {
        padding: 0;
        border-top: 0.75px solid rgba(#000, 0.15);
        border-right: 0.75px solid rgba(#000, 0.15);
    }

    &__controls {
        position: absolute;
        left: 0;
        top: 0.25rem;

        @media screen and (max-width: 1023px) {
            position: relative;
            width: 100%;
        }

        @media screen and (max-width: 479px) {
            margin-bottom: 1rem;
        }

        & > * {
            margin-right: 0.5rem;
        }

        .buttons,
        .button {
            display: inline-block;
        }

        .buttons {
            img {
                width: 1.05rem;
            }
        }

        .dropdown label.radio {
            font-size: 0.85rem;
        }
    }

    &__reset {
        font-weight: 500;
    }

    &__prevButton {
        img {
            transform: rotateZ(90deg);
        }
    }

    &__nextButton {
        img {
            transform: rotateZ(-90deg);
        }
    }

    &__monthInfo {
        position: relative;
        font-size: 1.5rem;
        font-weight: 500;
        padding-bottom: 0.25rem;
    }

    &__header,
    &__weekDays,
    &__dates {
        display: flex;
    }

    &__weekDays {
        font-weight: bold;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 400;
    }

    &__dates {
        flex-wrap: wrap;
    }

    &__item {
        width: calc(100% / 7);
        padding: 0.25rem;
        border-left: 0.75px solid rgba(#000, 0.15);
        border-bottom: 0.75px solid rgba(#000, 0.15);
    }

    &__dayItem {
        min-height: 5rem;
        position: relative;
    }

    &__currentDay {
        background-color: #fcf8e3;
    }

    &__dateNumber {
        text-align: right;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    &__events {
        .tag {
            display: block;
            margin-bottom: 0.2rem;
            cursor: pointer;
        }
    }

    & .icon-gear {
        width: 1.1rem;
        height: 1.1rem;
    }
}
</style>