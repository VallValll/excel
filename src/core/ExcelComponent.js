import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];

    this.prepare();
  }

  // настраиваем наш компонент до init
  prepare() {}

  // возвращает шаблон компонента
  toHTML() {
    return '';
  }

  // уведомляем слушателей про события event
  $emit(event, ...args) {
    const unsub = this.emitter.emit(event, ...args);
    this.unsubscribers.push(unsub);
  }

  // подписываемся на событие event
  $on(event, fn) {
    this.emitter.subscribe(event, fn);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // Сюда приходят изменения только по тем полям на которые мы подписались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  // инициализация компонента
  // добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }

  // удаляем компонент
  // удаляем DOM слушателей
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub); // ???
  }
}
