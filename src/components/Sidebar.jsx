import React from 'react'
//Needed imports for this component
import {Link, NavLink} from 'react-router-dom';
//Icons from react-icons
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
//Components from Syncfusion for the sidebar menu
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//Importing the links of the menu from the dummy data 
import { links }  from '../data/dummy.jsx';
//Importing the state context from the ContextProvider
import { useStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {
  //To modify the state context of the menu
  const {
    activeMenu, 
    setActiveMenu,
    screenSize,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  //Styles for the links. Defining the active and normal links
  const activeLink = `flex items-center 
  gap-5 pl-4 pt-3 pb-2.5 rounded-lg 
  text-white bg-slate-700 text-md m-2`;
  const normalLink = `flex items-center 
  gap-5 pl-4 pt-3 pb-2.5 rounded-lg 
  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black 
  hover:bg-light-gray m-2`;
  return (
    <div className='ml-3 h-screen 
    md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10'>
        {activeMenu && (
          <>
            {/*Upper part of the menu sidebar */}

            <div className='flex justify-between items-center'>
              {/*Logo and link to the main page. Closing sidebar when clicked */}
              <Link to="/" 
              onClick={() => 
                handleCloseSideBar
              }
              className='items-center gap-3 ml-3 mt-4 flex text-xl
              font-extrabold tracking-tight dark:text-white text-slate-900'>
                <SiShopware /><span>Shoppy</span>
              </Link>
              {/*Closing button for the menu */}
              <TooltipComponent content='Menu' 
                position='BottomCenter'>
                <button type="button"  
                  className='md:hidden text-xl rounded-full p-3 
                  hover:bg-light mt-4  block'
                  onClick={() =>  setActiveMenu(!activeMenu)}>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>

            {/*Lower part of the menu sidebar: lists & links */}

            <div className="mt-100">
            <ul className='mt-6'>

              {/*Mapping each item having links from the dummy data. Ej. Pages, charts */}
              {links.map((item) => (
                <div key={item.title}>
                  <p className='text-gray-400 m-3'>
                    {item.title}
                  </p>

              {/*Mapping the sublinks from the dummy data. Ej. Orders, Calendar*/}
                  
                  {item.links.map((sublink) => (
                    <li key={sublink.title}>
                      <NavLink to={`/${sublink.name}`} 
                        className={({ isActive }) => 
                        isActive ? activeLink : normalLink}
                       
                        onClick={() => handleCloseSideBar()}>
                        {sublink.icon}
                        <span className="capitalize">
                          {sublink.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
            </div>

          </>
          )}
    </div>
  )
}

export default Sidebar