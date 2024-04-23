// Pure functions - функции которые не взаимодействуют с глобальными переменными
// работают только с входящими данными и возвращают какой-то результат

export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
