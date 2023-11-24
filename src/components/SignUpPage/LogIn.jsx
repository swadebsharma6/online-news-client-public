import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import signup2 from '../../assets/images/undraw_fingerprint_login_re_t71l.svg';
import SocialLogin from "./Sociallogin";

const LogIn = () => {
    const {logInUser} = useContext(AuthContext);
    

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
    

        // console.log(user)
        // user LogIn
        logInUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log('logged', user);
            alert('User login successfully')
            form.reset();
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <section>
        <div className="max-w-3xl mx-auto md:flex items-center">
         <div className='md:flex-1'>
             <img src={signup2} alt="" />
         </div>
        <div className="md:flex-1 border rounded-xl my-20 p-2 border-purple-800 bg-blue-600 bg-opacity-20">
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="User Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="font-semibold text-center">New to this site?  <Link to='/register' className="text-primary font-bold">Register</Link></p>
      <div className="divider divider-primary">Or</div>
         <SocialLogin></SocialLogin>
        </div>
        </div>
     </section>
    );
};

export default LogIn;