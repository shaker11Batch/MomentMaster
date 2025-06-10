import Lottie from 'lottie-react';
import React, { use, useState } from 'react';
import loginAnimation from '../assets/login.json'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';

const SignUp = () => {
    const [isError, setIsError] = useState('')
    const navigate = useNavigate()
    const { createUser } = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const profile = { displayName: name, photoURL: photo }

        // password validation 
        const passwordEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (passwordEx.test(password) === false) {
            setIsError('password should be one uppercase one lowercase and six word or long...')
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log(auth.currentUser)
                    }).catch((error) => {

                        console.log(error)
                    });

                navigate('/')
            })
            .catch(error => {
                console.log(error)
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
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Photo URL</label>
                            <input type="url" name='photo' className="input" placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <p>Already Login <Link className='font-semibold text-blue-500 underline' to='/logIn'>Please Login</Link></p>
                        <p>
                            {
                                isError && <p className='text-red-500'>{isError}</p>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;