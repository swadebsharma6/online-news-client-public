

const News = ({news}) => {
    // console.log(news);
    const {image, date, headline, summary, details, source} = news;
    return (
        <section>
        <div className="card m-6 h-full bg-base-100 shadow-xl border border-gray-400">
        <figure><img className="md:h-[300px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {headline}
            <div className="badge badge-secondary">{source}</div>
          </h2>
          <h4>{date}</h4>
          <p>{summary}</p>
          <div className="card-actions">
            <p>{details.slice(0, 100)}....<span className="text-primary">read more</span> </p>
          </div>
        </div>
      </div>
        </section>
    );
};

export default News;