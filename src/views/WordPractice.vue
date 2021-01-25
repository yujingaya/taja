<template>
<Navbar/>
<div class="practice">
  <div class="container">
    <div class="columns is-gapless">
      <div class="column is-8">
        <div class="hero is-fullheight-with-navbar">
          <div class="hero-body">
            <Practice :word="word" @next="next()"/>
          </div>
        </div>
      </div>
      <div class="column">
        <PracticeMessageStream v-if="false"/>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Practice from '@/components/Practice.vue';
import PracticeMessageStream from '@/components/PracticeMessageStream.vue';
import { ref } from 'vue';
import { classTitleToWords } from '@/classes';

export default {
  components: { Navbar, Practice, PracticeMessageStream },
  setup() {
    const route = useRoute();

    function randomWord() {
      const words = classTitleToWords[route.name?.toString() ?? ''] ?? [];
      return words[Math.floor(Math.random() * words.length)];
    }

    const word = ref(randomWord());

    const next = () => {
      let newWord = randomWord();
      while (newWord === word.value) {
        newWord = randomWord();
      }

      word.value = newWord;
    };

    return { word, next };
  },
};
</script>

<style lang="scss" scoped>
.hero .container {
  padding-bottom: 50vh;
}
</style>
