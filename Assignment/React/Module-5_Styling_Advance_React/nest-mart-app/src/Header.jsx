import React from 'react'
import logo from './assets/images/logo.svg'
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import category1 from './assets/images/category-1.svg'
import category2 from './assets/images/category-2.svg'
import category3 from './assets/images/category-3.svg'
import category4 from './assets/images/category-4.svg'
import category5 from './assets/images/category-5.svg'
import category6 from './assets/images/category-6.svg'
import category7 from './assets/images/category-7.svg'
import category8 from './assets/images/category-8.svg'
import category9 from './assets/images/category-9.svg'
import category10 from './assets/images/category-10.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Header() {
  return (
    <div>
        

        <nav className="bg-green-50">
            <div className="flex flex-wrap items-center justify-between px-10 py-5 mx-auto max-w-screen-2xl">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-14" alt="Logo" />
                </a>
                
                <form action="">
                    <input type="search" className='p-2 border border-green-500 rounded w-96 focus:outline-0' placeholder='Search Here' />
                </form>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="#" className="text-black hover:text-green-500"><i className="text-2xl bi bi-heart"></i><span>Wishlist</span> </a>
                    <a href="#" className="text-black hover:text-green-500"><i className="text-2xl bi bi-cart3"></i><span>Cart</span></a>
                    <a href="#" className="text-black hover:text-green-500"><i className="text-2xl bi bi-person"></i><span>Account</span></a>
                </div>
            </div>
        </nav>
        <nav className="shadow">
            <div className="px-10 py-3 mx-auto max-w-screen-2xl">
                
              

            <div className="flex items-center justify-between">

                {/* dropdown menu for  */}
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white-300 hover:bg-green-400">
                        <i class="bi bi-grid"></i>
                        Browes All Category
                        <ChevronDownIcon className="w-5 h-5 -mr-1 text-white" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute left-0 z-10 mt-2 w-[430px] text-sm origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-green-300 border">
                        <div className="flex py-1 mx-auto">
                            <ul className='p-5'>
                                <li className='flex items-center gap-3 p-2 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category1} alt="cate-1" className='h-8' />
                                    <span>Milk and Dairies</span>
                                </li>
                                <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category2} alt="cate-1" className='h-8' />
                                    <span>Clothing & beauty</span>
                                </li>
                                <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category3} alt="cate-1" className='h-8' />
                                    <span>Pet Foods & Toy</span>
                                </li>
                                <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category4} alt="cate-1" className='h-8' />
                                    <span>Baking material</span>
                                </li> <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category5} alt="cate-1" className='h-8' />
                                    <span>Fresh Fruit</span>
                                </li>
                            </ul>

                            <ul className='p-5'>
                                <li className='flex items-center gap-3 p-2 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category6} alt="cate-1" className='h-8' />
                                    <span>Wines & Drinks</span>
                                </li>
                                <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category7} alt="cate-1" className='h-8' />
                                    <span>Fresh Seafood</span>
                                </li>
                                <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category8} alt="cate-1" className='h-8' />
                                    <span>Fast food</span>
                                </li>
                                <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category9} alt="cate-1" className='h-8' />
                                    <span>Vegetables</span>
                                </li> <li className='flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                                    <img src={category10} alt="cate-1" className='h-8' />
                                    <span>Bread and Juice</span>
                                </li>
                            </ul>
                        
                        </div>
                        </MenuItems>
                    </Transition>
                </Menu>
                    
                    <ul className="flex flex-row mt-0 space-x-8 text-xl font-medium rtl:space-x-reverse">
                        <li>
                            <a href="#" className="text-gray-900 hover:text-green-500 "><i className="text-green-500 bi bi-fire"></i> Deals</a>
                        </li>
                        <li>
                            <a href="#" className="text-green-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 hover:text-green-500">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 hover:text-green-500">Shop</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 hover:text-green-500">Vendors</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 hover:text-green-500">Blogs</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 hover:text-green-500">Contect</a>
                        </li>
                    </ul>

                <div className='flex flex-col'>
                    <a href="#" className='text-2xl font-bold text-green-500'>
                        <i class="bi bi-headphones text-black text-3xl"></i> 1900-8888
                    </a>
                    <span>24/7 Supoort Center</span>
                
                </div>
                </div>
            </div>
        </nav>

    </div>
  )
}
