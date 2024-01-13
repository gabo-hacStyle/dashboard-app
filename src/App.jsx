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

function App() {
  const activeMenu = true;

  return (
    <>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent style={{backgroundColor: 'blue'}} content="Settings" position="Top" >
              <button>
                <FiSettings className="text-3xl text-gray-400 settings" />
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
            } transition-all duration-300 ease-in-out dark:bg-main-bg
            min-h-screen w-full bg-main-bg`
          }>
            <div className="fixed md:static bg main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
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
              <Route path='/linea' element={<Line />} />
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
      </Router>

    </>
  )
}

export default App
