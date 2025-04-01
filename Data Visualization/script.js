// NYC Population data
const labels = [
    "East New York",
    "Bedford-Stuyvesant",
    "Flushing",
    "Washington Heights",
    "Flatbush",
    "Jamaica",
    "Harlem"
  ];
  
  const data = [183681, 157530, 155251, 151574, 136881, 131404, 116345];
  
  // Doughnut Chart
  const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
  new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
          labels: labels,
          datasets: [{
              label: "Population",
              data: data,
              backgroundColor: [
                  "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#B5EAD7"
              ]
          }]
      },
      options: {
          plugins: {
              title: {
                  display: true,
                  text: "NYC Neighborhood Populations (By Bassam Alhajjaji)"
              }
          }
      }
  });
  
  // Horizontal Bar Chart
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
      type: "bar",
      data: {
          labels: labels,
          datasets: [{
              label: "Population",
              data: data,
              backgroundColor: "#36A2EB"
          }]
      },
      options: {
          indexAxis: 'y',
          plugins: {
              title: {
                  display: true,
                  text: "NYC Neighborhoods by Population"
              }
          },
          scales: {
              x: {
                  beginAtZero: true
              }
          }
      }
  });  