import React, {useEffect} from 'react'
import { useAppMenuContext } from '../../contexts/MenuContext'
import { IconArrowLeftRight, IconBitcoin, IconGraph, MenuContainer, MenuNav, NavItem } from './MenuLateralStyle'



export const MenuLateral = () => {

    const { menuOptions, menuIsOpen, handleMenuIsOpen,barRef } = useAppMenuContext();
    const icons = [<IconBitcoin/>,<IconArrowLeftRight/>,<IconGraph/>]


    useEffect(() => {

      const close = (e) => {

        if(barRef.current && !barRef.current.contains(e.target)){
          if(menuIsOpen){
            setTimeout(() => {
              handleMenuIsOpen(false);
            },[200])
            
            return;  
          }
        }
      }


      document.addEventListener('click',close,true);
      document.addEventListener("mousedown", close,true);

      return () => {
        document.removeEventListener('click',close,true);
        document.removeEventListener("mousedown", close,true);
      }

    },[barRef,handleMenuIsOpen,menuIsOpen]);
    
 
  return (
    <MenuContainer isOpen={menuIsOpen} >
        <MenuNav>
            {menuOptions.length > 0 && (
                menuOptions.map((item,index) => <NavItem to={item.link} key={index}>{(icons[index])}{item.titulo}</NavItem>)
                )}
        </MenuNav>
    </MenuContainer>
  )
}
