import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FormServices from '../../services/FormServices'
import NavBar from '../../components/NavBar';
function Submissions() {

    const { id } = useParams();
    const [forms, setForms] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        fetchData()
        setLoading(false)
    }, [])


    const formServices = new FormServices();

    const fetchData = async () => {
        setLoading(true)

        console.log('fetching data')

        try {
            const response = await formServices.get(`submitions/${id}`)

            setForms(response)
        } catch (error) {

        }
        setLoading(false)

    }



    if (loading) return <h1>loading...</h1>
    return (
        <div>
            <NavBar />
            {forms && forms.submissions && forms.submissions.length > 0 ? <SubmissionTable form={forms} submissions={forms.submissions} /> :

                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="overflow-hidden shadow-lg rounded-lg h-1/3 justify-center content-center items-center cursor-pointer m-3">
                        <div className="w-full block h-full items-center content-cente">
                            <div className=" items-center w-full p-6">
                                <p className="text-gray-900 text-xl font-medium mb-2">
                                    No Data Available
                                </p>
                                <p className="text-gray-800 font-light text-md">
                                    We can't find any data at the moment. Please check back later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            }


        </div>
    )
}



const SubmissionTable = ({ form, submissions }) => {
    const elements = JSON.parse(form.elements);
    // console.log('submissions', submissions[0].data.'name_0.09763253284947715')

    return (
        <div className='m-5 p-5 rounded-lg  shadow-lg'>
            <h1 className='text-3xl my-3'>{form.title}</h1>
            <table className='tabe table-bordered text-center'>
                <thead>
                    <tr className='align-baseline '>
                        <th>user</th>
                        {elements.map((element, index) => (
                            <th key={index}>{element.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {submissions.map((submission) => (
                        <tr key={submission.id}>
                            <td>
                                <div className='flex p-2 justify-center'>
                                    <div className='rounded-full overflow-hidden w-10 h-10 mx-1'>
                                        <img src="https://via.placeholder.com/150" />
                                    </div>
                                    <div className='text-left'>
                                        <p>{submission.user.name}</p>
                                        <p>{submission.user.email}</p>
                                    </div>
                                </div>
                            </td>
                            {elements.map((element, index) => (
                                <td key={index}>{JSON.parse(submission.data)[element.name]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};




export default Submissions