export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // dispatch, fire, trigger - как можно еще назвать метод emit
  // Уведомляем слушателей, если они есть
  // table.emit('table:select', {a: 1})

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    } else {
      this.listeners[event].forEach((listener) => {
        listener(...args);
      });
      return true;
    }
  }

  // on, listen
  // подписываемся на уведомления
  // либо добавляем нового слушателя
  // formula.subscribe('table:select', () => {})

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    // функция помогающая отписаться от данного события,
    // чтобы избежать утечек памяти
    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn
      );
    };
  }
}

// const emitter = new Emitter();
// emitter.subscribe('hello', (data) => console.log('sub', data));
// emitter.emit('hello', 33);
