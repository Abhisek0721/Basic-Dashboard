import Sector from "../models/sectorModel.js";
import allSectorList from "../constants/allSectorsList.js";

export default class SectorCtrl {
    //API : /api/v1/sector/sectorCount
    //Method : GET
    //Access : Public
    //Description : fetch sector count data for different sectors
    sectorCount = async (req, res)=>{
        try {
            let sectorCount = await Sector.aggregate([
                { $group: { _id : "$sector", count: { $sum: 1 } } },
                { $project: { _id: 1, count: 1 } }
            ]);

            return res.status(200).json({
                "status": true,
                "sectorCount": sectorCount
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                "status": false,
                "message": "Techincal Server Error!"
            });
        }
    }

    //API : /api/v1/sector/regionCount
    //Method : GET
    //Access : Public
    //Description : fetch sector count data for different region
    regionCount = async (req, res)=>{
        try {
            let regionCount = await Sector.aggregate([
                { $group: { _id : "$region", count: { $sum: 1 } } },
                { $project: { _id: 1, count: 1 } }
            ]);

            return res.status(200).json({
                "status": true,
                "regionCount": regionCount
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                "status": false,
                "message": "Techincal Server Error!"
            });
        }
    }

    //API : /api/v1/sector/countryCount
    //Method : GET
    //Access : Public
    //Description : fetch sector count data for different country
    countryCount = async (req, res)=>{
        try {
            let countryCount = await Sector.aggregate([
                { $group: { _id : "$country", count: { $sum: 1 } } },
                { $project: { _id: 1, count: 1 } }
            ]);

            return res.status(200).json({
                "status": true,
                "countryCount": countryCount
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                "status": false,
                "message": "Techincal Server Error!"
            });
        }
    }


    //API : /api/v1/sector/fetchData?skipFrom={number}
    //Method : GET
    //Access : Public
    //Description : fetch data
    fetchData = async (req, res)=>{
        let skipFrom = req.query.skipFrom;
        try {
            let allData = await Sector.find(
                {},
                {},{
                    skip: skipFrom,
                    limit: 20
                }
            );
            return res.status(200).json({
                "status": true,
                "allData": allData
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(200).json({
                "status": false,
                "message": "Techincal Server Error!"
            });
        }
    }
}