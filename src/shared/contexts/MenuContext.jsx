import React, { createContext, useCallback, useContext, useState } from "react";


const MenuContext = createContext({});


export const useAppMenuContext = () => {
    return useContext(MenuContext);
};

export const AppMenuContextProvider = ({children}) => {
    const [menuOptions,setMenuOptions] = useState([]);
    const [dropDownMarketOverview, setDropDownMarketOverview] = useState(true);

    const handleMenuOptions = useCallback((newMenuOptions)=>  {
        setMenuOptions(newMenuOptions);
    },[]);

    const handleDropDownMarketOverview = useCallback(()=>  {
        setDropDownMarketOverview(value => !value);
    },[]);

    return (
        <MenuContext.Provider value={{
            menuOptions,
        handleMenuOptions,
        dropDownMarketOverview,
        handleDropDownMarketOverview}}>
            {children}
        </MenuContext.Provider>
    );
};