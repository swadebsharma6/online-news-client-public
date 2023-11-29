import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            // console.log(result.user)
            // send use data to server to Db
            const user ={
                name: result.user?.displayName,
                email: result.user?.email,
                photo: result.user?.photoURL
            };
          axiosPublic.post('/users', user)  
            .then(res =>{
               console.log(res.data) ;
               navigate('/')
            })
            
        })
    }

    return (
        <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-success w-1/2">
        <FcGoogle className="text-xl"></FcGoogle>
         Google
      </button>
        </div>
    );
};

export default SocialLogin;