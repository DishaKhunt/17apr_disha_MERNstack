import React from 'react'
import {Link} from 'react-router-dom'

export default function Que5() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>5. What is Components in React Js?</h1>
        </div>

        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
            &#10149; Components is small peace of file i.e saved inside of react using .js or .jsx i.e called components. <br />
            &#10149; Components are reusables. <br />
            &#10149; Components are indepenedent and reusables. <br />
            &#10149; Components are reuse multiples time in any components. <br />
            &#10149; Components are two types:
              <ul className='ms-10'>
                <li className='font-bold'>1. Function based components </li>
                <li className='font-bold'>2. Class based components </li>
              </ul>
              <h3 className='mt-10 text-3xl font-bold'>1. Function based components:</h3>
              &#10149; Function based components are max used inside of react 18.2.0 version. <br />
              &#10149; Function based components are used a hooks. <br />
              &#10149; Hook is must be only suported in function based components.

              <h3 className='mt-5 text-3xl font-bold'>2. Class based components:</h3>
              &#10149;Class components are JavaScript ES6 classes that extend from React's Component class. <br />
              &#10149; Since class components predate hooks, they do not support hooks like useState, useEffect, etc. Hooks are only available in functional components. <br />

            </p>


            <div className="flex justify-between my-10 ">
              <Link to="/que-4">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-6">
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
