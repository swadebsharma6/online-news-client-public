import Article from "./Article";


const ArticleComponent = ({items, title}) => {
    return (
       <section>
       <h2 className="text-xl font-semibold text-primary">{title}</h2>
       <div>
       {
           items.map(article => <Article
               key={article._id}
               article={article}
               ></Article>)
       } 
       </div>
       </section>
    );
};

export default ArticleComponent;