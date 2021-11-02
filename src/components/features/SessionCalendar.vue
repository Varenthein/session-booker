<template>
  <div>
    <!-- choose month panel-->
    <nav class="flex flex-al--center mb--2">
      Wybierz miesiąc:
      <ul :class="$style.months">
        <li>
          <button @click="currentMonth = 10" :class="[currentMonth === 10 && $style.active]">Listopad</button>
        </li>
        <li>
          <button @click="currentMonth = 11" :class="[currentMonth === 11 && $style.active]">Grudzień</button>
        </li>
      </ul>
    </nav>
  </div>

  <!-- pick day panel -->
  <DayPicker
    :month="currentMonth"
    :bookings="bookingsForMonth"
    @dayPick="handleDayPick"
  />

  <!-- pick hour panel -->
  <HourPicker
    v-if="showHoursPanel"
    @close="showHoursPanel = false"
    :day="currentDay"
    :bookings="bookingsForDay"
    @hourPick="handleHourPick"
  />

</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue'
import { Booking } from '../../interfaces/Booking.interface'
import DayPicker from './DayPicker'
import HourPicker from './HourPicker'

const props = defineProps<{
  data: Booking[]
}>()

const emit = defineEmits(['finish'])

const currentMonth = ref(10)
const currentDay = ref(null)
const showHoursPanel = ref(false)
const bookingsForMonth = computed(() => props.data.filter(booking =>
  booking.month === currentMonth.value))
const bookingsForDay = computed(() => props.data.filter(booking =>
  booking.month === currentMonth.value && booking.day === currentDay.value))

const handleDayPick = (day: number) => {
  currentDay.value = day
  showHoursPanel.value = true
}

const handleHourPick = (hour: number) => {
  showHoursPanel.value = false
  emit('finish', { month: currentMonth.value, day: currentDay.value, hour })
}
</script>

<style lang="scss" module>
.months {
  padding: 0;
  list-style-type: none;
  display: flex;
  margin: 0;

  button {
    border: none;
    border: 1px solid $baseTextColor;
    color: $baseTextColor;
    background: none;
    font-family: inherit;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    opacity: 0.7;
    transition: $transition;

    &:hover {
      opacity: 1;
    }

    &.active {
      background: $activeColor;
    }
  }

}
</style>
