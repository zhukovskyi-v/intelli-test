function myPieChart() {
    const ctx = document.getElementById('myPieChart')
    const myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'IntelliBoard  40%',
                'IntelliCart 10%',
                'InAttedance 32%',
                'AYS Onboard 50%',
                'AYS Evolve 50%',
            ],
            datasets: [
                {
                    data: [40, 10, 32, 50, 50],
                    backgroundColor: [
                        '#123ce1',
                        '#a8bdff',
                        '#ffb800',
                        '#64d60b',
                        '#ff7ada',
                    ],
                },
            ],
        },
        options: {
            cutoutPercentage: 80,
            responsive: false,
            legend: {
                display: false,
                position: 'right',
                align: 'middle',
                labels: {
                    fontSize: 11,
                },
            },
        },
    })
}
function myChart() {
    const densityCanvas = document.getElementById('myChart')

    Chart.defaults.global.defaultFontFamily = 'Segoe UI'
    Chart.defaults.global.defaultFontSize = 10

    const densityData = {
        label: '',
        data: [500, 350, 400, 333],
        backgroundColor: '#123ce1',
        borderWidth: 0,
        yAxisID: 'y-axis-density',
    }

    const gravityData = {
        label: '',
        data: [10.7, 11.9, 9.8, 5.7],
        backgroundColor: '#4f7afe',
        borderWidth: 0,
        yAxisID: 'y-axis-gravity',
    }

    const planetData = {
        labels: ['Blackboard Learn', 'Canvas', 'D2L', 'Moodle'],
        datasets: [densityData, gravityData],
    }

    const chartOptions = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false,
                    },
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                },
            ],
            yAxes: [
                {
                    id: 'y-axis-density',
                    display: false,
                },
                {
                    id: 'y-axis-gravity',
                    display: false,
                },
            ],
        },
    }

    const barChart = new Chart(densityCanvas, {
        type: 'bar',
        data: planetData,
        options: chartOptions,
    })
}
myChart()

myPieChart()
function headerMenu() {
    const burgerEl = document.querySelector('.header__burder')
    const headerEL = document.querySelector('.header')

    burgerEl.addEventListener('click', () => {
        headerEL.classList.toggle('header__active')
    })
}
headerMenu()
