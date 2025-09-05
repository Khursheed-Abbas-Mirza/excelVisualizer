import React,{useContext,useEffect, useState} from 'react'
import { ExcelFileReaderContext } from '../Store/dataReader'
const Messages = () => {
    const context=useContext(ExcelFileReaderContext)
    const [date,setDate]=useState("");
    const apply=()=>{
      context.filterByDate(date)
    }
  return (
    <> 
    {context.showFilters &&

        <div className='m-5 flex gap-0.5 items-center'>
        <span className='text-blue-600'>Filter By Date : </span>
        <input type='date' onChange={(e)=>setDate(e.target.value)} value={date}/><br/>
        <button className='bg-blue-500 p-3 rounded-sm text-white w-auto cursor-pointer' onClick={apply}>Apply Filter</button>
    </div>
    } 
    {context.msg.length>0? <div>
        
   
    <div className='mc p-2 sm:p-0'>
    {context.msg.map((ele,index)=>{
        return <div className='msg' key={index}>
            <p style={{fontSize:"18px"}}>Id :{ele.Id}</p>
            <p style={{fontSize:"18px"}}>Time :{ele.Time}</p>
            <p style={{fontSize:"18px"}}>Type :{ele.Type}</p>
            <p style={{fontSize:"18px"}}>Date : {ele.Date}</p>
            <a href={ele.Link}>Go To</a>
        </div>
    })}
    
    </div>
     </div>:<div>
        <p className='text-center'>Change the Filter or Please upload a Valid sheet there is no data to see here</p></div>}
    </>
  )
}

export default Messages

