import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import App from './App';
import Login from './pages/Auth/Login';
import { auth } from './firebase/firebaseconfig';


const Guard = () => {
    // let isLogin;
    // useEffect(() => {
    //     isLogin = auth.onAuthStateChanged(async user => {
    //         const Loging = await user
    //         console.log("initas", Loging);
    //         return Loging
    //     })
    // })

    const auth = useSelector((state => state.auth));
    console.log("init", auth);

    return (
        <>
            {auth.login ? <App /> : <Login />}
        </>
    )
}

export default Guard