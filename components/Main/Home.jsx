import React from 'react'
import Header from "../Menu/Header"
import Body from "./Body"
import Footer from "../Menu/Footer"
import TopBar from '../Menu/TopBar'


export default function Home() {
  return ( 
    <section className='homePage'>
      {/* <TopBar /> */}
      <Header />
      <Body />
      <Footer />
    </section>
  )
}
