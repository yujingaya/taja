<template>
  <div class="field">
    <label class="label">연습할 단어</label>
    <div class="control">
      <input
        v-model="word"
        @keydown.enter="$emit('choose', word)"
        class="input"
        type="text"
        placeholder="여기에 연습할 단어를 입력하세요.">
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button
        @click="$emit('choose', word)"
        class="button is-raised">시작하기</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  emits: ['choose'],
  setup() {
    const word = ref('');
    return { word };
  },
});
</script>

<style scoped lang="scss">
</style>
