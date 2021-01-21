<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <Choose
            v-if="state.kind === 'choose'"
            @choose="chooseWord"/>
          <Practice
            v-else-if="state.kind === 'practice'"
            :word="state.word"
            :prev-count="wordsCounter[state.word] ?? 0"
            @end="endPractice"/>
        </div>
      </div>
    </section>
    <div class="container mt-6 mb-6">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control" v-for="word in Object.keys(wordsCounter)" :key="word">
          <div
            @click="chooseWord(word)"
            class="tags has-addons are-medium">
            <span class="tag is-info">{{ word }}</span>
            <span class="tag">{{ wordsCounter[word] }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-6">
      <p>
        Made by <a href="https://twitter.com/yujin_gaya">Yujin</a> with ❤️
      </p>
      <p>
        Since 2021
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import Choose from '@/components/Choose.vue';
import Practice from '@/components/Practice.vue';
import { readonlyStorage, updateStorage } from '@/utils';

type Choose = {
  kind: 'choose';
}

type Practice = {
  kind: 'practice';
  word: string;
  counter: number;
}

type State = Choose | Practice;

export default defineComponent({
  name: 'App',
  components: { Choose, Practice },
  setup() {
    const choose: Choose = { kind: 'choose' };
    const state: Ref<State> = ref(choose);

    const wordsCounter = readonlyStorage;

    const chooseWord = (word: string) => {
      state.value = {
        kind: 'practice',
        word,
        counter: +(wordsCounter[word] ?? 0),
      };
    };

    const endPractice = (count: number) => {
      if (state.value.kind === 'practice') {
        const { word } = state.value;
        updateStorage(word, count);
      }

      state.value = choose;
    };

    return {
      state, wordsCounter, chooseWord, endPractice,
    };
  },
});
</script>

<style lang="scss">
@import 'bulma/bulma.sass';

body {
  font-family: sans-serif;
}

.control {
  max-width: 40em;
}

.button.is-raised {
  background: #f8f8f8 linear-gradient(transparent, rgba(0, 0, 0, 0.05));
  box-shadow:
    0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset,
    0px -0.3em 0px 0px rgba(34, 36, 38, 0.15) inset;
  padding: 1em 1em 1.25em;
}
</style>
