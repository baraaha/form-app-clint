import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
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
            "name": name,
            "email": email,
            "verify": false,
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setIsAuthenticated(true);
        navigate('/otp');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('/background.jpg')" }}>
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold text-center mb-4">Join Our Community</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <button type="submit" className="w-full py-2 px-4 text-center bg-blue-600 text-white rounded hover:bg-blue-500">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
