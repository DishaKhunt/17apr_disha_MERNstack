import React from 'react'
import {Link} from 'react-router-dom'

export default function Que7() {
  return (
    <div>
        <div className="container p-5 shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <h1 className='text-3xl font-bold text-center'>7. How to install React Js on Windows, Linux Operating System? How to install NPM and How to check version of NPM?</h1>
        </div>


        <div className="container w-8/12 mx-auto mt-10">

            {/* windows installtion */}
            <p className='text-2xl'>
              <h1 className='mb-5 font-bold underline'>1.  Steps to Install React JS on Windows:</h1> 
              <ul className='ms-10'>
                <li>
                  <p className="mb-4">Step 1: Install Node.js installer for Windows</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 2: Verify Node.js installation:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>node -v <br /> npm -v</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 3: Install Create React App: </p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm install -g create-react-app  </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 4: Create a New React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npx create-react-app my-app</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 5: Navigate into Your Application Directory:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>cd my-app </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 6: Start the React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm start </p>
                </li>
              </ul>
              
            </p>
            <hr className='my-10'/>

            {/* linux installtion */}
            <p className='text-2xl'>
              <h1 className='mb-5 font-bold underline'>2.  Steps to Install React JS on Linux:</h1> 
              <ul className='ms-10'>
                <li>
                  <p className="mb-4">Step 1: Install Node.js and npm:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>sudo apt install nodejs</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 2: Verify Node.js installation:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>node -v <br /> npm -v</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 3: Install Create React App: </p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>sudo npm install -g create-react-app  </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 4: Create a New React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npx create-react-app my-app</p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 5: Navigate into Your Application Directory:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>cd my-app </p>
                </li>
                <li>
                  <p className='mt-5 mb-4'>Step 6: Start the React Application:</p>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm start </p>
                </li>
              </ul>
              
            </p>
            <hr className='my-10'/>

            {/* NPM installtion */}
            <p className='text-2xl'>
              <h1 className='mb-5 font-bold underline'>3. Install NPM</h1> 
              <ul className='ms-10'>
                <li>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>sudo apt install npm <br />
                  npm install</p>
                </li>
              </ul>
            </p>
            <hr className='my-10'/>

            {/* NPM verion check*/}
            <p className='text-2xl'>
              <h1 className='mb-5 font-bold underline'>3.Check version of NPM</h1> 
              <ul className='ms-10'>
                <li>
                  <p className='w-full p-2 text-xl text-black bg-white rounded ms-5'>npm -v <br />
                  node -v</p>
                </li>
                
              </ul>
              
            </p>

            <div className="flex justify-between my-10 ">
              <Link to="/que-6">
                <button class="relative inline-flex w-40 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 w-40 inline-block py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Previews
                  </span> 
                </button>
              </Link>
              <Link to="/que-8">
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
