export function parse(value = '') {
  if (value.startsWith('=')) {
    try {
      // eslint-disable-next-line no-eval
      return eval(value.slice(1));
    } catch (error) {
      return value;
    }
  }
  return value;
}
