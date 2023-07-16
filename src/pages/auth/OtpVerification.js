import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import InputFormGroup from '../../components/InputFormGroup';
import AuthServices from '../../services/AuthServices';
import Alert from '../../components/Alert';
import useAuthRedirect from '../../hooks/useAuthRedirect';

const OtpVerification = () => {

    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [validationError, setValidationError] = useState('');



    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const authServices = new AuthServices();


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('user', user)
        if (user?.verify) {
            navigate('/forms');
        } else if (!user) {
            navigate('/login');
        }
        setLoading(false); // <- stop loading once user check is complete
    }, [user]);




    const otpVerify = async (e) => {
        e.preventDefault();
        setValidationError('');
        setError('');


        try {
            const userData = await authServices.post({ otp }, 'verifyOTP');

            const updatedUser = {
                ...user,
                verify: true,
            };


            // Update the user state
            setUser(updatedUser);

            // Update the user in the localStorage
            localStorage.setItem('user', JSON.stringify(updatedUser));
            navigate('/forms');


        } catch (error) {
            setError(error);
            if (error.validationData) {
                setValidationError(error.validationData);
            }
        }
    }

    const handleResend = async (e) => {
        e.preventDefault();

        setValidationError('');
        setError('');

        try {
            const userData = await authServices.post(null, 'resendOTP');
            setError({ type: 'success', message: userData.message });
        } catch (error) {
            setError(error);
            if (error.validationData) {
                setValidationError(error.validationData);
            }
        }
    }

    if (loading) return null;


    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200 ">
            <div className="w-full max-w-6xl flex bg-white rounded-lg  shadow-lg overflow-hidden ">
                <div className="w-1/2 bg-blue-500 p-30 flex flex-col justify-center items-center py-10 text-white">
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
                    <h3 className="text-2xl mb-5 text-center">Enter OTP to Verify Your Account</h3>
                    <form>
                        {error && <Alert type={error.type} message={error.message} />}
                        <div className="mb-2">

                            <InputFormGroup
                                label='otp'
                                type='otp'
                                placeholder="Enter your unique username here"
                                value={otp}
                                col={12}
                                onChange={(e) => setOtp(e.target.value)}
                                error={validationError?.otp?.[0]}
                            />
                        </div>



                        <div className='flex justify-center my-1'>
                            <div className='flex justify-between w-1/2'>
                                <button type="submit" onClick={otpVerify} className=" py-2 px-4 text-center bg-blue-600 text-white rounded hover:bg-blue-500">Verify</button>
                                <button type="submit" onClick={handleResend} className=" py-2 px-4 text-center bg-blue-600 text-white rounded hover:bg-blue-500">Resend OTP</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OtpVerification;


