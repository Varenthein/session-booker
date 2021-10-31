<template>
  <header class="flex flex-jus--sb">
    <div class="flex-shrink--1">
      <img class="img-responsive" src="../../assets/images/frameAngle.png">
    </div>

    <!-- main content -->
    <div class="flex flex-al--end flex-shrink--1">
      <div class="flex-shrink--1">
        <Reindeer class="img-responsive d-md--none" direction="right" />
      </div>
      <div class="flex flex-jus--center flex-al--center flex-dir--col flex-shrink--1">
        <img class="flex-shrink--1" src="../../assets/images/headerFrame--top.png">
        <h1 :class="$style.heading">
          Zarezerwuj termin
        </h1>
        <div class="flex-shrink--1 d-md--none max-wd--50r">
          <img class="img-responsive" src="../../assets/images/headerFrame--bottom.png">
        </div>
      </div>
      <div class="flex-shrink--1">
        <Reindeer class="img-responsive d-md--none tf-flipX" direction="left" />
      </div>
    </div>

    <div class="flex-shrink--1">
      <img
        class="img-responsive tf-flipX" src="../../assets/images/frameAngle.png">
    </div>
  </header>
</template>

<script setup>
import Reindeer from '../layout/Reindeer'
</script>

<style module lang="scss">
.heading {
  font-weight: 500;
  font-size: 4rem;
  text-transform: uppercase;

  &::first-letter {
    font-size: 5rem;
  }
}
</style>
