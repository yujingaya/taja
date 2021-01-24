<template>
<div
  class="key"
  :class="{ 'is-highlighted': isHighlighted }">
  <div class="character">{{ character }}</div>
</div>
</template>

<script>
export default {
  props: {
    isHighlighted: Boolean,
    character: String,
  },
};
</script>

<style lang="scss" scoped>
.key {
  background-color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-color: #b5b5b5;

  &.is-highlighted {
    font-weight: bold;
    background-color: #007aff;
    border-color: #0062cc;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  .character {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
}
</style>
