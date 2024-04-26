import { ExcelComponent } from '../../core/ExcelComponent';
import { $ } from '../../core/dom';
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
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      console.log($parent.data);

      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right;
        const value = coords.width + delta;
        $parent.$el.style.width = `${value}px`;
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => el.style.width = value + 'px');
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
