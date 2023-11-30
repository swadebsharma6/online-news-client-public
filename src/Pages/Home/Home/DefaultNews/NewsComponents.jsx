import News from "./News";


const NewsComponents = ({items, category}) => {

    return (
        <section className="mb-8">
         <div className="divider divider-primary text-4xl font-bold  text-center">{category}</div>
           <div className="md:grid grid-cols-3 gap-6 my-5">
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