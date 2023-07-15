import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const {
        user,
        setUser,
        setIsAuthenticated,
    } = useContext(AuthContext);

    const navigate = useNavigate();




    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            "name": "John Doe",
            "email": email,
            "verify": false,
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setIsAuthenticated(true);
        navigate('/otp');
    };

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
                        <div className="mb-5">
                            <label className="block mb-2">email</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Enter your unique username here" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>



                        <button type="submit" className="w-full py-2 px-4 text-center bg-blue-600 text-white rounded hover:bg-blue-500">LOG IN</button>
                    </form>



                    <div className="mt-5 text-center">
                        <p>New to Our Form Builder?</p>
                        <Link to="/registration" className="text-blue-500 hover:text-blue-700">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
