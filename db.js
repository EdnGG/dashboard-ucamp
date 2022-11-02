const URL_STUDENTS = "http://localhost:3000/students";
const URL_BOOKS = "http://localhost:3000/books";

export const fetchStudents = async () => {
  const response = await fetch(URL_STUDENTS);
  const data = await response.json();
  // console.log("Students: ", data);
  return data;
};

export const fetchBooks = async () => {
  const response = await fetch(URL_BOOKS);
  const data = await response.json();
  // console.log("Books: ", data);
  return data;
};
