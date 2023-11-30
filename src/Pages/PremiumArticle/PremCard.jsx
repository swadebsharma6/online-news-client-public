import { Link } from "react-router-dom";


const PremCard = ({article}) => {

    const {_id, description, image, publisher, title,} = article;
  

    return (
        <section className="m-4">
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{publisher}</div>
          </h2>
          {
            description.length > 300 ? <p>{description.slice(0, 300)} <button className="btn btn-link">
            <Link to={`/details/${_id}`} className='text-primary font-bold'>Read More...</Link>
            </button> </p> 
               : <p>{description}</p>
             }
        </div>
      </div>
        </section>
    );
};

export default PremCard;