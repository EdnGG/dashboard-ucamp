import { fetchStudents, fetchBooks } from "./db.js";
import { chart } from "./chart.js";
import { tableStudents } from "./table.js";
import { postUser } from "./http-methods.js";

const students = await fetchStudents();
const books = await fetchBooks();

console.log("Students: ", students);

chart(students);
// chart();
tableStudents(students);
// tableStudents();

// Get info from the form
// const button = document.getElementById("submit-info");

document.getElementById("submit-info").addEventListener("click", (e) => {
  e.preventDefault();
  const data = {};
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const email = document.getElementById("email");
  const lastname = document.getElementById("lastname");
  if (
    name.value === "" ||
    age.value === "" ||
    email.value === "" ||
    lastname.value === ""
  ) {
    alert("Please fill all the fields");
    return;
  }
  data.name = name.value;
  data.age = age.value;
  data.email = email.value;
  data.lastname = lastname.value;
  console.log(data);
  postUser(data);
  // e.preventDefault();
  // tableStudents(data);
  // e.preventDefault();
});
