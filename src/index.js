import { renderCalendar } from "./renderCalendar";
import { monthChanger } from "./monthChanger";

let currentDate = new Date();

renderCalendar(currentDate);
monthChanger();


const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" }],
  },
];
