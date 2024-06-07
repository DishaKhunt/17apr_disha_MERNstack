import React from 'react'

export default function ListView() {
  return (
    <div>
        <div className="container w-8/12 p-10 mx-auto bg-lime-400">
            <h1 className='mb-5 text-3xl text-center text-black'>The 'React Way to Render a List'</h1>
            <div className="container w-5/12 mx-auto">
                <ul className='text-xl font-bold list-decimal'>
                    <li className='m-3'>
                        <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'> USe Array.map</p>  
                    </li>
                    <li className='m-3'>
                         <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'> USe Array.mapNot for a loop</p>
                    </li>
                    <li className='m-3'>
                         <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'>Give each item a unique key</p>
                    </li>
                    <li className='m-3'>
                         <p className='w-full p-2 text-xl font-normal text-black bg-white rounded ms-5'>Avoid using  array index as the key</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
