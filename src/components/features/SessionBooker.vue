<template>
  <section class="max-wd--60r mx--auto mt--2">
    <session-calendar
      :data="data" />
  </section>
</template>

<script setup lang="ts">
import { Booking } from '../../interfaces/Booking.interface'
import SessionCalendar from './SessionCalendar'

const data: Booking[] = [
  {
    month: 11,
    day: 1,
    hour: 10
  },
  {
    month: 11,
    day: 3,
    hour: 11
  },
  {
    month: 11,
    day: 3,
    hour: 12
  },
  {
    month: 11,
    day: 3,
    hour: 13
  },
  {
    month: 11,
    day: 3,
    hour: 14
  },
  {
    month: 11,
    day: 3,
    hour: 15
  },
  {
    month: 11,
    day: 3,
    hour: 16
  },
   {
    month: 11,
    day: 3,
    hour: 10
  }
]
</script>
