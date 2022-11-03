import { fetchStudents, fetchBooks } from "./db.js";
import { chart } from "./chart.js";

const students = await fetchStudents();
const books = await fetchBooks();

console.log("Students: ", students);

chart(students);
// chart();
