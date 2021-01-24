import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import WordPractice from '@/views/WordPractice.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: encodeURI('/제자리-단어-연습'),
    name: '제자리 단어 연습',
    component: WordPractice,
  },
  {
    path: encodeURI('/윗줄-자음-단어-연습'),
    name: '윗줄 자음 단어 연습',
    component: WordPractice,
  },
  {
    path: encodeURI('/아랫줄-자음-단어-연습'),
    name: '아랫줄 자음 단어 연습',
    component: WordPractice,
  },
  {
    path: encodeURI('/검지로-치는-모음-연습'),
    name: '검지로 치는 모음 연습',
    component: WordPractice,
  },
  {
    path: encodeURI('/나머지-모음-연습'),
    name: '나머지 모음 연습',
    component: WordPractice,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
