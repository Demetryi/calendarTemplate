import { renderCalendar } from "./renderCalendar";
import { addDepartmentTeams } from "./addDepartmentTeams";

export function monthChanger() {
  const arrowsParent = document.querySelector(".month-changer");

  let selectedDate = 0,
    reduceValue = 0;

  arrowsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.matches("span.left-arrow")) {
      reduceValue -= 1;
      monthReducer(reduceValue);
      renderCalendar(selectedDate);
      addDepartmentTeams(selectedDate);
    } else if (target && target.matches("span.right-arrow")) {
      reduceValue += 1;
      monthReducer(reduceValue);
      renderCalendar(selectedDate);
      addDepartmentTeams(selectedDate);
    }
  });

  function monthReducer(value = 0) {
    let reducer = 0;
    reducer += value;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + reducer;

    selectedDate = new Date(currentYear, currentMonth);
  }
  monthReducer();
}
