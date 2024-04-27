const CODES = {
  A: 65,
  Z: 90,
};

// формируем строки
function createRow(index, content) {
  const resize = index
    ? '<div class="row-resize" data-resize="row"></div>'
    : '';
  return `
    <div class="row" data-type="resizable">
        <div class="row-info">
            ${index ? index : ''}
            ${resize}
        </div>
        <div class="row-data" data-row=${index}>${content}</div>
    </div>
    `;
}

// формируем столбцы с буквами
function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
        ${col}
        <div class="col-resize" data-resize="col"></div>
    </div>
    `;
}

// ячейки
function toCell(_, col) {
  return `
    <div class="cell" data-col="${col}" 
      contenteditable></div>
    `;
}

// генерируем буквы
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('');

  const cells = new Array(colsCount).fill('').map(toCell).join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
