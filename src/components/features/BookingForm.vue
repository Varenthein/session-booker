<template>
  <Fog @close="$emit('close')">
    <form @submit.prevent :class="$style.bookingForm">
      <h2>Dokończ rezerwację</h2>
      <p :class="[$style.error, 'animated fadeIn']" v-if="showError">
        Wszystkie pola muszą zostać wypełnione!
      </p>
      <InputField
        label="Imię"
        v-model="booking.client.firstName"
      />
      <InputField
        label="Nazwisko"
        v-model="booking.client.lastName"
      />
      <InputField
        label="Numer telefonu"
        type="phone"
        v-model="booking.client.phone"
      />
      <DropDown
        :choices="sessionTypes"
        @update="booking.sessionType = $event"
        label="Rodzaj sesji"
      />
      <ButtonItem @click="handleSubmit">
        <IconCheckmark />
        <span>Potwierdź</span>
      </ButtonItem>
    </form>
  </Fog>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, defineEmits, toRaw } from 'vue'
import { Booking } from '../../interfaces/Booking.interface'
import Fog from './../layout/Fog'
import InputField from './../layout/InputField'
import DropDown from './../layout/DropDown'
import ButtonItem from './../layout/ButtonItem'
import IconCheckmark from './../layout/icons/IconCheckmark'

const props = defineProps<{
  booking: Booking
}>()

const emit = defineEmits(['confirm'])

const booking: Reactive<Booking> = reactive(JSON.parse(JSON.stringify(props.booking)))

const sessionTypes = [
  {
    label: 'Jedna osoba',
    value: 'single'
  },
  {
    label: 'Para',
    value: 'couple'
  },
  {
    label: 'Rodzina',
    value: 'family'
  }
]

const showError = ref(false)

const handleSubmit = () => {
  const rawBooking = toRaw(booking)
  if(Object.values(rawBooking.client).includes('') || !rawBooking.sessionType) showError.value = true
  else emit('confirm', JSON.parse(JSON.stringify(rawBooking)))
}
</script>

<style module lang="scss">
.bookingForm {
  background: $activeColor;
  max-width: 20rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid $baseTextColor;

  .error {
    color: $warningColor;
  }
}
</style>
