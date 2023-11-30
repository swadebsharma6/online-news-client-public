import moment from "moment/moment";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <section>
        <div className="text-center py-8 lg:px-10  bg-slate-600 text-white">
        <div className="md:flex justify-between items-center">
         <h2 className="text-6xl font-bold">ONE!1 / News</h2>

            <div className="md:flex items-center">
                <h5 className="text-lg font-bold "><p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p></h5>
                <Link to='/subscribe'><button className="btn btn-outline bg-orange-600 ml-14 text-white">Subscription</button></Link>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Header;
