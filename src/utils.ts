// eslint-disable-next-line import/prefer-default-export
export function debounce(f: Function, delay = 1000): Function {
  let timeoutHandler: number | undefined;
  return () => {
    clearTimeout(timeoutHandler);
    timeoutHandler = setTimeout(f, delay);
  };
}
