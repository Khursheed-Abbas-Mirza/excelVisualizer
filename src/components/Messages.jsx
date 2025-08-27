import React,{useContext} from 'react'
import { ExcelFileReaderContext } from '../Store/dataReader'
const Messages = () => {
    const context=useContext(ExcelFileReaderContext)
  return (
    <> 
    {context.showFilters &&

        <div>
        <span>Filter By Date</span>
        <input type='date' onChange={(e)=>context.filterByDate(e.target.value)}/><br/>
    </div>
    } 
    {context.msg.length>0? <div>
        
   
    <div className='mc'>
    {context.msg.map((ele,index)=>{
        return <div className='msg' key={index}>
            <p style={{fontSize:"18px"}}>SNO : {ele.SNo}</p>
            <p style={{fontSize:"18px"}}>Type :{ele.Type}</p>
            <p style={{fontSize:"18px"}}>Date : {ele.Date}</p>
            <a href={ele.SourceLink}>Go To</a>
        </div>
    })}
    
    </div>
     </div>:<div>
        <p>Please upload a Valid sheet</p></div>}
    </>
  )
}

export default Messages

