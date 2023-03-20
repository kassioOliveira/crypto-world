import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';

import { useAppMenuContext } from '../shared/contexts/MenuContext';


export const AppRoutes = () => {

    const { menuOptions, setMenuOptions } = useAppMenuContext();
    console.log(menuOptions);
    useEffect(() => {
        setMenuOptions([
            {
                titulo: "Cryptos",
                link: ""
            },
            {
                titulo: "Exchanges",
                link: ""
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

            <Route path='*' element={<Navigate to='crypto-world' />} />
        </Routes>
    );
};