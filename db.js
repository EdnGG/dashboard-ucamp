const URL_STUDENTS = "http://localhost:3000/students/?limit=10&offset=0";
// http://localhost:3000/students/?limit=10&offset=5
const URL_BOOKS = "http://localhost:3000/books";

export const fetchStudents = async () => {
  const response = await fetch(URL_STUDENTS);
  const data = await response.json();
  return data;
};

export const fetchBooks = async () => {
  const response = await fetch(URL_BOOKS);
  const data = await response.json();
  return data;
};
