<template>
<div class="keyboard"
  :style="{
    height: `${wholeHeight * sizeFactor}px`,
    width: `${wholeWidth * sizeFactor}px`
  }">
  <div class="row"
    v-for="(_, i) in 5"
    :key="i">
    <Key class="key"
      v-for="(width, j) in row(i)"
      :key="`${i}-${j}`"
      :isHighlighted="keys.includes(keyOfIndex(i, j))"
      :character="sizeFactor > 3 && keys.includes(keyOfIndex(i, j)) ? keyOfIndex(i, j) : null"
      :style="{
        top: `${top(i) * sizeFactor}px`,
        left: `${left(i, j) * sizeFactor}px`,
        height: `${height * sizeFactor}px`,
        width: `${width * sizeFactor}px`,
        'border-bottom-width': `${sizeFactor / 2}px`,
        'border-radius': `${sizeFactor}px`,
      }"/>
  </div>
</div>
</template>

<script>
import Key from '@/components/Key.vue';

const MARGIN = 1;
const HEIGHT = 7;
const WIDTH = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9],
  [9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [12, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12],
  [16, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16],
  [10, 10, 10, 47, 10, 10, 10],
];

const KEYS = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '[', ']', '\\'],
  ['capslock', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', ';', '\'', 'enter'],
  ['shift-left', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', ',', '.', '/', 'shift-right'],
  ['ctrl-left', 'opt-left', 'cmd-left', 'space', 'cmd-right', 'opt-right', 'ctrl-right'],
];

export default {
  props: {
    keys: Array,
    sizeFactor: {
      type: Number,
      default: 2,
    },
  },
  components: { Key },
  setup() {
    const top = (i) => i * (HEIGHT + MARGIN);
    const left = (i, j) => WIDTH[i]
      .slice(0, j)
      .reduce((a, b) => a + b, 0)
      + j * MARGIN;
    const row = (i) => WIDTH[i];
    const wholeWidth = left(0, 15) - MARGIN;
    const wholeHeight = top(5) - MARGIN;
    const keyOfIndex = (i, j) => KEYS[i][j];

    return {
      top,
      left,
      row,
      wholeWidth,
      wholeHeight,
      keyOfIndex,
      height: HEIGHT,
    };
  },
};
</script>

<style lang="scss" scoped>
.keyboard {
  position: relative;
  .key {
    position: absolute;
  }
}
</style>
