import { capitalize } from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root element');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
          `Method ${method} is not implemented in ${this.name || ''} Components`
        );
      }
      // то же самое, что и addEventListener
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
