import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useView = () => {
    const axiosSecure = useAxiosSecure();
    const {user} =useAuth();
    
    const {data: views=[], refetch} = useQuery({
        queryKey: ['view', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/views?email=${user.email}`);
            return res.data;
        }
    });

    return [views, refetch]
};

export default useView;