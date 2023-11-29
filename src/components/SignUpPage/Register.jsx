import signup2 from "../../assets/images/undraw_fingerprint_login_re_t71l.svg";

import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "./Sociallogin";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // const user ={name, email,photo,password};
    // reset Error and success
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be 6 character or Longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Please Provide a Capital Letter");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setError("Please Provide a Special character");
      return;
    }

    // createUser
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("create user", user);
        // update user
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // send user data to backend
            const user ={
              name: name,
              email:email,
              photo: photo,
            }

            axiosPublic.post('/users', user)
            .then(res =>{
              console.log('user added to database', res.data)
              if(res.data.insertedId){
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "User Signup Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setSuccess("User Registered Successfully");
                navigate('/login');
                form.reset();
              }
            })


            
          })
          .catch((error) => {
            // An error occurred
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <section>
      <div className="max-w-3xl mx-auto md:flex items-center">
        <div className="md:flex-1">
          <img src={signup2} alt="" />
        </div>
        <div className="md:flex-1 border rounded-xl mt-20 p-2 border-purple-800 bg-blue-600 bg-opacity-20">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="User Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="User Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <div>
            <p className="mt-3 text-primary font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
              {success && success}
            </p>
            <p className="mt-3 text-red-700 font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
              {error && error}
            </p>
          </div>
          <p className="font-semibold text-center">
            Already Have An Account please{" "}
            <Link to="/login" className="text-primary font-bold">
              Login
            </Link>
          </p>
          <div className="divider divider-primary">Or</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Register;
