<template>
  <Fog>
    <div :class="$style.hourPicker">
      <h2>Wybierz godzinę</h2>

      <!-- pick hour -->
      <ul class="pxy--0 list-t--none">
        <li
          v-for="hour in activeHours"
          :key="hour"
        >
          <button v-if="isHourBusy(hour)" :class="$style.hourBusy">
            {{ pad0(hour + 1) }}:00
          </button>
           <button v-else @click="$emit('hourPick', hour)">
            {{ pad0(hour + 1) }}:00
          </button>
        </li>
      </ul>
    </div>
  </Fog>
</template>

<script setup lang="ts">
import Fog from '../layout/Fog'
import { pad0 } from '@/utils/pad0'
import { Booking } from '../../interfaces/Booking.interface'

const props = defineProps<{
  day: number,
  bookings: Booking[]
}>()

const activeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
const isHourBusy = (hour: number) => props.bookings.some(booking => booking.hour === hour)
</script>

<style module lang="scss">
.hourPicker {
  background: $activeColor;
  max-width: 20rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid $baseTextColor;

  ul {
    &:hover button {
      opacity: 0.6;
    }
    button {
      border: none;
      background: none;
      border: 1px solid $baseTextColor;
      padding: 0.5rem 1rem;
      color: $baseTextColor;
      cursor: pointer;
      font-size: 2rem;
      margin: 0.5rem;
      opacity: 0.8;
      transition: $transition;

      &.hourBusy {
        cursor: not-allowed;
        opacity: 0.2;
      }

      &:hover:not(.hourBusy) {
        opacity: 1;
      }

    }
  }
}
</style>
