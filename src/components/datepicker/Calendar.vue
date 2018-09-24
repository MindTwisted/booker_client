<template>
    <div class="calendar">
        <div class="calendar__header">
            <div v-on:click="handlePrevMonth" 
                class="calendar__prevMonth">
                &larr;
            </div>
            <div class="calendar__monthInfo">
                {{ month + "/" + year }}
                <div v-on:click="resetCalendar" 
                    v-if="checkSwitched()" 
                    class="calendar__reset">
                    today
                </div>
            </div>
            <div v-on:click="handleNextMonth" 
                class="calendar__nextMonth">
                &rarr;
            </div>
        </div>
        <div class="calendar__body">
            <div class="calendar__weekDays">
                <div v-for="(day, i) in weekDays" 
                    v-bind:key="i" 
                    class="calendar__item">
                    {{ day }}
                </div>
            </div>
            <div class="calendar__dates">
                <div v-for="(day, i) in days" 
                    v-bind:key="i" 
                    class="calendar__item">
                    <div v-if="day" 
                        v-on:click="handleSelectDate(day)" 
                        v-bind:class="{'calendar__itemInner':true, 'current': checkCurrent(day), 'selected':checkSelected(day)}">
                        {{ day.date }}
                    </div>
                    <template v-else>
                        {{ day }}
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'calendar',
    data: function () {
        return {
            date: null,
            weekDays: [],
            days: [],
            month: '',
            year: '',
            currentDate: {},
            selectedDate: {}
        }
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
    mounted() {
        this.date = new Date();
        this.currentDate = {
            date: this.date.getDate(),
            month: this.date.getMonth() + 1,
            year: this.date.getFullYear()
        };

        this.handleSelectDate(this.currentDate);
    },
    watch: {
        date() {
            this.month = this.date.getMonth() + 1;
            this.year = this.date.getFullYear();
            this.days = this.generateDays();
            this.weekDays = this.generateWeekDays();
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
            switch (this.weekStart) {
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

            if (this.weekStart === 'sunday') {
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

                for (let i = weekDayEnd; i < 7; i++) {
                    result.push(null);
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

            this.$emit('select-date', day);
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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

    &__header {
        justify-content: space-between;
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
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    &__dates {
        flex-wrap: wrap;
    }

    &__item {
        width: calc(100% / 7);
        text-align: center;
        padding: 0.25rem 0;
    }

    &__dates .calendar__itemInner {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 100%;
    }

    &__dates .calendar__itemInner:hover,
    &__dates .calendar__itemInner.selected {
        border: 1px solid $accentColor;
        color: $accentColor;
    }

    &__dates .calendar__itemInner.current {
        background-color: $accentColor;
        color: #fff;
    }
}
</style>

