import Lottie from 'lottie-react';
import React from 'react';
import loginAnimation from '../assets/login.json'
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex-1">

                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p>Already Login <Link className='font-semibold text-blue-500 underline' to='/logIn'>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;