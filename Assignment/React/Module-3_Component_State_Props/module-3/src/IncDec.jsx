import React, { useState } from 'react'

export default function IncDec() {

    
        const [count, setCount] = useState(0);
      
        const increment = () => {
          setCount(prevCount => prevCount + 1);
        };
      
        const decrement = () => {
          setCount(prevCount => prevCount - 1);
        };
   
  return (
    <div>
        <div className='container w-5/12 p-10 mx-auto mt-10 rounded bg-slate-800'>
            <h1 className='text-3xl font-bold text-center'>Count: {count}</h1>

            <div className='mt-10 text-center'>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"  onClick={increment}>
                    <p className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Increment
                    </p> 
                </button>

                
                <button className=" ms-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"  onClick={decrement}>
                    <p className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Decrement
                    </p> 
                </button>
            </div>

            
    </div>
    </div>
  )
}
