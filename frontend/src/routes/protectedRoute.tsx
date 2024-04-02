import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
    const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
    return (
        isAuth ? <Outlet /> : <Navigate to="/login" replace />
    );
};

export default PrivateRoutes;
