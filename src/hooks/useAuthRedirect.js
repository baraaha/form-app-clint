import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';

const useAuthRedirect = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    // Add useLocation hook to get the current location
    const location = useLocation();

    useEffect(() => {
        console.log('user', user)
        // Only perform a redirect if we're not already on a page we might redirect to
        if (!['/login', '/registration', '/otp'].includes(location.pathname)) {
            if (!user) {
                navigate('/login');
            } else if (!user.verify) {
                navigate('/otp');
            } else {
                navigate('/forms');
            }
        }
    }, [user, navigate, location]);
};

export default useAuthRedirect;
