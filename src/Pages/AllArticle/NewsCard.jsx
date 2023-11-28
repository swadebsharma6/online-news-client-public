import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    console.log(news)

    const {_id, description, image, publisher, title,} = news;

    return (
        <section>
        <div className="card bg-base-100 shadow-xl border mb-16 border-b-2">
         <h2 className="card-title text-3xl font-bold px-3">{title}</h2>
        <figure><img className="w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title uppercase">{publisher}</h2>
          {
         description.length > 300 ? <p>{description.slice(0, 300)} <Link to={`/details/${_id}`} className='text-primary font-bold'>Read More...</Link> </p> 
            : <p>{description}</p>
          }
          
        </div>
      </div> 
        </section>
    );
};

export default NewsCard;