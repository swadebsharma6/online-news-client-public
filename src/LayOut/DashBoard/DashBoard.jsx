import { FaHome, FaMailBulk, FaPersonBooth, FaPrint, FaRegNewspaper, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";
import BreakingNews from "../../components/Shared/NavBar/BreakingNews";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {

    const [isAdmin ]= useAdmin();

  return (
    <section>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <div className="md:flex">
      {/*Navigation Bar*/}
        <div className="md:w-64 md:h-[970px] rounded-xl bg-purple-200 p-4">
          <ul className="menu  font-bold space-y-3">
            
          {
            isAdmin && <>
            <li>
            <NavLink to="/dashboard/dashboard">
            <FaHome className="text-2xl" />
            Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers">
            <FaUsers className="text-2xl" />
            All Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/articles">
            <FaRegNewspaper className="text-2xl" />
            All Articles</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/publisher">
            <FaPrint className="text-2xl" />
           Add Publisher</NavLink>
          </li>
            </>
          }

            {/*Shared NavLinks for Common user and Admin user*/}
            <div className="divider  divider-primary"></div>

            <li>
              <NavLink to="/">
              <FaHome className="text-2xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-profile">
                <FaPersonBooth className="text-xl"></FaPersonBooth>
                My profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaMailBulk className="text-xl"></FaMailBulk>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/*content come here*/}
        <div className="flex-1 p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
