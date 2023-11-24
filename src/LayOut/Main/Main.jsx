import { Outlet } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";
import NavBar from "../../components/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
           <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;