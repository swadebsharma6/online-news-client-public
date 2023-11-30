import Article from "./Article";


const ArticleComponent = ({items, title}) => {
    return (
       <section>
       <div className="divider divider-neutral text-4xl font-semibold text-primary">{title}</div>
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