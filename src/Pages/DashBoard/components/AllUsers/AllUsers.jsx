import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {
     const axiosSecure = useAxiosSecure(); 

     const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
        }

    });

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res =>{
          console.log(res.data);
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User is Admin now",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }


    return (
        <section>
        <h2 className="text-3xl font-bold mb-8">Total Users: {users.length}</h2> 
      <div>
      <div className="overflow-x-auto">
      <table className="table table-zebra rounded-2xl">
        {/* head */}
        <thead className="bg-orange-400   text-white">
          <tr>
            <th>SL</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
        {
            users.map((user, idx) =>  <tr key={user._id}>
                <th>{idx+1}</th>
                <td>
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
               { user.role === 'admin' ? <p className="font-bold text-secondary">Admin</p> : <button onClick={()=>handleMakeAdmin(user)} className="bg-blue-700 btn btn-sm">
                <FaUser className="text-white text-xl"></FaUser>
                </button>}
                </td>
              </tr>)
        }
         
        </tbody>
      </table>
    </div>
      </div>
        </section>
    );
};

export default AllUsers;