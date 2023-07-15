import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';

const OtpVerification = () => {

    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.verify === true) {
            // navigate('/');
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();

        // we assume 1234 as the correct OTP for demonstration purposes
        if (otp === "1234") {
            const updatedUser = { ...user, verify: true };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            navigate('/');
        } else {
            setError("Invalid OTP. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter OTP:
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </label>
            {error && <p>{error}</p>}
            <Link to="/login">Resend OTP</Link>
            <input type="submit" value="Verify" />
        </form>
    );
};

export default OtpVerification;
