import moment from "moment/moment";


const Header = () => {
    return (
        <section>
        <div className="text-center py-4 lg:px-10 bg-slate-500 text-white">
        <div className="md:flex justify-between items-center">
            <h2 className="text-3xl font-bold">RetailNews</h2>

            <div className="md:flex items-center">
                <h5 className="text-lg font-bold "><p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p></h5>
                <button className="btn btn-outline bg-orange-600 ml-14 text-white">Subscription</button>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Header;