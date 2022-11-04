import { fetchStudents, fetchBooks } from "./db.js";
import { chart } from "./chart.js";
import { tableStudents } from "./table.js";

const students = await fetchStudents();
const books = await fetchBooks();

console.log("Students: ", students);

chart(students);
// chart();
// tableStudents(students);
tableStudents();
