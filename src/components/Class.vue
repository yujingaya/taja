<template>
<div class="class" :class="{ 'is-not-ready': !isReady }">
  <div class="class-title">
    {{ title }}
  </div>
  <Keyboard :keys="keys"/>
</div>
</template>

<script>
import Keyboard from '@/components/Keyboard.vue';

export default {
  props: {
    title: String,
    keys: Array,
    isReady: Boolean,
  },
  components: { Keyboard },
};
</script>

<style lang="scss" scoped>
.class {
  width: 250px;
  padding: 0.75rem;
  position: relative;

  border-radius: 4px;

  background-color: #ececec;
  box-shadow: 0 2px 2px 0 hsla(0, 0, 50, 0.4);
  .class-title {
    color: #363636;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
    transition: filter 0.2s ease;
  }

  &.is-not-ready {
    filter: brightness(50%);
  }
}
</style>
