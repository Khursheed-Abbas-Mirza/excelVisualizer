import { createContext ,useState} from "react";

import * as Excel from "xlsx";
export const ExcelFileReaderContext=createContext();
const FileData=(props)=>{
    const [rows,setRows]=useState([]);
    const [msg,setmsg]=useState(rows);
    const [loading,setloading]=useState(false)
    const [showFilters,setFilters]=useState(false);
    
    const getFileUrl=(url)=>{
    const regex = /\/d\/([a-zA-Z0-9-_]+)/; 
    const match = url.match(regex);
    if (!match) throw new Error("Invalid Google Sheet link");
    const fileId = match[1];
    return `https://docs.google.com/spreadsheets/d/${fileId}/export?format=xlsx`;
    }
    const readFile=async(url)=>{
        setloading(true)
        const fileurl=getFileUrl(url);
        const file=await fetch(fileurl);
        const res=await file.arrayBuffer();
        const data=Excel.read(res,{type:"array"})
        const data2=Excel.utils.sheet_to_json(data.Sheets[data.SheetNames[0]],{dateNF: 'yyyy-mm-dd',raw:false})
        setRows(data2);
        setmsg(data2);
        setFilters(true);
        setloading(false);
       
    }
    const filterByDate=(date)=>{
        setloading(true)
        alert(date)
        console.log(rows)
        const filter=rows.filter((row)=>row.Date==date)
        console.log(filter)
        setmsg(filter)
        setFilters(true)
        setloading(false)
    }
    return <ExcelFileReaderContext.Provider value={{readFile,msg,filterByDate,showFilters,loading}}>
        {props.children}
    </ExcelFileReaderContext.Provider>
}
export default FileData