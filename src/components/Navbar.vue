<template>
<nav class="navbar is-fixed-top">
  <div class="navbar-brand">
    <div class="navbar-item">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <router-link to="/" custom v-slot="{ href, isExactActive }">
            <li :class="{ 'is-active': isExactActive }">
              <a :href="href">
                타자 연습
              </a>
            </li>
          </router-link>
          <router-link v-if="$route.path !== '/'" :to="$route.path" custom v-slot="{ href }">
            <li class="is-active">
              <a :href="href">
                {{ $route.name }}
              </a>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
    <router-link to="/"
      v-if="$route.path !== '/'"
      class="navbar-burger is-active">
      <span></span>
      <span></span>
      <span></span>
    </router-link>
  </div>
</nav>
</template>

<script>
export default {

};
</script>

<style>
html {
  padding-top: 52px;
}
</style>

<style lang="scss" scoped>
.navbar {
  font-weight: bold;
  padding: 0 0 0 1.5rem;

  .navbar-brand {
    width: 100%;

    .navbar-item {
      flex-grow: 0;
      flex-shrink: 0;
    }

    .navbar-burger.is-active {
      display: block;
      position: relative;
      margin-left: auto;
    }
  }
}
</style>
