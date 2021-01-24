<template>
<div class="container">
  <div class="practice-word">{{ word }}</div>
  <input class="input is-large"
    :class="{
      'is-success': isRight,
    }"
    :value="input"
    @input="e => { input = e.target.value; }"
    @keydown.enter="submit"
    type="text"
    placeholder="여기에 입력하세요.">
</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Practice',
  props: ['word'],
  emits: ['next'],
  setup(prop, context) {
    const input = ref('');

    const isRight = computed(() => input.value.trim() === prop.word);

    const submit = () => {
      if (isRight.value) {
        input.value = '';
        context.emit('next');
      }
    };

    return {
      input, isRight, submit,
    };
  },
});
</script>

<style scoped lang="scss">
.practice-word {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;

  padding: 0.5em 0.75em;
}

.input {
  transition: all 0.5s ease;
}
</style>
