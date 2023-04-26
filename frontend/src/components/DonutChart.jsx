import React from 'react';
import Chart from "react-apexcharts";

const DonutChart = (props) => {
    const {
        data,
    } = props;

    const state = {
        options : {
            labels : data.map((d)=> {
                if(d._id){
                    return d._id;
                }else{
                    return "Others"
                }
            })
        },
        series : data.map((d)=> d.count)
    }


    return (
        <div className='mt-96'>
            <Chart 
                options={state.options} 
                series={state.series}
                labels={state.labels}
                type="donut" 
                width="500" 
            />
        </div>
    );
}

export default DonutChart;