import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import AuthServices from '../../services/AuthServices';
import InputFormGroup from '../../components/InputFormGroup';
import useAuthRedirect from '../../hooks/useAuthRedirect';

const Login = () => {
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState('');


    const { user, setUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (user) {
            if (user && !user.verify) {
                navigate('/otp');
            } else {
                navigate('/forms');
            }
        }
        setLoading(false); // <- stop loading once user check is complete
    }, [user]);



    const navigate = useNavigate();
    const authServices = new AuthServices();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationError('');
        try {
            const userData = await authServices.post({ email }, 'login');
            setUser(userData);

            localStorage.setItem('user', JSON.stringify(userData));
            setIsAuthenticated(true);
            navigate('/otp');
        } catch (error) {
            if (error.validationData) {
                setValidationError(error.validationData);
            }
        }
    };

    if (loading) {
        return null; // or return a loading spinner
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200">
            <div className="w-full max-w-6xl flex bg-white rounded-lg  shadow-lg overflow-hidden">
                <div className="w-1/2 bg-blue-500 p-30 flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl font-bold mb-3">Welcome to Our Form Builder!</h1>
                    <h2 className="text-2xl mb-5">Creating online forms has never been easier.</h2>
                    <h3 className="text-xl">Why Choose Our Form Builder?</h3>
                    <ul className="list-disc ml-5">
                        <li>User-friendly interface</li>
                        <li>A wide range of question types</li>
                        <li>Stylish templates and customizable forms</li>
                        <li>Easy data collection and analysis</li>
                    </ul>
                    <p className="mt-3">Join us today and redefine the way you create forms!</p>
                </div>

                <div className="w-1/2 p-12">
                    <h3 className="text-2xl mb-5 text-center">Log In to Continue Your Journey</h3>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-2">

                            <InputFormGroup
                                label='Email'
                                type='email'
                                placeholder="Enter your unique username here"
                                value={email}
                                col={12}
                                onChange={(e) => setEmail(e.target.value)}
                                error={validationError?.email?.[0]}
                            />
                        </div>



                        <button type="submit" className="w-full py-2 px-4 text-center bg-blue-600 text-white rounded hover:bg-blue-500">LOG IN</button>
                    </form>



                    <div className="mt-5 text-center">
                        <h1>New to Our Form Builder?</h1>
                        <p>Sign up to start creating your own forms.</p>
                        <Link to="/registration" className="text-blue-500 hover:text-blue-700">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
