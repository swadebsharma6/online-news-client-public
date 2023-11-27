import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import signup2 from "../../assets/images/undraw_fingerprint_login_re_t71l.svg";
import SocialLogin from "./Sociallogin";

const LogIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location =useLocation();

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(user)

    setError("");
    setSuccess("");

    // user LogIn
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("logged", user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, {replace: true})
        setSuccess("User Logged in Successfully");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <section>
      <div className="max-w-3xl mx-auto md:flex items-center">
        <div className="md:flex-1">
          <img src={signup2} alt="" />
        </div>
        <div className="md:flex-1 border rounded-xl my-20 p-2 border-purple-800 bg-blue-600 bg-opacity-20">
          <form onSubmit={handleSubmit} className="card-body">
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
                Login
              </button>
            </div>
          </form>
          <p className="font-semibold text-center">
            New to this site?{" "}
            <Link to="/register" className="text-primary font-bold">
              Register
            </Link>
          </p>
          <div>
            <p className="mt-3 text-primary font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
              {success && success}
            </p>
            <p className="mt-3 text-red-700 font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
              {error && error}
            </p>
          </div>

          <div className="divider divider-primary">Or</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
