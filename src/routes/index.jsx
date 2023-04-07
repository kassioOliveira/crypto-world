import { useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Exchanges } from '../pages/Exchanges/Exchanges';
import { Home } from '../pages/Home/Home';
import { MenuLateral } from '../shared/components/MenuLateral/MenuLateral';


import { useAppMenuContext } from '../shared/contexts/MenuContext';
import {CurrencyDetail} from "../pages/CurrencyDetails/CurrencyDetail"

import {ErrorBoundary} from "react-error-boundary"
import { ErrorPage } from '../shared/components/Fallback/ErrorPage';
import { ErrorPageNotFound } from '../shared/components/Fallback/ErrorPageNotFound';
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
            <Route path='/' element={<ErrorBoundary fallback={<ErrorPage/>}><Home/></ErrorBoundary>} />

            <Route path='/corretoras' element={<ErrorBoundary fallback={<ErrorPage/>}><Exchanges /></ErrorBoundary>} />

            <Route path='/dashboard' element={<ErrorBoundary fallback={<ErrorPage/>}><Dashboard /></ErrorBoundary>} />

            <Route path='/cryptos/:id' element={<ErrorBoundary fallback={<ErrorBoundary/>}><CurrencyDetail/></ErrorBoundary>}/>
            <Route path='*' element={<Navigate to='/notfound' />} />
            <Route path='/notfound' element={<ErrorPageNotFound/>} />
        </Routes>
        </>

        
    );
};