<template>
  <div class="flex flex-jus--sb flex-al--center">
    <div class="flex-shrink--1">
      <img class="img-responsive d-md--none" src="../../assets/images/frameSide.png">
    </div>
    <section class="max-wd--60r wd--100 mx--auto mt--2">

      <SessionCalendar
        :data="bookings"
        @finish="handleDayAndHourPick" />

      <BookingForm
        :booking="booking"
        @confirm="finishBooking"
        @close="showBookingForm = false"
        v-if="showBookingForm" />

      <ThankYouBox
        v-if="showThankYouBox"
        @close="showThankYouBox = false" />

    </section>
    <div class="flex-shrink--1">
      <img class="img-responsive t-flipX d-md--none" src="../../assets/images/frameSide.png">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, Reactive } from 'vue'
import { Booking } from '../../interfaces/Booking.interface'
import SessionCalendar from './SessionCalendar'
import BookingForm from './BookingForm'
import ThankYouBox from './../views/ThankYouBox'
import { API_URL } from '../../config'

const bookings: Reactive<Booking[]> = reactive([])

const booking: Booking = reactive({
  client: {
    firstName: '',
    lastName: '',
    phone: ''
  },
  sessionType: 'single',
  day: 0,
  month: 10,
  hour: 9
})

const showBookingForm = ref(false)
const showThankYouBox = ref(false)

const handleDayAndHourPick = ({ month, day, hour }) => {
  booking.month = month
  booking.day = day
  booking.hour = hour
  showBookingForm.value = true
}

const finishBooking = async (booking: Booking) => {
  await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(booking)
  })
  bookings.push(booking)
  showBookingForm.value = false
  showThankYouBox.value = true
}

// load bookings at the startup
fetch(`${API_URL}/bookings`)
  .then(res => res.json())
  .then(data => bookings.push(...data))

</script>
