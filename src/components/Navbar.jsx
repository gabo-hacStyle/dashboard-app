import React, {useEffect} from 'react'
//Import of the icons of the navbar
import {AiOutlineMenu} from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import {BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import {MdKeyboardArrowDown } from 'react-icons/md'
//Import of the components from Syncfusion
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
//Import of the avatar image
import avatar from '../data/avatar.jpg'
//Import of some components to interact from navbar
import {Cart, Chat, Notification, UserProfile} from '.'
//Import of the state context from the ContextProvider
import { useStateContext } from '../contexts/ContextProvider'


//Generic component to all the buttons of the navbar
const NavButton = ({ customFunc, icon,
color, dotColor}) => (
    <TooltipComponent  position='BottomCenter'>
      <button type="button"
        style={{color: color}}
        className='relative text-xl rounded-full p-3 
        hover:bg-light-gray mr-3 block'
        onClick={customFunc}
      >
        <span style={{ background:dotColor }}
          className='absolute inline-flex rounded-full
          h-2 w-2 right-2 top-2'
        />
          {icon}
        
      </button>
    </TooltipComponent>
)



const Navbar = () => {
  //To modify the state context of the menu
  const {
    activeMenu, 
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== screenSize) {
        setScreenSize(window.innerWidth);
      }
    };
    if(screenSize <= 900){
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, [screenSize]);

 

  return (
    <div className='flex justify-between p-2
    md:mx-6 relative'>
      <NavButton title='Menu' 
      customFunc={() => setActiveMenu(!activeMenu)} 
      icon={<AiOutlineMenu/>} color='blue' />

      <div className="flex">

        <NavButton title='Chat'
        customFunc={() => handleClick('chat')}
        icon={<BsChatLeft/>} color='blue' 
        dotColor="#9f1145"/>

        <NavButton title='Cart'
        customFunc={() => handleClick('cart')}
        icon={<FiShoppingCart/>} color='blue' />

        
        <NavButton title='Notification'
        customFunc={() => handleClick('notification')}
        icon={<RiNotification3Line/>} color='blue' 
        dotColor="#fd1000"/>

        <TooltipComponent
          content="Profile"
          position='BootomCenter'
        >
          <div className='flex items-center gap-2 
          cursor-pointer p-1 hover:bg-light-gray
          rounded-lg'
          onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} alt="avatar"
            className='rounded-full w-10 h-10'/>

            <p>
              <span className='text-14'
              >Hi, </span>{' '}
              <span className=' 
              font-bold ml-1 text-14'>
                Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-14'/>
          </div>

        </TooltipComponent>
        
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}

        
      </div>
    </div>

  )
}

export default Navbar