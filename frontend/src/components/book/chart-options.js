import * as dayjs from "dayjs"

export const makeChartOptions = (index, chartData) => {
    const options = {
        chart: {
            type: "line",
        },
        title: {
            text: null,
        },
        xAxis: {
            categories: chartData?.map((item) => dayjs(item.modifiedAt).format("lll")),
        },
        yAxis: {
            labels: {
                
                format: index === 1 ? "${value}" : null,
            },
            title: {
                text: index === 1 ? "Price" : "Quantity",
            },
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                showInLegend: false,
                name: index === 1 ? "Price" : "Quantity",
                data: chartData?.map((item) => (index === 1 ? Number(item.price) : Number(item.quantity))),
           
                format: index === 1 ? "${value}" : null, //eslint - disabled
            },
        ],
    }

    return options
}
