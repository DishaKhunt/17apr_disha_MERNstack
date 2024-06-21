import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <>
    {/* header */}
         <div className='container p-5 font-bold bg-black d-flex'>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3 text-3xl text-white ms-5 ps-5">
                    <Link to="/"> 
                        <i class="bi bi-ui-radios-grid me-3"></i>
                        Task Manager APP
                    </Link>
                </div>
                <div className="">
                    <Link to="/add-task">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                TASK
                                
                            </span> 
                        </button>
                    </Link>

                    <Link to="/manage-task">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                MANAGE TASK
                            </span> 
                        </button>
                    </Link>

               
                 

                   

                </div>
            </div>
        </div>
   
    </>
   
  )
}
