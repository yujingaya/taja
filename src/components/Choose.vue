<template>
  <div class="help-message">연습할 단어</div>
  <div class="field">
    <div class="control">
      <input
        v-model="word"
        @keydown.enter="chooseWord(word)"
        class="input is-large"
        type="text"
        placeholder="여기에 연습할 단어를 입력하세요.">
    </div>
  </div>
  <p>연습이 완벽을 만든다.</p>
  <div class="field mt-6">
    <div class="control">
      <button
        @click="chooseWord(word)"
        class="button is-raised">시작하기</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  emits: ['choose'],
  setup(prop, context) {
    const word = ref('');
    const chooseWord = (s: string) => {
      if (s !== '') {
        context.emit('choose', s);
      }
    };

    return { word, chooseWord };
  },
});
</script>

<style scoped lang="scss">
.help-message {
  font-size: 1.5rem;
  padding: 0.5em 0.75em;
}

p {
  padding: 0 1.125rem;
}

button {
  margin-left: 1.125rem;
}
</style>
