import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'



function App() {


  return (
 <div>
  <NavBar/>
  <Banner/>
  <RowPost/>
 </div>
  )
}

export default App
