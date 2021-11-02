<template>
  <div class="dropdown-wrapper">

    <!-- label -->
    <div
      v-if="props.label"
      v-text="props.label"
      class="label"
    />

    <!-- dropdown -->
    <div @click="toggleList" class="dropdown">
      <span :hidden="itemChosen">
        Wybierz
      </span>

      <div v-if="itemChosen">
        <span>
          {{ itemChosen.label }}
        </span>
      </div>

      <IconArrowDown
        :class="['dropdown-icon', listVisible && 'tf-flipY']"
      />

      <ul class="list-t--none pxy--0 animated fadeIn" :hidden="!listVisible">
        <li
          @click="chooseItem(item)"
          :key="index"
          v-for="(item, index) in props.choices"
        >
          <span>
            {{ item.label }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, Ref } from 'vue'
import IconArrowDown from './../layout/icons/IconArrowDown'

interface Choice { label: string, value: string}

const props = defineProps<{
  choices: Choice[],
  defaultValue?: string,
  label?: string
}>()

const emit = defineEmits(['update'])

const itemChosen = ref(null);
const listVisible = ref(false)

const toggleList = () => {
  listVisible.value = !listVisible.value
}

const chooseItem = (item: Choice) => {
  // @ts-ignore
  itemChosen.value = item
  emit('update', item.value)
}

if (props.defaultValue) chooseItem(props.choices.find(item =>
  item.value === props.defaultValue) as Choice)

</script>

<style lang="scss" scoped>
.dropdown {
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
  position: relative;
  cursor: pointer;
  max-width: 12.5rem;
  user-select: none;
  z-index: 1;

  .dropdown-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  ul {
    position: absolute;
    background: $activeColor;
    top: 1.1rem;
    left: 0;
    width: 100%;
    border: 1px solid $baseTextColor;

    li {
      padding: 0.5rem;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
      transition: $transition;

      &:hover {
        opacity: 1;
        background: $activeColor;
      }

      &:last-of-type {
        border: none;
      }
    }
  }

}
</style>
