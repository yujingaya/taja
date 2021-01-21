<template>
<div>
  <div class="word-to-practice">
    {{ word }}
  </div>
  <div class="field">
    <div class="control">
      <input
        :value="input"
        @input="input = $event.target.value"
        @keydown.enter="enter"
        class="input is-large"
        :class="{
          'is-success': isInputRight,
          'is-danger': isInputWrong,
        }"
        type="text"
        placeholder="여기에 연습하세요.">
    </div>
  </div>
  <p>지금까지 <strong>{{ count }}</strong>번 연습했습니다.</p>
  <div class="field mt-6">
    <div class="control">
      <button
        @click="$emit('end', count)"
        class="button is-raised">
        연습 끝
      </button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { debounce, updateStorage } from '@/utils';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    word: {
      type: String,
      required: true,
    },
    prevCount: {
      type: Number,
      required: true,
    },
  },
  emits: ['end'],
  setup(prop) {
    const count = ref(+prop.prevCount);
    const input = ref('');
    const isInputRight = computed(() => prop.word === input.value.trim());

    const isEnterWrong = ref(false);
    const clearIsEnterWrong = debounce(() => { isEnterWrong.value = false; });

    const isInputWrong = computed(() => isEnterWrong.value
      || !prop.word.startsWith(input.value.slice(0, -1)));

    const enter = () => {
      if (isInputRight.value) {
        count.value += 1;
        input.value = '';
        updateStorage(prop.word, count.value);
      } else {
        isEnterWrong.value = true;
        clearIsEnterWrong();
      }
    };

    return {
      input, count, isInputWrong, isInputRight, enter,
    };
  },
});
</script>

<style scoped lang="scss">
.word-to-practice {
  font-size: 1.5rem;
  padding: 0.5em 0.75em;
}

input {
  transition: all 1s ease;
}

p {
  padding: 0 1.125rem;
}

button {
  margin-left: 1.125rem;
}
</style>
