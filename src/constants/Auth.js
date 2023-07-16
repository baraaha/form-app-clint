import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

function Auth({ children }) {
    const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // Set loading to true initially
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            setUser(storedUser);
            setIsAuthenticated(true);
        }

        // Set loading to false after checking local storage
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else if (user && user?.verify === false) {
            navigate('/otp');
        }

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [isAuthenticated, user, navigate]);

    // Render children only if not loading
    return loading ? null : children;
}

export default Auth;
