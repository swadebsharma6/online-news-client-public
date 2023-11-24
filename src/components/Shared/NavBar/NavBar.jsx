import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const menuList = <> 
        <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "font-bold text-orange-700" : ""
          }
        >
          Home
        </NavLink></li>
        <li>
        <NavLink
          to="/addArticle"
          className={({ isActive }) => isActive ? "font-bold text-orange-700" : ""
          }
        >
        Add Article
        </NavLink></li>
        <li>
        <NavLink
          to="/allArticle"
          className={({ isActive }) => isActive ? "font-bold text-orange-700" : ""
          }
        >
         All Article
        </NavLink></li>
    
    </>

    return (
        <section>
        <div className="navbar bg-base-300 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuList}
            </ul>
          </div>
          <Link to='/' className="text-xl font-bold">News</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1">
           {menuList}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
        <Link to='/login'><button className="btn btn-outline border-b-4 btn-primary">LogIn</button></Link>
        <Link to='/register'><button className="btn btn-outline border-b-4 btn-secondary ml-3">Register</button></Link>
          </div>
        </div>
      </div>
        </section>
    );
};

export default NavBar;