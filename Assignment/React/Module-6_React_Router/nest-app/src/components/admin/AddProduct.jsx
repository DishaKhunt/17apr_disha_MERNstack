import React,{useState, useRef, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { MdLibraryAdd , MdOutlineAddPhotoAlternate,MdOutlineDescription  } from "react-icons/md";
import { GoMultiSelect } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";
import { RiPriceTagFill } from "react-icons/ri";

export default function AddProduct() {

    
    const [data, setData] = useState("");

    const category = useRef("");
    const subCategoryName = useRef("");
    const productName = useRef("");
    const productDescription = useRef("");
    const productNewPrice = useRef("");
    const productPrice = useRef("");
    const productPhoto = useRef("");
    const date = useRef("");

    const AddProductHandeler = ((e)=>{
        e.preventDefault();

            var insert={
                category:category.current.value,
                subCategoryName:subCategoryName.current.value,
                productName:productName.current.value,
                productDescription:productDescription.current.value,
                productPrice:productPrice.current.value,
                productNewPrice:productNewPrice.current.value,
                productPhoto:productPhoto.current.value,
                date:date.current.value
            }

            axios.post(`http://localhost:8000/products`,insert).then(()=>{
                
                Swal.fire({
                title: "Thanks",
                text: "Thanks your product addedd successfully",
                icon: "success"
                });

            });
        e.target.reset();
    })
  return (
    <div>
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <AdminHeader />
                <div>
                    <h1 className='p-10 font-serif text-3xl font-bold text-center'>Add Sub Category</h1>

                    
                    <form className="max-w-2xl mx-auto" onSubmit={AddProductHandeler}>
                        <div className='mt-3'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Select Category:</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                    <GoMultiSelect />
                                </span>
                               <select name="" id="" ref={category} className='rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5 '>
                                    <option value="">Select the Category</option>
                                    <option value="Milks and Dairies">Milks and Dairies</option>
                                    <option value="Fresh Fruits">Fresh Fruits</option>
                                    <option value="Clothing & beauty">Clothing & beauty</option>
                                    <option value="Pet Foods & Toy">Pet Foods & Toy</option>
                                    <option value="Baking material">Baking material</option>
                                    <option value="Fresh Seafood">Fresh Seafood</option>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Wines & Drinks">Wines & Drinks</option>
                                    <option value="Bread and Juice">Bread and Juice</option>
                               </select>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">SubCategory Name :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                    <MdLibraryAdd />
                                </span>
                                <input type="text" ref={subCategoryName} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the subcategory name"/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Product Name :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                    <AiOutlineProduct />
                                </span>
                                <input type="text" ref={productName} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the Product name"/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Product Description :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <MdOutlineDescription />
                                </span>
                                <input type="text" ref={productDescription} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the Product Description"/>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Product Price :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <IoPricetags />
                                </span>
                                <input type="text" ref={productPrice} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the Product Description"/>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Product New Price :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <RiPriceTagFill />
                                </span>
                                <input type="text" ref={productNewPrice} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the Product Description"/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Product Photo :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <MdOutlineAddPhotoAlternate />
                                </span>
                                <input type="text" ref={productPhoto} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the Product Photo"/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Category Add Date:</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <BsCalendarDate  />
                                </span>
                                <input type="date" ref={date} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the date"/>
                            </div>
                        </div>

                        <button type="submit" className="text-white bg-gradient-to-r mt-5 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"><i className="text-xl bi bi-cloud-plus me-3"></i> ADD PRODUCT</button>
                        
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}
