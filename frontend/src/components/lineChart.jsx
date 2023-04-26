import React from 'react';
import Chart from "react-apexcharts";

const LineChart = (props) => {
    const {
        data,
    } = props;

    const options = {
        chart: {
            id: "Region"
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
                type="line"
                width="950"
            />
        </div>
    );
}

export default LineChart;