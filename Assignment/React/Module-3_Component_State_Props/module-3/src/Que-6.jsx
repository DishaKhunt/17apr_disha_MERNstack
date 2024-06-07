import React from 'react'
import {Link} from 'react-router-dom'

export default function Que6() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>6. What is Header and Content Components in React Js?</h1>
        </div>

        
        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
                <h3 className='font-bold'> 1. Header Component :</h3>
                <p>
                  &#10149;  The Header component typically contains elements that are displayed at the top of a web page or application. <br />
                  &#10149; It often includes branding elements, navigation menus, user authentication controls, or any other content that should persist across different pages or sections of the application.

                </p>

                <h3 className='mt-5 font-bold'>2. Content Component :</h3>
                <p>
                  &#10149; The Content component represents the main content area of a web page or application. It typically renders the dynamic content specific to the current page or section of the application. <br />
                  &#10149; The Content component may vary depending on the page or section it is rendering and may include text, images, forms, or other interactive elements.
                </p>
            </p>

            <div className="flex justify-between my-10 ">
              <Link to="/que-5">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-7">
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
