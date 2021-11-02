<template>
  <Fog @close="$emit('close')">
    <div :class="$style.thankYouBox">
      <Reindeer class="mt--2" />
      <h2>Dziękujemy!</h2>
      <p>Twoja rezerwacja została zapisana. Na kilka dni przed sesją skontaktujemy się z Tobą w celu potwierdzenia terminu.</p>
      <p>Do zobaczenia!</p>
    </div>
  </Fog>
</template>

<script setup>
import Fog from './../layout/Fog'
import Reindeer from './../layout/Reindeer'
</script>

<style module lang="scss">
.thankYouBox {
  background: $activeColor;
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid $baseTextColor;
}
</style>
