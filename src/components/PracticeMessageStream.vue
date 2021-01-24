<template>
<div class="messages-container">
  <article v-for="i in 10" :key="i" class="message is-success">
    <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
        <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
        Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
        mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </div>
  </article>
  <p class="all-done has-text-centered">
    모든 메시지를 확인하셨습니다.
  </p>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.messages-container {
  height: calc(100vh - 104px);
  border-radius: 1rem;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  .message {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    scroll-snap-align: start;
  }
}
</style>
