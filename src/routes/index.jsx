import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';

import { useAppMenuContext } from '../shared/contexts/MenuContext';


export const AppRoutes = () => {

    const { setMenuOptions } = useAppMenuContext();

    useEffect(() => {
        setMenuOptions([
            {
                titulo: "Cryptos",
                link: "/crypto-world"
            },
            {
                titulo: "Exchanges",
                link: "/crypto-world-2"
            },
            {
                titulo: "Trades",
                link: ""
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/crypto-world' element={<Dashboard />} />

            <Route path='/crypto-world-2' element={<Dashboard />} />
            <Route path='*' element={<Navigate to='crypto-world' />} />
        </Routes>
    );
};