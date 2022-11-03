const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export const chart = (data) => {
  const labels = data.map((item) => item.name);
  const values = data.map((item) => item.age);

  console.log("Labels: ", labels);
  console.log("Values: ", values);

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      // labels: ["blue", "red", "yellow", "green", "purple", "orange"],
      labels: labels,
      datasets: [
        {
          label: "Age of students",
          // data: [12, 19, 3, 5, 2, 3],
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 2)",
            "rgba(255, 99, 132, 3)",
            "rgba(255, 99, 132, 4)",
            "rgba(255, 99, 132, 5)",
            "rgba(255, 99, 132, 6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 2)",
            "rgba(255, 99, 132, 3)",
            "rgba(255, 99, 132, 4)",
            "rgba(255, 99, 132, 5)",
            "rgba(255, 99, 132, 6)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
