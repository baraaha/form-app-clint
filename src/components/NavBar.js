import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext, useAuth } from '../contexts/AuthContextProvider'
import AuthServices from '../services/AuthServices';
const NavBar = () => {

    const { user, setUser } = useContext(AuthContext);


    const authServices = new AuthServices();


    const handleLogout = async () => {


        try {
            const response = await authServices.post({}, 'logout');
            localStorage.removeItem('user');
            setUser(null);

        } catch (error) {
            console.log('error', error)
        }
    }
    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className='justify-centerj p-2 rounded-md'>
                <div class="bg-blue-500 items-center text-white font-bold text-2xl p-3">
                    FormEase
                </div>
                <div class="ml-3">
                    <p class="text-white font-semibold">Building Forms Made Easy!</p>
                </div>
            </div>


            <div className='flex'>

                <Link to="/form-create" className="bg-white mx-1 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Create Form</Link>
                <Link to="/forms" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Forms</Link>
                <button onClick={handleLogout} className="bg-white mx-1 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">logout</button>
                <div className="flex mx-3">
                </div>
                <div onClick={handleLogout} className="flex  items-center">
                    <img className="h-8 w-8 rounded-full mr-4" src="https://via.placeholder.com/150" alt={user?.user?.name} />
                    <span className="text-white">{user.user.name}</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar