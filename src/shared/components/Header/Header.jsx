import React from 'react'
import { useAppMenuContext } from '../../contexts/MenuContext'
import { Search } from '../Search/Search';
import { HeaderComponent, IconBar, NavComponent, NavItem, Logo, IconContainer } from './HeaderStyle'

export const Header = () => {

    const {menuOptions, handleMenuIsOpen,barRef} = useAppMenuContext();

  return (
    <HeaderComponent>
       <Logo>Crypto World</Logo>
        <NavComponent>
            
            {menuOptions && (
                menuOptions.map((item,index) => {
                    return (
                        <NavItem key={index} to={item.link}>
                            {item.titulo}
                        </NavItem>
                    )
                })
            ) }
    
        </NavComponent>
        <Search/>
            <IconContainer ref={barRef} onClick={handleMenuIsOpen}>
            <IconBar/>
            </IconContainer>

    </HeaderComponent>
  )
}
