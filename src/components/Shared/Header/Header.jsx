

const Header = () => {
    return (
        <section className="text-center py-4 lg:px-10 bg-slate-500 text-white">
            <div className="md:flex justify-between items-center">
                <h2 className="text-3xl font-bold">RetailNews</h2>

                <div className="md:flex items-center">
                    <h5 className="text-lg font-bold ">Thursday, November 23, 2023</h5>
                    <button className="btn btn-outline bg-orange-600 ml-14 text-white">Subscription</button>
                </div>
            </div>
        </section>
    );
};

export default Header;