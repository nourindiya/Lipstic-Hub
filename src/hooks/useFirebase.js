import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('');

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    const handleRegister = e => {
        e.preventDefault();
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }



    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }




    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    }, [])



    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        error,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleNameChange,
        toggleLogin
    }
}


export default useFirebase;