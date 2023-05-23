import React,{useState} from 'react'
import {Navbar,} from "./components/index"
import {Routes, Route} from "react-router-dom"
import {easeInOut, motion} from 'framer-motion'
import {Landing} from './Pages/index'
import {ScrollToTop} from './components/index'
import './App.css';

const App = () => {

  const [vara,setVara]=useState(true);

  setTimeout(()=>{
    setVara(false);
  },10000)

  
  return (
    <div className='App'>

        <Navbar/>

        <motion.div className='landing-first-text'
          initial={{
            height:'43rem'
          }}
          animate={{
            height:'0vh'
          }}
          transition={{
            delay:3.5,
            duration:1,
            easings:easeInOut
          }}
        >
            <motion.h1 
              animate={{
                y:['0vh','0vh','0vh','-40vh'],
                opacity:[0,1,1,1]
              }}
              transition={{
                duration:4,
                times:[0, 0.25 , 0.875, 1],
                easings:["easeInOut","easeInOut","easeInOut"]
              }}  
            > 
              Savršeno zdravo
            </motion.h1>
        </motion.div>
        
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Landing prop={vara}/>}/>
          </Routes>
        </ScrollToTop>
    
    </div>
  )
}

export default App

