import { renderCalendar } from "./renderCalendar";
import { monthChanger } from "./monthChanger";
import { addDepartmentTeams } from "./addDepartmentTeams";
import { addRowHeaderExpand } from "./expandEmployers";

let currentDate = new Date();
const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" }],
  },
  {
    name: "Designers",
    percentageOfAbsent: 0,
    members: [{ name: "Des_Team_User1" }, { name: "Des_Team_User2" }]
  }
];

renderCalendar(currentDate);
monthChanger();
addDepartmentTeams(currentDate);
addRowHeaderExpand();

export {
  departmentTeams
};
