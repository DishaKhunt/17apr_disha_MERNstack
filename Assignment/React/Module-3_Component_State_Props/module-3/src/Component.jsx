import React,{useState} from 'react'

export default function Component() {

      // destructuring 
      const[name,setName]=useState([
        "Isha","Disha","Manshi"
    ])

    const updname=()=>{

        const newname=["Harsh","Miraj","Viraj"];
        setName(newname);
    }
  return (
    <div>
        <div className="container w-7/12 mx-auto mt-10 text-center">

        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"  onClick={updname}>Change Name</button>
      
            <ul className='mt-10 text-3xl'>
            {name.map((name,index)=>{
                 return ( 
                
                <li key={index}>{name}</li>
            
                 )
               })}
            </ul>
        </div>
       
    </div>
  )
}
