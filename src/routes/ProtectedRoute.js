import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';



const ProtectedRoute = ({ redirectPath = '/login', children }) => {
    const { user } = useContext(AuthContext)


    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    if (user && user.verify === false) {
        return <Navigate to="/otp" replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
