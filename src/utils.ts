import { reactive, readonly } from 'vue';

export function debounce(f: Function, delay = 1000): Function {
  let timeoutHandler: number | undefined;
  return () => {
    clearTimeout(timeoutHandler);
    timeoutHandler = setTimeout(f, delay);
  };
}

const storage = reactive(Object.fromEntries(
  Array.from(localStorage, (_, i) => {
    const key = localStorage.key(i) as string;
    return [key, +(localStorage.getItem(key) ?? 0)] as [string, number];
  }).filter(([word, count]) => word.trim() !== ''
    && !Number.isNaN(count)),
));

export const readonlyStorage = readonly(storage);

export function updateStorage(word: string, count: number) {
  console.log(word, count);
  localStorage.setItem(word, `${count}`);
  storage[word] = count;
}
