import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Home } from '../pages/Home/Home';
import { MenuLateral } from '../shared/components/MenuLateral/MenuLateral';

import { useAppMenuContext } from '../shared/contexts/MenuContext';


export const AppRoutes = () => {

    const { handleMenuOptions } = useAppMenuContext();

    useEffect(() => {
        handleMenuOptions([
            {
                titulo: "Cryptos",
                link: "/crypto-world"
            },
            {
                titulo: "Exchanges",
                link: "/crypto-world-2"
            },
            {
                titulo: "Graphics",
                link: ""
            },
        ]);
    }, [handleMenuOptions]);

    return (
        <>
        <MenuLateral/>
           <Routes>
            <Route path='/crypto-world' element={<Home/>} />

            <Route path='/crypto-world-2' element={<Dashboard />} />
            <Route path='*' element={<Navigate to='crypto-world' />} />
        </Routes>
        </>

        
    );
};