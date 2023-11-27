import { useEffect, useState } from "react";
import NewsComponents from "./NewsComponents";


const DefaultNews = () => {
    const [news, setNews] = useState([]);
   
    useEffect(()=>{
        const url = `http://localhost:5000/demo`;

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setNews(data)
        })
        
    }, []);


 const world = news.filter(item => item.category === 'world');
 const lifestyle = news.filter(item => item.category === 'lifestyle');
 const health = news.filter(item => item.category === 'health');
 const business = news.filter(item => item.category === 'business');
 const education = news.filter(item => item.category === 'education');
//  console.log(world)

    return (
        <section>
            <NewsComponents items={world} category='World'></NewsComponents>
            <NewsComponents items={education} category='Education'></NewsComponents>
            <NewsComponents items={business} category='Business'></NewsComponents>
            <NewsComponents items={health} category='Health'></NewsComponents>
            <NewsComponents items={lifestyle} category='Lifestyle'></NewsComponents>
        </section>
    );
};

export default DefaultNews;