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
      labels: labels,
      datasets: [
        {
          label: "Age of students",
          data: values,
          backgroundColor: [
            "rgba(92, 110, 236, 0.88)",
            "rgba(53, 65, 148, 0.88)",
            "rgba(142, 145, 160, 0.88)",
            "rgba(10, 182, 85, 0.88)",
            "rgba(212, 238, 28, 0.88)",
            "rgba(10, 11, 3, 0.88)",
          ],
          borderColor: [
            "rgba(92, 110, 236, 0.88)",
            "rgba(53, 65, 148, 0.88)",
            "rgba(142, 145, 160, 0.88)",
            "rgba(10, 182, 85, 0.88)",
            "rgba(212, 238, 28, 0.88)",
            "rgba(10, 11, 3, 0.88)",
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
