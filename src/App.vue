<template>
  <Container>
    <VideoBackground />
    <PageHeader />
    <SessionBooker />
    <PageFooter />
  </Container>
</template>

<script setup lang="ts">
import 'normalize.css'
import './styles/style.scss'
import SessionBooker from './components/features/SessionBooker'
import VideoBackground from './components/layout/VideoBackground'
import PageHeader from './components/layout/PageHeader'
import PageFooter from './components/layout/PageFooter'
import Container from './components/layout/Container'
</script>

<style lang="scss">
#app {
  font-family: Calibri, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 0;
}
</style>
