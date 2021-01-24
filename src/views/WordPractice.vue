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

const WORDS = {
  '제자리 단어 연습': [
    // ㅁㄴㅇㄹㅎㅗㅓㅏㅣ,
    '모란', '멀어', '마니아', '만남', '말랑말랑', '민머리', '밀',
    '노란', '너머', '남한', '나라', '언니',
    '오리', '외로이', '인망', '인라인', '완화',
    '로망', '로미오', '이러한', '라인',
    '환호', '허리', '한마디', '하나',
  ],
  '윗줄 자음 단어 연습': [
    // ㅂㅈㄷㄱㅅ
    '바보', '알밥', '마법', '보라돌이', '비바람',
    '조종', '절', '만족', '미리', '잔디', '지진',
    '다짐', '도리', '담담한', '디자이너', '더럽다', '닭',
    '간단', '일과', '과학', '긴밀', '기적', '고기',
    '속담', '산모', '모시', '서리', '성공',
  ],
  '아랫줄 자음 단어 연습': [
    // ㅋㅌㅊㅍ
    '조카', '커피', '콜라', '킬로미터', '리모컨', '키높이',
    '터미널', '토마토', '토론회', '탈락', '퇴임', '털털',
    '참외', '초파리', '취미', '치마', '밑창', '아침',
    '파티', '타피오카', '파마머리', '피아노', '파란만장',
  ],
  '검지로 치는 모음 연습': [
    // ㅛㅕㅠㅜㅡ
    '요물', '분뇨', '묘지', '음료', '미용', '효과',
    '남녀', '며느리', '영어', '영국', '현물', '명령',
    '유물', '뉴욕', '유명', '인류', '우유',
    '우물', '울림', '무리', '물론', '무늬',
    '의리', '이름', '하늘', '으르렁', '여름', '희망', '희귀',
  ],
  '나머지 모음 연습': [
    // ㅑㅐㅔ
    '야인시대', '양말', '향상', '냠냠', '그냥', '얌체', '모양', '얄밉다', '야학', '모략',
    '해마', '매일', '아내', '내노라하다', '애인', '노래', '아래', '오래',
    '메모', '멜라닌', '동네', '네모', '에너지', '레몬', '모레', '헤아리다', '헤매다',
  ],
};

export default {
  components: { Navbar, Practice, PracticeMessageStream },
  setup() {
    const route = useRoute();

    function randomWord() {
      const words = WORDS[route.name as keyof typeof WORDS];
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
