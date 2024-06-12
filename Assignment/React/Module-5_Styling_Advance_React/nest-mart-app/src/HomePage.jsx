import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import MainContent from './MainContent'
import Footer from './Footer'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <MainContent/>
        <Footer/>
    </div>
  )
}
