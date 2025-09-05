import React from 'react'

 const Add = () => {
    const handleSubmit=async()=>{
    const url="https://script.google.com/macros/s/AKfycbzD1KYnE4y6zQImH3mABzAD9uD30W_qLbz-wlKDHfarIJfNOek8IVSsvY-HWGSKfcaonw/exec"
    const result=await  fetch(url, {
    method: "POST",
    body: JSON.stringify({
   
    Date: "2025-08-31",
    Type: "Hello ",
    Link:"mail@gmail.com"
  })
})
 const res=await result.json();
 console.log(res)
    }
  return (
    <div className='w-[80%] h-[300px] rounded-sm bg-[whitesmoke] mx-auto flex flex-col justify-evenly'>
        <div className='w-[80%]'>
           
            <input type='text' className='border-2 rounded-sm mx-[10%]' placeholder='Enter link type'/>
        </div>
        <div className='w-[80%]'>
        
            <input type='text' className='border-2 rounded-sm mx-[10%]' placeholder='paste your link here'/>
        </div>
        <button className='bg-blue-500 text-white rounded-sm cursor-pointer w-[100px] mx-auto' onClick={handleSubmit}>Add data</button>
    </div>
  )
}
export default Add