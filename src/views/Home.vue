<template>
<Navbar/>
<div class="category"
  v-for="{ title, classes } in CATEGORIES"
  :key="`category-${title}`">
  <div class="category-title">
    {{ title }}
  </div>
  <div class="category-list">
    <div class="class-container"
      v-for="{ title, keys, name } in classes"
      :key="`class-${title}`"
      >
      <Class
        class="class"
        @click="$router.push({ name })"
        :title="title"
        :keys="keys"
        :isReady="undefined !== name"
      />
    </div>
  </div>
</div>
<Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Class from '@/components/Class.vue';
import Footer from '@/components/Footer.vue';

const CATEGORIES = [
  {
    title: '기초',
    classes: [
      {
        title: '띄우기, 줄 바꾸기, 지우기',
        keys: ['space', 'enter', 'delete'],
      },
    ],
  },
  {
    title: '단어',
    classes: [
      {
        title: '제자리',
        keys: 'ㅁㄴㅇㄹㅎㅗㅓㅏㅣ'.split(''),
        name: '제자리 단어 연습',
      },
      {
        title: '윗줄 자음',
        keys: 'ㅂㅈㄷㄱㅅ'.split(''),
        name: '윗줄 자음 단어 연습',
      },
      {
        title: '아랫줄 자음',
        keys: 'ㅋㅌㅊㅍ'.split(''),
        name: '아랫줄 자음 단어 연습',
      },
      {
        title: '검지로 치는 모음',
        keys: 'ㅛㅕㅗㅓㅠㅜㅡ'.split(''),
        name: '검지로 치는 모음 연습',
      },
      {
        title: '나머지 모음',
        keys: 'ㅑㅏㅐㅣㅔ'.split(''),
        name: '나머지 모음 연습',
      },
    ],
  },
  {
    title: '문장',
    classes: [
      {
        title: '문장 부호',
        keys: '`190,./'.split(''),
      },
      {
        title: '문장',
        keys: [],
      },
      {
        title: '글',
        keys: [],
      },
    ],
  },
  {
    title: '게임',
    classes: [
      {
        title: '땅따먹기',
        keys: [],
      },
    ],
  },
];

export default {
  name: 'Home',
  components: { Navbar, Class, Footer },
  setup() {
    return {
      CATEGORIES,
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  margin-bottom: 1.5rem;
}

.category-title {
  margin-left: 1.5rem;
  padding: 8px 12px;
  font-weight: bold;
  color: #696969;
}

.category-list {
  display: flex;
  overflow: scroll;
  flex-flow: row nowrap;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  .class-container {
    scroll-snap-align: start;
    padding-left: 1.5rem;
    &:last-child {
      padding-right: 1.5rem;
    }
  }
}
</style>
