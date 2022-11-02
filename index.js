import { fetchStudents, fetchBooks } from "./db.js";
import { chart } from "./chart.js";

const students = await fetchStudents();
const books = await fetchBooks();

// chart(students);
chart();

// console.log("Students: ", students);
// console.log("Books: ", books);
