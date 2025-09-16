import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavbarContext = createContext();
export const NavColorContext = createContext();

function NavContext({children}) {

     
     const [navOpen, setNavOpen]= useState(false);
     const [navColor, setNavColor] = useState('white');

     const locate = useLocation().pathname;
     useEffect(function(){
      if(locate == '/projects'){
        setNavColor('black')
      } else{
        setNavColor('white')
      }
     },[locate])
  return (
    <div>
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
          <NavColorContext.Provider value={[navColor, setNavColor]}>
            {children}
          </NavColorContext.Provider>
            
        </NavbarContext.Provider>
        </div>
  )
}

export default NavContext