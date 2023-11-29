import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

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
    // google provider
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // logOut user
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }


    // observer
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('observer', currentUser);
            if(currentUser){
                // assign get token and store 
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token )
                    }
                })
            }
            else{
                // ToDo: Remove token and  Something
                localStorage.removeItem('access-token')
            }
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    }, [axiosPublic]);

    const authInfo ={
        user,
        loading,
        createUser,
        logInUser,
        logOut,
        googleSignIn,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;