import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
const axios = require('axios').default;

initializeAuthentication()

const useFirebase = () => {



    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [status, setStatus] = useState('Pending');
    const [role, setRole] = useState('User');



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])


    // email registration
    const emailRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // set user name
    const updateDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }


    // email login 
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    // logout user
    const logout = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            setError(error)
        });
    };



    const handleUserSave = (name, email) => {
        const userData = { name: name, email: email, role: role };
        axios.post("https://shrouded-badlands-09931.herokuapp.com/users", userData)
            .then()
    }




    return {
        user, setUser,
        error, setError,
        isLoading, setIsLoading,
        emailRegistration,
        emailLogin,
        logout,
        handleUserSave,
        updateDisplayName,
        status, setStatus,
        setRole
    };
};


export default useFirebase;