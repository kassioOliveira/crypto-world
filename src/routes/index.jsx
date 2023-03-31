import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Exchanges } from '../pages/Exchanges/Exchanges';
import { Home } from '../pages/Home/Home';
import { MenuLateral } from '../shared/components/MenuLateral/MenuLateral';

import { useAppMenuContext } from '../shared/contexts/MenuContext';


export const AppRoutes = () => {

    const { handleMenuOptions } = useAppMenuContext();

    useEffect(() => {
        handleMenuOptions([
            {
                titulo: "Cryptos",
                link: "/"
            },
            {
                titulo: "Corretoras",
                link: "/corretoras"
            },
            {
                titulo: "Dashboard",
                link: "/dashboard"
            },
        ]);
    }, [handleMenuOptions]);

    return (
        <>
        <MenuLateral/>
           <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/corretoras' element={<Exchanges />} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        </>

        
    );
};