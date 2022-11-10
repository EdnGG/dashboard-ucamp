const URL_STUDENTS = "http://localhost:3000/students/";
// http://localhost:3000/students/?limit=10&offset=5
const URL_BOOKS = "http://localhost:3000/books";

export const getStudents = async () => {
  const response = await fetch(URL_STUDENTS);
  const data = await response.json();
  return data;
};

export const postUser = async (data) => {
  const response = await fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      lastName: data.lastName,
      age: data.age,
      email: data.email,
    }),
  });
};

export const fetchBooks = async () => {
  const response = await fetch(URL_BOOKS);
  const data = await response.json();
  return data;
};
