import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import loginAnimation from '../assets/login.json'
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('')
    const { logInUser } = use(AuthContext)
    const navigate = useNavigate()
const location = useLocation()
    const provider = new GoogleAuthProvider();
    const handleLoginUser = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        logInUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                toast('successfully login')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res)
                toast('successfully login')
                navigate(`${location.state ? location.state : '/'}`)
             
            })
            .catch(err => {
                console.log(err)
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

                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p>If you New here <Link className='font-semibold text-blue-500 underline' to='/signUp'>Please SignUp</Link></p>
                        <p>
                            {
                                error && <p className='text-red-600 font-semibold'>{error.message}</p>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;