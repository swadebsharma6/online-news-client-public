import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AddPublisher = () => {
    const axiosSecure = useAxiosSecure();

    const handleAddPublisher = async(event) =>{
        event.preventDefault();
        const form = event.target;
        const publisher = form.name.value;
        const logo = form.photo.value;
        const data ={publisher, logo}
        // console.log(data)
         // ToDO: send data to server with axios secure only admin;
         const dataRes = await axiosSecure.post('/publisher', data);
         console.log(dataRes.data);
         if(dataRes.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added Article Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
         }
    }



    return (
        <section>
        <h2 className="text-3xl mb-8 font-bold text-purple-500">Add Publisher*</h2>
        <div className="divider divider-neutral"></div>
           <div className="border-gray-400">
                <div className="md:max-w-xl">
                <form onSubmit={handleAddPublisher} className="card-body border border-purple-300 rounded-xl">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-purple-600">Publisher Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Publisher" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-purple-600">Logo</span>
                  </label>
                  <input type="text" name="photo" placeholder="logo" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Add Publisher</button>
                </div>
              </form>
                </div>
           </div>
        </section>
    );
};

export default AddPublisher;