<template>
  <video
    :class="$style.video"
    autoplay
    loop
    muted
    preload="auto"
    poster="../../assets/images/background.jpg"
  >
    <source src="../../assets/videos/background.mp4" type="video/mp4">
  </video>
  <div :class="$style.overlay" />
</template>

<style module>
.video {
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.overlay {
  background-image: url('../../assets/images/backgroundOverlay.jpg');
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.3;
}
</style>
