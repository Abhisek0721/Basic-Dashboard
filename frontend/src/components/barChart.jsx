import React from 'react';
import Chart from "react-apexcharts";

const BarChart = (props) => {
    const {
        data,
    } = props;

    const options = {
        chart: {
            id: "Sector"
        },
        xaxis: {
            categories: data.map((d)=> {
                if(d._id){
                    return d._id;
                }else{
                    return "Others"
                }
            })
        }
    }

    const series = [
        {
            name: "Count",
            data: data.map((d)=> d.count)
        }
    ]


    return (
        <div className='mt-96'>
            <Chart
                options={options}
                series={series}
                type="bar"
                width="700"
            />
        </div>
    );
}

export default BarChart;