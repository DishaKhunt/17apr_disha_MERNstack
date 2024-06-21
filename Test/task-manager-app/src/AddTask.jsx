import React,{useEffect, useState,useRef} from 'react'
import Header from './Header'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddTask() {
  // store the data

  const [data,setData] = useState();
    

  const taskName = useRef("");
  const description = useRef("");
  const date = useRef("");

  const AddTaskFormHandler= (e)=>{
      e.preventDefault();
      var insert = {
          taskName:taskName.current.value,
          description:description.current.value,
          date:date.current.value
      }

      axios.post(`http://localhost:8000/task`,insert)
      .then(()=>{
          Swal.fire({
              title: "Thanks",
              text: "Thanks your Task addedd successfully",
              icon: "success"
            });
      });

      e.target.reset();
  }
  
  return (
    <>
    <Header/>
    <div> 
        <div className="container py-20 mx-auto mt-10 bg-black w-75">
            <form className="max-w-screen-md mx-auto " onSubmit={AddTaskFormHandler}>
                {/* task name */}
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i class="bi bi-list-task"></i>
                    </span>
                    <input type="text" ref={taskName} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task"/>
                </div>

                {/* description */}
                <div className="flex mt-5">
                    <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i class="bi bi-list-task"></i>
                    </span>
                    <input type="text" ref={description} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task Description"/>
                </div>
                {/* date */}
                  <div className="flex mt-5">
                      <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <i class="bi bi-calendar-event-fill"></i>
                      </span>
                      <input type="date" ref={date} id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task"/>
                  </div>

                  <div className='mt-10'>
                    {/* add task btn */}
                    <button type="submit" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">ADD TASK</button>

                    {/* reset btn */}
                    <button type="reset" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">RESET</button>
                  </div>

                </form>
          
        </div>
    </div>
    </>
    
  )
}
