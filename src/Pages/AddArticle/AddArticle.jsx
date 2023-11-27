// import newsImg from '../../assets/images/Banner/printer.jpg';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Title from '../../components/Shared/SectionTitle/Title';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddArticle = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
 const {user} = useAuth();


  const onSubmit = async(data) => {
    console.log(data, user)
    // image upload
    const imgFile = {image: data.image[0]}

    const res = await axiosPublic.post(image_hosting_api, imgFile,{
      headers:{
        "content-type": "multipart/form-data",
      }
    });
    console.log(res.data)
    if(res.data.success){
      // send article to server 
      const article ={
        author: user.displayName,
        email: user.email,
        photo: user.photoUrl,
        title: data.title,
        publisher: data.publisher,
        tags: data.tags,
        description: data.description,
        image: res.data.data.display_url
      }

       // ToDO: send article to server with axios secure only admin;
       const articleRes = await axiosPublic.post('/articles', article);
       console.log(articleRes.data);
       if(articleRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added Article Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        reset();
       }
    }

  }

    return (
        <section>
           <Title subHeading='Add A Article' heading='Provide News By Publisher'></Title>
           <div className='max-w-4xl mx-auto'>
           <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">News Title</span>
               </label>
               <input
                 type="text"
                 {...register("title", { required: true })}
                 placeholder="News Title"
                 className="input input-bordered"
                 required
               />
             </div>
             <div className="md:flex gap-4">
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Tags</span>
                 </label>
                 <select
                   defaultValue="default"
                   {...register("tags", { required: true })}
                   className="select select-success w-full "
                 >
                   <option disabled value="default">
                     Select One
                   </option>
                   <option value="todayBD">TodayBD</option>
                   <option value="world">World</option>
                   <option value="health">Health</option>
                   <option value="economy">Economy</option>
                   <option value="technology">Technology</option>
                   <option value="education">Education</option>
                   <option value="lifestyle">Lifestyle</option>
                 </select>
               </div>
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Publisher</span>
                 </label>
                 <select
                   defaultValue="default"
                   {...register("publisher", { required: true })}
                   className="select select-success w-full "
                 >
                   <option disabled value="default">
                     Select A Publisher
                   </option>
                   <option value="prothom-alo">Prothom Alo</option>
                   <option value="the daily star">The Daily Star</option>
                   <option value="bangladesh pratidin">Bangladesh Pratidin</option>
                   <option value="jugantor">Jugantor</option>
                   <option value="the guardian">The Guardian</option>
                   <option value="the times of india">The Times of India</option>
                 </select>
               </div>
               
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Description</span>
               </label>
               <textarea
                 className="textarea textarea-success h-[300px]"
                 {...register("description", { required: true })}
                 placeholder="News Details Write Here"
               ></textarea>
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Choose File</span>
               </label>
               <input
                 type="file"
                 {...register("image", { required: true })}
                 className="file-input file-input-bordered w-full max-w-xs"
               />
             </div>
             <button type="submit" className="btn btn-warning">
               Submit  Article
             </button>
           </form>
         </div>
        </section>
    );
};

export default AddArticle;