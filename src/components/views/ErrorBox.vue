<template>
  <Fog @close="$emit('close')">
    <div :class="$style.errorBox">
      <h2>Coś poszło nie tak :(</h2>
      <p>Ten termin jest już zajęty...</p>
      <p>Ale to nic! Jest jeszcze sporo innych do wyboru :)</p>
    </div>
  </Fog>
</template>

<script setup>
import Fog from './../layout/Fog'
</script>

<style module lang="scss">
.errorBox {
  background: $activeColor;
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid $baseTextColor;
}
</style>
