import React, { useState, useEffect, useContext } from 'react';
import FormServices from '../../services/FormServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { Link, useNavigate } from 'react-router-dom';



function FormListContainer() {
    // Simulating form data from API
    const [forms, setForms] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const { user, setUser, setIsAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };


    useEffect(() => {


        fetchData();
    }, []);

    const handleLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        navigate('/login');
    }

    const formServices = new FormServices();

    const fetchData = async () => {
        try {
            const { data } = await formServices.getForms();
            setForms(data);
        } catch (error) {

        }
    };


    const handleSend = () => {
        // Do something with email and comment here...
        console.log(email, comment);
        hideModal();
    }
    return (
        <>
            {isOpen && (

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Invite Friends</h3>
                                    <input className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Friend's Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <textarea className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your Comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleSend}>
                                    Send
                                </button>
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={hideModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div>
                <nav className="bg-blue-500 p-4 flex justify-between items-center">
                    <span className="text-white text-2xl">form bulider </span>
                    <div onClick={handleLogout} className="flex items-center">
                        <img className="h-8 w-8 rounded-full mr-4" src="https://via.placeholder.com/150" alt={user.name} />
                        <span className="text-white">{user.name}</span>
                    </div>
                    <button onClick={showModal} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Invite Friends</button>
                    <Link to="/form-create" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Create Form</Link>
                </nav>

                <div className="container mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4">Forms</h2>

                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <table className="table-auto w-full mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Slug</th>
                                    <th className="px-4 py-2">Submission Limit</th>
                                    <th className="px-4 py-2">Allow Notifications</th>
                                    <th className="px-4 py-2">Published</th>
                                    <th className="px-4 py-2">Published At</th>
                                    <th className="px-4 py-2">Expires At</th>
                                    <th className="px-4 py-2">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {forms.map((form, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                        <td className="border px-4 py-2">{form.title}</td>
                                        <td className="border px-4 py-2">{form.slug}</td>
                                        <td className="border px-4 py-2">{form.submission_limit}</td>
                                        <td className="border px-4 py-2">{form.allow_notifications ? 'Yes' : 'No'}</td>
                                        <td className="border px-4 py-2">{form.published ? 'Yes' : 'No'}</td>
                                        <td className="border px-4 py-2">{form.published_at}</td>
                                        <td className="border px-4 py-2">{form.expires_at}</td>
                                        <td className="border px-4 py-2 ">
                                            <div className='flex'>
                                                <a href={`/edit-form/${form.id}`} className="inline-block m-1 bg-blue-500 text-white px-4 py-1 items-center rounded hover:bg-blue-600">
                                                    <i class="fa fa-pencil" aria-hidden="true"></i>

                                                </a>
                                                <a href={`/view-form/${form.id}`} className="inline-block m-1 bg-blue-500 text-white px-4 py-1 items-center rounded hover:bg-blue-600">
                                                    <i class="fa fa-eye" aria-hidden="true"></i>

                                                </a>
                                                <button onClick={showModal} className="inline-block m-1 bg-blue-500 text-white px-4 py-1 items-center rounded hover:bg-blue-600">
                                                    <i class="fa fa-terminal" aria-hidden="true"></i>

                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormListContainer;
