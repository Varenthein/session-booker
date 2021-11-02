<template>
  <button class="button-item">
    <slot />
  </button>
</template>

<style lang="scss">
.button-item {
  border: none;
  border: 1px solid $baseTextColor;
  color: $baseTextColor;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  transition: $transition;

  &:hover {
    opacity: 1;
  }

  > * {
    margin: 0 0.5rem;
  }
}
</style>
