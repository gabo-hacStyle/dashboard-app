import React, { useState, useEffect } from 'react'
//import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {Navbar, Sidebar, Footer, ThemeSettings} from './components'
//Import all exports from src/pages/index.js
import {Ecommerce, Orders, Employees, Customers, Calendar, Stacked, Pyramid,
Kanban, Area, Bar, Pie, Financial, ColorMapping, ColorPicker, Editor, Line} from './pages'
import './App.css'

import { useStateContext } from './contexts/ContextProvider'

function App() {
  const {activeMenu, themeSettings, setThemeSettings, currentMode} = useStateContext();

  return (
    <div className={currentMode === "Dark" ? 'dark' : ''}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top" >
              <button 
                type='button'
                title='Settings'
                className='text-xl hover:drop-shadow-xl text-white
                bg-sky-950 rounded-full p-3'
                onClick={() => setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg" > 
               <Sidebar /> 
            </div>
          )}
          <div
            className={`${
              activeMenu ? 'md:ml-72' : 'flex-2'
            } transition-all duration-300 ease-in-out dark:bg-main-dark-bg
            min-h-screen w-full bg-main-bg`
          }>
            <div className="fixed md:static bg main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            {themeSettings && <ThemeSettings />}
            <div>
              <Routes>
                {/*Dashboard*/}
                <Route path='/' element={<Ecommerce />}></Route>
                <Route path='/ecommerce' element={<Ecommerce />}></Route>

                {/*Pages*/}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                
                {/*Apps*/}
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/*Charts*/}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>

    </div>
  )
}

export default App
