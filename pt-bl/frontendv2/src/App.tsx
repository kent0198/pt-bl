import React from "react"
import {Route, Routes, useLocation} from "react-router-dom"
import  Index  from "../src/pages/index"
import { AppHeader } from "./components/AppHeader"
import FactoryMethodPage from './pages/creational/FactoryPage'
import { designPaternsData } from "./data"

function App() {
  
  const location=useLocation()
  return (
      <React.Fragment>
        <AppHeader>NodeJS Design Pattern</AppHeader>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index/>}/>
            <Route path="/factory-method" element={<FactoryMethodPage info={designPaternsData.creational[0]}/>}/>
            
        </Routes>
      </React.Fragment>
  )
}

export default App
