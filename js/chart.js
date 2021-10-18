var chart1 = document.getElementById('my-chart').getContext('2d');
var chart2 = document.getElementById('my-chart2').getContext('2d');

// Chart 1
var myChart = new Chart(chart1, {
    type: 'polarArea',
    data: {
        labels: ['New commits', 'Pull requests', 'New reports'],
        datasets: [{
            label: 'Traffic',
            data: [1200, 1032, 886],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

// Chart 2
var myChart2 = new Chart(chart2, {
  type: 'line',
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
          label: 'Performance',
          data: [12, 29, 23, 25, 20, 30, 26, 29, 23, 25, 20, 30],
          backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 199, 132, 0.8)',
              'rgba(254, 262, 235, 0.8)',
              'rgba(255, 306, 86, 0.8)',
              'rgba(275, 292, 192, 0.8)',
              'rgba(253, 302, 255, 0.8)',
              'rgba(255, 259, 64, 0.8)'
          ]
      }]
  },
  options: {
    responsive: true
  }
});