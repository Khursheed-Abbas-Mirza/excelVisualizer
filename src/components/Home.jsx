import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import Messages from "./Messages.jsx";
import { ExcelFileReaderContext } from '../Store/dataReader';

export const Home = () => {
     
  const [url,setUrl]=useState('')
  const excel=useContext(ExcelFileReaderContext);
  const handleClick=()=>{
    console.log(excel)
    excel.readFile(url)
  }

  return (
    <>
    <p className='text-center'>Just Paste your file Link</p>
    <div  className='flex justify-center'>

    <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} className='border-[1px] border-black rounded-sm w-[180px] md:w-[400px]' />
    
    <button onClick={handleClick} className='bg-blue-500 text-white cursor-pointer m-1 rounded-sm p-3'>Get UI</button>
    <br/>
    </div>
   {excel.loading &&<div className=' flex justify-center items-center mt-10'> <div className="loader "></div></div>}
    <Messages/>
    </>
  )
}
