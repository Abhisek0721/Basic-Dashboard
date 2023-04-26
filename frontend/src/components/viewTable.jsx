import ReactTable from "react-table";


const ShowDataTable = ()=>{
    return (
        <>
        <ReactTable  
            data={data}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  
        /> 
        </>
    );
}

export default ShowDataTable;