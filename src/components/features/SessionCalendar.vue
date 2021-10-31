<template>
  <div>
    <!-- choose month panel-->
    <nav class="flex flex-al--center mb--2">
      Wybierz miesiąc:
      <ul :class="$style.months">
        <li>
          <button @click="month = 10" :class="[month === 10 && $style.active]">Listopad</button>
        </li>
        <li>
          <button @click="month = 11" :class="[month === 11 && $style.active]">Grudzień</button>
        </li>
      </ul>
    </nav>
  </div>

  <!-- pick day panel -->
  <DayPicker :month="month" :bookings="bookings" />

</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'
import { Booking } from '../../interfaces/Booking.interface'
import DayPicker from './DayPicker'

const props = defineProps<{
  data: Booking[]
}>()

const month = ref(10)
const bookings = computed(() => props.data.filter(booking => booking.month === month.value))
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
