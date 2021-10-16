var ctx = document.getElementById('myChart').getContext('2d');
var earningCtx = document.getElementById('earningChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Shopee','Tiki','Lazada'],
        datasets: [{
            label: 'Traffic Source',
            data: [2100, 2400, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }]
    },
    options: {
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Traffic Source'
            }
        }
    }
});

var earningChart = new Chart(earningCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
         'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earning In Month',
            data: [1200, 1900, 3000, 5400, 2100, 3500, 4100, 7200, 6800, 5300, 8000, 6900],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Earning By Month'
            },
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
});

// window.addEventListener('resize', function(){
//     console.log('--Window resized--');
//     myChart.resize();
//     earningChart.resize();
// });

