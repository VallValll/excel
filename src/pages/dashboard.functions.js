import { storage } from '../core/utils';

function toHTML(key) {
  const page = storage(key);
  const id = key.split(':')[1];

  return `
        <li class="db__record">
            <a href="#excel/${id}">${page.title}</a>
            <span>
              ${new Date(page.openedDate).toLocaleDateString()}
              ${new Date(page.openedDate).toLocaleTimeString()}
            </span>
        </li>
    `;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (!key.includes('excel')) {
      continue;
    }

    keys.push(key);
  }

  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p>Пока что таблиц нет :(</p>`;
  }

  return `
      <div class="db__list-header">
          <span>Название</span>
          <span>Дата открытия</span>
      </div>
      <ul class="db__list">
          ${keys.map(toHTML).join('')}
      </ul>
  `;
}
