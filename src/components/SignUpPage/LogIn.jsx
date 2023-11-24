import { Link } from "react-router-dom";
import signup2 from '../../assets/images/undraw_fingerprint_login_re_t71l.svg';
import SocialLogin from "./Sociallogin";

const LogIn = () => {

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password =form.password.value;

        const user ={name, email,photo,password}

        console.log(user)
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
          <button className="btn btn-primary">Login</button>
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