import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import loginAnimation from '../assets/login.json'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [error, setError] = useState('')
    const { logInUser } = use(AuthContext)
    const navigate = useNavigate()
    const handleLoginUser = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        logInUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user)
            navigate('/')
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex-1">

                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLoginUser} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <p>If you New here <Link className='font-semibold text-blue-500 underline' to='/signUp'>Please SignUp</Link></p>
                        <p>
                            {
                                error&& <p className='text-red-600 font-semibold'>{error.message}</p>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;