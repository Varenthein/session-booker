<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  padding: 3rem;
}

@media (max-width: #{$sm-breakpoint}) {
  .container {
    padding: 1rem;
  }
}
</style>
