import React, { createContext, useCallback, useContext, useRef, useState } from "react";


const MenuContext = createContext({});


export const useAppMenuContext = () => {
    return useContext(MenuContext);
};

export const AppMenuContextProvider = ({children}) => {
    const [menuOptions,setMenuOptions] = useState([]);
    const [dropDownMarketOverview, setDropDownMarketOverview] = useState(true);
    const [menuIsOpen,setMenuIsOpen] = useState(false);

    const barRef = useRef(null);

    const handleMenuOptions = useCallback((newMenuOptions)=>  {
        setMenuOptions(newMenuOptions);
    },[]);

    const handleDropDownMarketOverview = useCallback(()=>  {
        setDropDownMarketOverview(value => !value);
    },[]);

    const handleMenuIsOpen = useCallback((menu = true) => {
        if(menu) {
            setMenuIsOpen(value => !value)
             return;
        }

        setMenuIsOpen(false);
       
    },[]);

    return (
        <MenuContext.Provider value={{
            menuOptions,
        handleMenuOptions,
        dropDownMarketOverview,
        handleDropDownMarketOverview,
        barRef,
        handleMenuIsOpen,
        menuIsOpen}}>
            {children}
        </MenuContext.Provider>
    );
};