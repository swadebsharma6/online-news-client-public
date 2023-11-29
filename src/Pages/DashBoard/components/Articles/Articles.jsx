import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const Articles = () => {
    const axiosSecure = useAxiosSecure(); 

    const {data: articles=[], refetch} = useQuery({
       queryKey: ['articles'],
       queryFn: async () =>{
           const res = await axiosSecure.get('/articles');
           return res.data
       }

   });

   console.log(articles)
   
   const handleMakePremium = article =>{
    axiosSecure.patch(`/articles/premium/${article._id}`)
    .then(res =>{
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Article is premium",
          showConfirmButton: false,
          timer: 2500
        });
      }
    })
}

   const handleApproved = article =>{
    axiosSecure.patch(`/articles/approved/${article._id}`)
    .then(res =>{
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Article is approved",
          showConfirmButton: false,
          timer: 2500
        });
      }
    })
}


  //  delete method
   const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/articles/${id}`)
            .then(res =>{
                if(res.data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Deleted Successfully.",
                        icon: "success"
                      });
                }
                
            })
        }
      });
  }

    return (
        <section>
          <h2 className="text-3xl font-bold mb-8">Total Article: {articles.length}</h2> 
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-purple-400 text-white">
      <tr>
        <th>SL</th>
        <th>Image</th>
        <th>Title& Publisher</th>
        <th>Publisher& Author</th>
        <th>Approve</th>
        <th>Decline</th>
        <th>Delete</th>
        <th>Premium</th>
        
      </tr>
    </thead>
    <tbody>

    {
        articles.map((article, idx )=><tr key={article._id}>
            <th>
              {idx+ 1}
            </th>
            <th>
            <div className="avatar">
            <div className="mask mask-parallelogram w-16 h-16">
              <img src={article.image}alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
            </th>
             <th>
             <div>
             <div className="font-bold">{article.title.slice(0,20)}...</div>
             <div className="text-sm opacity-50 uppercase">{article.publisher}</div>
           </div>
             </th>
            <th>
              <span className="uppercase">{article.tags}</span>
              <br/>
              <span className="badge badge-ghost badge-sm">{article.email}</span>
            </th>
            <th>
           { article.role === 'approve' ? <p className="text-primary">Approved</p>:
            <button onClick={()=>handleApproved(article)} className="btn btn-sm">
            <FcApprove className="text-xl"/>
            </button>
          }
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">Decline</button>
            </th>
            <th>
              <button onClick={()=>handleDelete(article._id)} className="btn  btn-sm">
              <FaTrashAlt className="text-red-500" />
              </button>
            </th>
            <th>
             {
              article.role === 'premium' ? <span>Pre.confirmed</span>  : 
               <button onClick={()=>handleMakePremium(article)} className="btn btn-primary btn-sm">
               <MdWorkspacePremium className="text-xl text-secondary"/>
             </button>
            }
            </th>
          </tr> )
    }
      {/* row 1 */}
    
    </tbody>
  </table>
</div>
          
          </div>
        </section>
    );
};

export default Articles;