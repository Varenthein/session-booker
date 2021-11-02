<template>
  <teleport to="#endofbody">
    <div @click.self="$emit('close')" class="animated fadeIn fog p--fixed top--0 left--0 flex back--fog wd--100 hg--100">
      <slot />
    </div>
  </teleport>
</template>

<style lang="scss">
.fog {
  padding: 1rem;
  > * {
    margin: auto;
    padding: 1rem;
  }
}
</style>

