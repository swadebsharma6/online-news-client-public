import { useEffect, useState } from "react";
import Card from "./Card/Card";


const LeftSide = () => {
    const [trendingArticles, setTrendingArticles] = useState([]);

    useEffect(()=>{
    const url = `http://localhost:5000/trending`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        setTrendingArticles(data)
    })

    }, []);

    return (
        <section>
           <div>
            {trendingArticles.slice(0,4).map(news => <Card
                key={news._id}
                news={news}
                ></Card>)}
           </div> 
        </section>
    );
};

export default LeftSide;