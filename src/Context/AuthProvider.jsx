import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // jwt Request when user login 
            if (currentUser?.email) {
                axios.post('http://localhost:3000/jwt', {
                    email: currentUser?.email
                })
                    .then(res => {
                        console.log(res.data.token)
                        localStorage.setItem('token', res?.data?.token)
                    })
            } else{
                localStorage.removeItem('token')
            }

            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
