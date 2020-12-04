import { dateFormatter } from "./utils";

export function renderCalendar(currentDate) {
  const outputCalendar = document.querySelector(".outputCalendar");
  let outputCalendarHTML = ``;
  let daysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const chosenMonth = document.querySelector(".chosenMonth");
  chosenMonth.innerHTML = `${
    dateFormatter.format(new Date(currentDate)).replace(",", "").split(" ")[1]
  } ${new Date(currentDate).getFullYear()}`;

  outputCalendarHTML += `<th class="vacation-table__button-container"><button class="vacation-table__button">+ Add Vacation </button></th>`;

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let chosenDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i,
    );
    const [dayName, , date] = dateFormatter
      .format(chosenDate)
      .replace(",", "")
      .split(" ");
    let isWeekend = dayName === "Sat" || dayName === "Sun";
    outputCalendarHTML += `<th class="outputItem ${isWeekend ? "weekend" : ""}">
        <span class="outputDay">${dayName.slice(0, -1)}</span> 
        <span class="outputDate">${date}</span>
        </th>`;
  }
  outputCalendarHTML += `<th class="outputItem outputSum">
          <span>Sum</span> 
        </th>`;
  outputCalendar.innerHTML = outputCalendarHTML;
}
