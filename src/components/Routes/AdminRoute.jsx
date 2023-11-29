import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();


    if(loading || isAdminLoading){
        return <div className="text-center"><span className="loading loading-bars text-purple-500 loading-xs"></span>
        <span className="loading loading-bars text-secondary loading-sm"></span>
        <span className="loading loading-bars text-orange-600 loading-md"></span></div>
    }

    if(user && isAdmin){
        return children;
    }
    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;