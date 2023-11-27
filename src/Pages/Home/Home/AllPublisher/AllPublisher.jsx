import { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent";
import RightSide from "./RightSide";


const AllPublisher = () => {

    const [articles, setArticles] = useState([]);
    // console.log(articles)
    
    useEffect(()=>{
        const url= `http://localhost:5000/articles`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
            setArticles(data)
        })
    }, []);

    const todaysBd = articles.filter(item => item.tags === 'todayBD');
    const economy = articles.filter(item => item.tags === 'economy');
    const world = articles.filter(item => item.tags === 'world');
    const lifestyle = articles.filter(item => item.tags === 'lifestyle');
    


    return (
        <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
         <div className="md:col-span-3 border">
           <div>
             <ArticleComponent items={todaysBd} title='Todays Bd'></ArticleComponent>
             <div className="divider"></div>
            <ArticleComponent items={world} title='World News'></ArticleComponent>
            <div className="divider"></div>
            <ArticleComponent items={economy} title='World Economy'></ArticleComponent>
            <div className="divider"></div>
            <ArticleComponent items={lifestyle} title='Lifestyle'></ArticleComponent>
           </div>
         </div>
         <div className=" max-h-screen">
                <RightSide></RightSide>
         </div>
            </div>
        </section>
    );
};

export default AllPublisher;