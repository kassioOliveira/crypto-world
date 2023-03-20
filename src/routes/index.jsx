import { Routes, Route, Navigate } from 'react-router-dom';


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/crypto-world' element={<h1>Crypto world</h1>} />

            <Route path='*' element={<Navigate to='crypto-world'/>} />
        </Routes>
    );
};