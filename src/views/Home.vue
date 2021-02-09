<template>
<Navbar/>
<div class="category"
  v-for="{ title, classes } in categories"
  :key="`category-${title}`">
  <div class="category-title">
    {{ title }}
  </div>
  <div class="category-list">
    <div class="class-container"
      v-for="{ title, keys, name, isReady } in classes"
      :key="`class-${title}`"
      >
      <Class
        class="class"
        @click="isReady && $router.push({ name })"
        :title="title"
        :keys="keys"
        :isReady="isReady"
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
import { categories } from '@/classes';

export default {
  name: 'Home',
  components: { Navbar, Class, Footer },
  setup() {
    return {
      categories,
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
