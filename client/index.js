import gaSendEvent from './components/core/ga-analytics';

let lastSortDirection = 'descending';
let direction = '';
const columnHeaders = document.querySelectorAll('#table_fees th');
Array.from(columnHeaders).forEach((element) => {
  element.addEventListener('click', () => {
    direction = element.getAttribute('aria-sort');
    if (!direction || direction === 'none') {
      direction = (lastSortDirection === 'descending' ? 'ascending' : 'descending');
    } else {
      direction = (direction === 'descending' ? 'ascending' : 'descending');
    }
    const columnName = element.innerText;

    gaSendEvent('tableSort', direction, columnName);
    lastSortDirection = direction;
  });
});
