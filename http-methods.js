export const postUser = async (data) => {
  const response = await fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      age: data.age,
      email: data.email,
    }),
  });
};
