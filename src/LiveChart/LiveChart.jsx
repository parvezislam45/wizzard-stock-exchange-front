import  { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

const LiveChart = ({ ohlcData }) => {
    const [chartData, setChartData] = useState({
        series: [{
            data: ohlcData.map(item => ({
                x: new Date().getTime(), // you might want to pass the exact datetime if available
                y: [item.open, item.high, item.low, item.close]
            }))
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 350
            },
            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    useEffect(() => {
        setChartData(prevData => ({
            ...prevData,
            series: [{
                data: ohlcData.map(item => ({
                    x: new Date().getTime(),
                    y: [item.open, item.high, item.low, item.close]
                }))
            }]
        }));
    }, [ohlcData]);

    return (
        <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" height={350} />
        </div>
    );
}

export default LiveChart;
