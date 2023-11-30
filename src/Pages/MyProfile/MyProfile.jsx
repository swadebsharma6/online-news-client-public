import useAuth from "../../hooks/useAuth";



const MyProfile = () => {
//    const  axiosSecure = useAxiosSecure();
    const {user} = useAuth(); 
    // console.log(user)

    return (
        <section className="my-20 bg-green-600 rounded-md p-10">
        <h3 className="text-4xl font-bold text-center text-secondary">User Profile</h3>
       

            <div className="max-w-4xl mx-auto p-6 text-center border rounded-xl border-purple-50 ">
            <div className="avatar">
            <div className="w-36 mask mask-squircle">
              <img src={user.photoURL} alt="" />
            </div>
           </div>
          <h2 className="text-xl font-bold">{user.displayName}</h2>
          <h2 className="text-xl font-bold">{user.email}</h2>
         
            </div>
        </section>
    );
};

export default MyProfile;