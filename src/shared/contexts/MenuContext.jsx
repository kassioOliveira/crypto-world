import React, { createContext, useContext, useState } from "react";


const MenuContext = createContext({});


export const useAppMenuContext = () => {
    return useContext(MenuContext);
};

export const AppMenuContextProvider = ({children}) => {
    const [menuOptions,setMenuOptions] = useState([]);

    return (
        <MenuContext.Provider value={{menuOptions,setMenuOptions}}>
            {children}
        </MenuContext.Provider>
    );
};