<template>
  <div :class="$style.dayPicker">
    <!-- weekdays names -->
    <div
      :key="day"
      v-for="day in weekDays"
      :class="$style.header">
      {{ day }}
    </div>

    <!-- disabled slots before the month starts -->
    <div
      :key="day"
      v-for="day in disabledDays"
      :class="$style.disabled">
    </div>

    <!-- days to pick -->
    <div
      :key="day"
      v-for="day in daysInMonth"
    >
      <div v-if="countBookingsForDay(day) === slotsPerDay" :class="$style.dayBusy">
        Zajęte
      </div>
      <div v-else-if="dayPassed(day)" :class="[$style.dayBusy, $style.dayBlocked]">
        X
      </div>
      <div v-else @click="$emit('dayPick', day)">
        {{ day }}
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { Booking } from '../../interfaces/Booking.interface'

const props = defineProps<{
  month: number,
  bookings: Booking[]
}>()

const emit = defineEmits(['dayPick'])

const today = new Date()
const todayPlusBuffor = computed(() => {
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)
})

const countBookingsForDay = (day: number) => {
  return props.bookings.filter(booking => booking.day === day).length
}

const dayPassed = (day: number) => {
  const dateForDay = new Date(today.getFullYear(), props.month, day)
  return dateForDay.getTime() < todayPlusBuffor.value.getTime()
}

const disabledDays = computed(() => new Date(2021, props.month, 1).getDay() - 1)
const daysInMonth = computed(() => props.month === 11 ? 18 : new Date(2021, props.month, 0).getDate())
const weekDays = computed(() => ['Pon', 'Wto', 'Śr', 'Czw', 'Pią', 'Sob', 'Nie'])
const slotsPerDay = 7
</script>

<style lang="scss" module>
.dayPicker {
  display: flex;
  flex-wrap: wrap;

  > div {
    flex: 0 0 13%;
    border: 1px solid $baseTextColor;
    aspect-ratio: 1;
    margin: 0.5%;
    cursor: pointer;
    transition: $transition;
    opacity: 0.9;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    &.header {
      font-size: 1.5rem;
      font-weight: 700;
      aspect-ratio: 0;
      padding: 1rem 0;
      background: $activeColor;
      opacity: 1;
    }

    &.disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }

    .dayBusy {
      background: $activeColor url('../../assets/images/reindeer.png') no-repeat center center;
      background-size: 90% auto;
    }

    .dayBlocked {
      background: $activeColor url('../../assets/images/reindeer.png') no-repeat center center;
      background-size: 90% auto;
    }

    .disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }

    &:hover:not(.disabled) {
      background: $activeColor;
      opacity: 1;
    }
  }

  &:hover {
    > div:not(:hover):not(.header):not(.disabled) {
      opacity: 0.6;
    }
  }
}

@media (max-width: #{$sm-breakpoint}) {
  .dayPicker > div {
    &.header {
      font-size: 1rem;
    }

    .dayBusy {
      font-size: 0.8rem;
    }

    > div {
      font-size: 1.4rem;
    }
  }
}
</style>
