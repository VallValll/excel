import { ExcelComponent } from '../../core/ExcelComponent';
import { shoudResize } from './table.function';
import { resizeHandler } from './table.resize';
import { createTable } from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (shoudResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
