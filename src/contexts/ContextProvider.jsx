import {createContext, useContext, useState} from 'react';

const StateContext = createContext();


const initialState = {
    //Our initial states for the navbar section
    //Their default value is false to 'isClicked' state
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    //The state for the menu section: SideBar
    //To be opened or closed. 
    //It changes according to the width of the screen in NavBar.jsx
    //And it is modified in Sidebar.jsx
    const [activeMenu, setActiveMenu] = useState(true);

    //State for the clickable elements in the navbar section
    const [isClicked, setIsClicked] = useState(initialState);

    //This function is to modify the state of the clickable elements
    //in the navbar section
    const handleClick = (clickedElement) => {
        setIsClicked({
            ...isClicked,
            [clickedElement]: !isClicked[clickedElement]
        })
    }

    //The global state to check the width of the screen
    const [screenSize, setScreenSize] = useState(undefined);
    
    return (
        <StateContext.Provider 
        value={{
            activeMenu, 
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);