import { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import axios from "axios";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import DonutChart from "../components/DonutChart";
import ColumnChart from "../components/columnChart";
import ShowTable from "./Table";

const Dashboard = () => {

    const [sectorCount, setSectorCount] = useState([]);
    const [regionCount, setRegionCount] = useState([]);
    const [countryCount, setCountryCount] = useState([]);
    const [allData, setAllData] = useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/sector/sectorCount`)
            .then((data)=>{
                if(data.data?.status){
                    setSectorCount(data.data?.sectorCount);
                }
            })
        
        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/sector/regionCount`)
            .then((data)=>{
                if(data.data?.status){
                    setRegionCount(data.data?.regionCount);
                }
            })

        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/sector/countryCount`)
            .then((data)=>{
                if(data.data?.status){
                    setCountryCount(data.data?.countryCount);
                }
            })

        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/sector/fetchData`)
            .then((data)=>{
                if(data.data?.status){
                    setAllData(data.data?.allData);
                }
            })

    }, []);

    return (
        <div className="">
            <div style={{"margin": "50px"}} className="flex justify-between w-[100%]">
                <h1 className="text-left text-gray-700 font-semibold">Sector: </h1>
                <div style={{"margin": "20px"}} id="sector-pie-chart" className="w-[40%]">
                    {/* <PieChart data={sectorCount} outerRadius={200} innerRadius={0} /> */}
                    <DonutChart data={sectorCount} />
                </div>
                <div style={{"margin": "120px"}} id="sector-bar-chart" className="w-[40%]">
                    <BarChart data={sectorCount} />
                </div>
            </div>

            <div style={{"margin": "50px"}} className="flex justify-between w-[100%]">
                <h1 className="text-left text-gray-700 font-semibold">Region: </h1>
                <div style={{"margin": "120px"}} id="sector-bar-chart" className="w-[40%]">
                    <LineChart data={regionCount} />
                </div>
            </div>

            <div style={{"margin": "50px"}} className="flex justify-between w-[100%]">
                <h1 className="text-left text-gray-700 font-semibold">Country: </h1>
                <div style={{"margin": "120px"}} id="sector-bar-chart" className="w-[40%]">
                    <ColumnChart data={countryCount} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;