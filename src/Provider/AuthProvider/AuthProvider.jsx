import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const[user, setUser] = useState('');
    const[loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // login user
    const logInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    // logOut user
    const logOut =()=>{
        return signOut(auth)
    }


    // observer
    useEffect(()=>{
    const unAuthorized =  onAuthStateChanged(auth, currentUser =>{
            console.log('observer', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unAuthorized();
        }
    }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        logInUser,
        logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;