

const Card = ({news}) => {
    const {image, title,description} = news;
    return (
        <div className="mb-10">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
        </div>
    );
};

export default Card;