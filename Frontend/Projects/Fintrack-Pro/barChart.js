const ctx = document.getElementById("myChart");

let chart;

function renderChart() {
  let arr = JSON.parse(localStorage.getItem("formData")) || [];

  let totalIncome = arr
    .filter((item) => item.type === "+")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  let totalExpense = arr
    .filter((item) => item.type === "-")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["Income VS Expense"],

      datasets: [
        {
          label: "Income",
          data: [totalIncome],
          backgroundColor: "#166534",
        },
        {
          label: "Expense",
          data: [totalExpense],
          backgroundColor: "#A20000",
        },
      ],
    },

    options: {
      responsive: true,

      plugins: {
    legend: {
        display: true,
        labels: {
            color: "#8AA3AF"  
        }
    }
},

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

renderChart();
