import { $ } from '../../core/dom';

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
    const $resizer = $(event.target); // ползунок
    const $parent = $resizer.closest('[data-type="resizable"]'); // родитель
    const coords = $parent.getCoords(); // получем координаты родителя
    const type = $resizer.data.resize; // тип ползунка
    const $sydeProp = type === 'col' ? 'bottom' : 'right';
    let value;

    $resizer.css({
      opacity: 1,
      [$sydeProp]: '-5000px',
    });

    if (type === 'col') {
      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;
        $resizer.css({ right: -delta + 'px' });
      };
    } else {
      document.onmousemove = (e) => {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;
        $resizer.css({ bottom: -delta + 'px' });
      };
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type === 'col') {
        $parent.css({ width: value + 'px' });
        $root
          .findAll(`[data-col="${$parent.data.col}"]`) // все колонки
          .forEach((el) => (el.style.width = value + 'px'));
      } else {
        $parent.css({ height: value + 'px' });
      }

      resolve({
        value,
        type,
        id: $parent.data[type],
      });

      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      });
    };
  });
}
