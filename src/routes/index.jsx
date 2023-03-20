import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/crypto-world' element={<Dashboard/>} />

            <Route path='*' element={<Navigate to='crypto-world'/>} />
        </Routes>
    );
};