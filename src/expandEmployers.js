const vacationTable = document.querySelector('.vacation-table');

const handleExpand = function(event) {
  const target = event.target.closest('.row-info__arrow');
  if(target == null) return;

  const rowHeader = event.target.closest('.outputTeamRow');
  if(rowHeader.dataset.rowType === 'frontend-header') {
    toggleEmployersVisability('frontend-item');
  }else if(rowHeader.dataset.rowType === 'design-header') {
    toggleEmployersVisability('design-item');
  }
};

const toggleEmployersVisability = function(rowType) {
  const rowsToToggle = document.querySelectorAll(`.outputTeamRow[data-row-type="${rowType}"]`)
  for(let row of rowsToToggle) {
    row.classList.toggle('outputTeamRow_display_none');
  }
};

const addRowHeaderExpand = function() {
  vacationTable.addEventListener('click', handleExpand);
}

export {
  addRowHeaderExpand
}