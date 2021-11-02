<template>
  <div class="input-field">
    <label>

      <!-- label -->
      <span
        v-if="props.label"
        v-text="props.label"
      />

      <!-- input -->
      <input
        v-model="value"
        :name="props.name"
        :type="props.type"
        @input="$emit('update:modelValue', value)"
        @blur="$emit('blur', value)"
        @focus="$emit('focus', value)"
      >

    </label>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string,
  name?: string,
  type?: string,
  label?: string
}>(), {
  name: '',
  type: 'text',
  label: '',
  value: ''
})

const value = ref(props.modelValue)
</script>

<style lang="scss">
.input-field {
  input {
    background: none;
    font-family: inherit;
    font-size: 1rem;
    border: none;
    border: 1px solid $baseTextColor;
    padding: 0.5rem 1rem;
    outline: none;
    color: $baseTextColor;
    margin: 0.5rem auto;
    display: block;
  }
}
</style>
