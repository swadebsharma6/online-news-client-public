import News from "./News";


const NewsComponents = ({items, category}) => {

    return (
        <section className="mb-8">
         <h2 className="text-4xl font-bold mb-5">{category}</h2>
           <div className="md:grid grid-cols-3 gap-6">
           {
            items.map(news => <News
                key={news._id}
                news={news}
                ></News>)
          }
           </div>
        </section>
    );
};

export default NewsComponents;