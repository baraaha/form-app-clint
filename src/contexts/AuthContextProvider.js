import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        JSON.parse(localStorage.getItem('isAuthenticated')) || false
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        localStorage.setItem('user', JSON.stringify(user));
    }, [isAuthenticated, user]);




    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
