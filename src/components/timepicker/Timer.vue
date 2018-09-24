<template>
    <div class="timer">
        <div v-if="timeFormat == '24h'" 
            class="timer__24h">

            <div class="timer__section">
                <div class="timer__arrow timer__arrowUp" 
                    v-on:click="incrementTime('hours')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
                <div class="timer__number">
                    {{ time['24h'].hours | zeroFill }}
                </div>
                <div class="timer__arrow timer__arrowDown"
                    v-on:click="decrementTime('hours')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
            </div>

            <div class="timer__section">
                <div class="timer__arrow timer__arrowUp"
                    v-on:click="incrementTime('minutes')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
                <div class="timer__number">
                    {{ time['24h'].minutes | zeroFill }}
                </div>
                <div class="timer__arrow timer__arrowDown"
                    v-on:click="decrementTime('minutes')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
            </div>

        </div>
        <div v-else 
            class="timer__12h">

            <div class="timer__section">
                <div class="timer__arrow timer__arrowUp" 
                    v-on:click="incrementTime('hours')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
                <div class="timer__number">
                    {{ time['12h'].hours | zeroFill }}
                </div>
                <div class="timer__arrow timer__arrowDown"
                    v-on:click="decrementTime('hours')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
            </div>

            <div class="timer__section">
                <div class="timer__arrow timer__arrowUp"
                    v-on:click="incrementTime('minutes')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
                <div class="timer__number">
                    {{ time['12h'].minutes | zeroFill }}
                </div>
                <div class="timer__arrow timer__arrowDown"
                    v-on:click="decrementTime('minutes')">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
            </div>

            <div class="timer__section">
                <div class="timer__arrow timer__arrowUp"
                    v-on:click="toggleAMPM">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
                <div class="timer__number">
                    {{ time['12h'].ampm }}
                </div>
                <div class="timer__arrow timer__arrowDown"
                    v-on:click="toggleAMPM">
                    <img src="@/assets/angle-down.png" alt="Angle Icon">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'timer',
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
            default: function () {
                return (new Date()).getHours();
            }
        },
        initMinutes: {
            type: Number,
            validator(value) {
                return value >= 0 && value <= 59;
            },
            default: function () {
                return (new Date()).getMinutes();
            }
        }
    },
    data() {
        return {
            time: {
                '24h': {
                    hours: "",
                    minutes: ""
                },
                '12h': {
                    hours: "",
                    minutes: "",
                    ampm: ""
                }
            }
        }
    },
    mounted() {
        this.time['24h'] = {
            hours: this.initHours,
            minutes: this.initMinutes
        };

        this.time['12h'] = {
            hours: this.get12hFormat(this.initHours, this.initMinutes, 'hours'),
            minutes: this.get12hFormat(this.initHours, this.initMinutes, 'minutes'),
            ampm: this.get12hFormat(this.initHours, this.initMinutes, 'ampm')
        };
    },
    watch: {
        time: {
            handler() {
                this.setTime();
            },
            deep: true
        }
    },
    methods: {
        get12hFormat(hours, minutes, type) {
            let ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;

            switch(type) {
                case 'hours':
                    return hours;
                case 'minutes':
                    return minutes;
                case 'ampm':
                    return ampm;
                default:
                    return hours + ':' + minutes + ' ' + ampm;
            }
        },
        incrementTime(type) {
            if (type === 'hours') {
                if (this.timeFormat === '24h') {
                    if (+this.time['24h'].hours < 23) {
                        this.time['24h'].hours++;

                        return false;
                    }

                    this.time['24h'].hours = 0;

                    return false;
                }

                if (this.timeFormat === '12h') {
                    if (+this.time['12h'].hours < 12) {
                        this.time['12h'].hours++;

                        return false;
                    }

                    this.time['12h'].hours = 1;

                    return false;
                }
            }

            if (type === 'minutes') {
                if (+this.time['24h'].minutes < 59 
                    && +this.time['12h'].minutes < 59) {
                    this.time['24h'].minutes++;
                    this.time['12h'].minutes++;

                    return false;
                }

                this.time['24h'].minutes = 0;
                this.time['12h'].minutes = 0;

                return false;
            }
        },
        decrementTime(type) {
            if (type === 'hours') {
                if (this.timeFormat === '24h') {
                    if (+this.time['24h'].hours > 0) {
                        this.time['24h'].hours--;

                        return false;
                    }

                    this.time['24h'].hours = 23;

                    return false;
                }

                if (this.timeFormat === '12h') {
                    if (+this.time['12h'].hours > 1) {
                        this.time['12h'].hours--;

                        return false;
                    }

                    this.time['12h'].hours = 12;

                    return false;
                }
            }

            if (type === 'minutes') {
                if (+this.time['24h'].minutes > 0 
                    && +this.time['12h'].minutes > 0) {
                    this.time['24h'].minutes--;
                    this.time['12h'].minutes--;

                    return false;
                }

                this.time['24h'].minutes = 59;
                this.time['12h'].minutes = 59;

                return false;
            }
        },
        toggleAMPM() {
            this.time['12h'].ampm = this.time['12h'].ampm === 'am' ?
                                    'pm' : 'am';
        },
        setTime() {
            const time = this.timeFormat === '24h' ?
                this.time['24h'] : this.time['12h'];

            this.$emit('set-time', time);
        }
    }
}
</script>

<style lang="scss" scoped>
.timer {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &__section {
        display: inline-block;
        text-align: center;
        margin: 0 0.5rem;
        position: relative;

        &:first-child {
            &::after {
                content: ':';
                font-size: 2.5rem;
                position: absolute;
                right: -0.75rem;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

    &__number {
        font-size: 2.5rem;
    }

    &__arrow {
        cursor: pointer;

        img {
            width: 2rem;
        }
    }

    &__arrowUp {
        img {
            transform: rotateZ(180deg);
        }
    }
}
</style>
