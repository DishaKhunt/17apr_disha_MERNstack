import React from 'react'
import {Link} from 'react-router-dom'

export default function Que1() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>1. What is React Js?</h1>
        </div>

        <div className="container w-8/12 mx-auto mt-10">
            <p className='text-2xl'>
            &#10149; React js is an library of javascript. <br />
            &#10149; React js is used to make a SPA applications. <br />
            &#10149; SPA stands for single page applications. <br />
            &#10149; React is used as library so it is follow life cycle: <br />
             <ul className='font-bold ms-10 ps-5'>
              <li>1. initializations</li>
              <li>2. mounting</li>
              <li>3. updatting</li>
              <li>4. unmountingt</li>
             </ul> 
             &#10149; React js is used to create any web application or website ui. <br />
             &#10149; React js is best for calling api. <br />
             &#10149; React is used to load an content without page refresh. <br />
             &#10149; React js is components based. <br />
             &#10149; React js is used re-usables components. <br />
             &#10149; React make a large web application just like linkdin , twitter , whatsapp, netflix , instagram , snapchat etc.

            </p>

            <div className="flex justify-end my-10 ">
            <Link to="/que-2">
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
