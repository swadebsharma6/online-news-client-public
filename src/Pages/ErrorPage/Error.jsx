import { Link } from "react-router-dom";
import error from '../../assets/images//Banner//undraw_feeling_blue_-4-b7q.svg';


const Error = () => {
    return (
        <section className=" h-screen flex justify-center items-center">
            <div className="text-center">
                <div>
                    <img className="w-1/2 mx-auto" src={error} alt="" />
                </div>
                <h2 className="text-6xl font-bold text-red-600">404</h2>
                <h4 className="text-3xl font-bold">Page Not Found</h4>
                <p className="text-lg font-bold">We are sorry, the page you have looked for does not exist in our website! <br />Maybe go to our home page or try to use a search?</p>

               <Link to='/'> <button className="btn btn-outline btn-secondary rounded-3xl">Go Back to Home</button></Link>
            </div>
        </section>
    );
};

export default Error;