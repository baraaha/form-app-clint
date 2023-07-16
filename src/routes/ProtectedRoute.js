import { useContext } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';

export function ProtectedRoute({ children, ...rest }) {
    const { user } = useContext(AuthContext);
    let navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    return <Route {...rest}>{children}</Route>;
}
