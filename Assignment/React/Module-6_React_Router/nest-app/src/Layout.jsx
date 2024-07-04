import React, { useState, useEffect } from 'react';
import Header from './components/coustomer/Header'
import Carousel from './components/coustomer/Carousel'
import Content from './components/coustomer/Content'
import Footer from './components/coustomer/Footer'


export default function Layout() {

  const imageUrls = [
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-6.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-7.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-8.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-9.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-10.svg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = index => {
      if (index < imageUrls.length) {
        const img = new Image();
        img.src = imageUrls[index];
        img.onload = () => {
          setTimeout(() => {
            setCurrentImageIndex(index + 1);
          }, 100); 
        };
      } else {
        // All images loaded
        setLoading(false);
      }
    };
    
    // Load first image immediately
    loadImage(currentImageIndex);
    return () => { }; 
    
  }, [currentImageIndex]);

  return (
    <div className="">
    {loading ? (
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Loading image ${currentImageIndex + 1}`}
        />
      </div>
    ) : (
      <>
         <Header/>
        <Carousel/>
        <Content/>
        <Footer/>
      </>
    )}
  </div>
  )
}
