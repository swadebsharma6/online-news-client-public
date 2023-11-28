
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const NewsCard = ({news}) => {
    // console.log(news)
    const {user} = useAuth();
    const {_id, description, image, publisher, title,} = news;
    const axiosSecure = useAxiosSecure();

    const handleViewsCount =(news) =>{
      if(user){
        // TODO: send data to the dataBase
        const view ={
            newsId: _id,
            name:user.displayName,
            email: user.email,
            image: news.image,
            title: news.title,    
        }
        
        axiosSecure.post('/views', view)
       .then(res =>{
        console.log(res.data)
       })

      }
     
    }

    return (
        <section>
        <div className="card bg-base-100 shadow-xl border mb-16 border-b-2">
         <h2 className="card-title text-3xl font-bold px-3">{title}</h2>
        <figure><img className="w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title uppercase">{publisher}</h2>
          {
         description.length > 300 ? <p>{description.slice(0, 300)} <button onClick={()=> handleViewsCount(news)} className="btn btn-link">
         <Link to={`/details/${_id}`} className='text-primary font-bold'>Read More...</Link>
         </button> </p> 
            : <p>{description}</p>
          }
          
        </div>
      </div> 
        </section>
    );
};

export default NewsCard;