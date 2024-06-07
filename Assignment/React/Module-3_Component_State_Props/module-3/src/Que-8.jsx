import React from 'react'
import {Link} from 'react-router-dom'

export default function Que8() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>8. How to check version of React Js?</h1>
        </div>

        
        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
              &#10149; Check version of React js:
            <ul className='ms-10'>
              <li className='font-bold'>
                <p className="mb-4">Approach 1: Using the package.json file</p>
                <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npx create-react-app name_of_the_app</p>
              </li>
              <li className='font-bold'>
                <p className='mt-5 mb-4'>Approach 2: Using the command line</p>
                <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm view react version</p>
              </li>
              <li className='font-bold'>
                <p className='mt-5 mb-4'>Approach 3: Using the version property of default import from React</p>
                <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>import React from 'react'; <br />
                let a = React.version</p>
              </li>
            </ul>

            <h1 className='mt-5 text-2xl font-bold'>
                 &#10149;  We are currently using react version{" "}
                  {React.version}
              </h1>
              
            </p>

            <div className="flex justify-between my-10 ">
              <Link to="/que-7">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-9">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Next
                  </span> 
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}
