import React from 'react'
import { Link } from 'react-router-dom'

const user = { "name": "ahmed" };

const NavBar = () => {
    const handleLogout = () => {
        console.log('logout')
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
                    <img className="h-8 w-8 rounded-full mr-4" src="https://via.placeholder.com/150" alt={user?.name} />
                    <span className="text-white">{user?.name}</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar