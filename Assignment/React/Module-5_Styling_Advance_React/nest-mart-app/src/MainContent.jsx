import React from 'react'
import banner1 from './assets/images/banner-1.png'
import banner2 from './assets/images/banner-2.png'
import banner3 from './assets/images/banner-3.png'
import cate1 from './assets/images/cat-1.png'
import cate2 from './assets/images/cat-2.png'
import cate3 from './assets/images/cat-3.png'
import cate4 from './assets/images/cat-4.png'
import cate5 from './assets/images/cat-5.png'
import cate9 from './assets/images/cat-9.png'
import cate11 from './assets/images/cat-11.png'
import cate12 from './assets/images/cat-12.png'
import cate14 from './assets/images/cat-14.png'


export default function MainContent() {
  return (
    <div>
      <div className="container px-5 my-10">
        <h1 className='text-3xl font-bold'>Featured Categories</h1>

        <div className='flex gap-2 mt-5 flex-nowrap md:flex-wrap'>
       
              

          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-green-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate1} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Vegetables</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-red-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate2} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Strawberry</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-amber-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate3} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">snack</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-gray-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate4} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Black plum</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-green-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate5} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Custard apple</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-red-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate9} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Red apple</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-orange-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate11} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Peach</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-green-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate12} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Organic kiwi</h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>
          <div class="rounded-lg p-4 hover:shadow-lg hover:border-green-500 border bg-amber-100">
              <a href="#">
                  <img class=" rounded-t-lg" src={cate14} alt="product image" />
              </a>
              <div class="px-5 pb-5 text-center">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-center hover:text-green-400">Cofee & Tea </h5>
                      <span className=''>72 items</span>
                  </a>
              </div>
          </div>

          

        </div>
      </div>




      <div className="relative grid grid-cols-3 gap-4 px-5 my-10">
        <div className="relative">
          <img src={banner1} alt="" className='rounded-lg' />
          <h1 className='absolute left-0 w-8/12 px-10 py-5 text-2xl font-bold top-10'>Everyday Fresh & Clean with Our Products</h1>
          <button className='absolute left-0 p-1 px-2 mx-10 text-white bg-green-600 rounded bottom-20 btn hover:bg-amber-400 '>Show More</button> 
        </div>
        <div className="relative">
          <img src={banner2} alt="" className='rounded-lg' />
          <h1 className='absolute left-0 w-8/12 px-10 py-5 text-2xl font-bold top-10'>Make your Breakfast Healthy and Easy</h1>
          <button className='absolute left-0 p-1 px-2 mx-10 text-white bg-green-600 rounded bottom-20 btn hover:bg-amber-400 '>Show More</button> 
        </div>
        <div className="relative">
          <img src={banner3} alt="" className='rounded-lg' />
          <h1 className='absolute left-0 w-8/12 px-10 py-5 text-2xl font-bold top-10'>The best Organic Products Online</h1>
          <button className='absolute left-0 p-1 px-2 mx-10 text-white bg-green-600 rounded bottom-20 btn hover:bg-amber-400 '>Show More</button> 
        </div>
      </div>
    </div>
  )
}
