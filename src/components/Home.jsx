import React from 'react'
import { useState,useContext } from 'react'
import { ExcelFileReaderContext } from '../Store/dataReader';
export const Home = () => {
     const [count, setCount] = useState(0);
  const [url,setUrl]=useState('')
  const excel=useContext(ExcelFileReaderContext);
  const handleClick=()=>{
    console.log(excel)
    excel.readFile(url)
  }
  return (
    <>
    <p>Just Paste your file Link</p>
    <div  className='input-group'>

    <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} />
    
    <button onClick={handleClick}>Get UI</button>
    <br/>
   {excel.loading && <span className="loader"></span>}
    </div>
    </>
  )
}
