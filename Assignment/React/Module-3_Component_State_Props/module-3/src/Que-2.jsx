import React from 'react'
import {Link} from 'react-router-dom'

export default function Que2() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>2. What is NPM in React Js? </h1>
        </div>

        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
            &#10149; The command npm is used to download JavaScript packages from Node Package Manager. <br />
            &#10149; Node package manager it is a dependencies manager of node js without it we can not create an new app inside of react js.  <br />
            &#10149; Example:  npm create-react-app app-name

            </p>

            <div className="flex justify-between my-10 ">
              <Link to="/que-1">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-3">
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
