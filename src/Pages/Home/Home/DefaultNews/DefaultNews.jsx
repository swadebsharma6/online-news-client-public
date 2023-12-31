import { useEffect, useState } from "react";
import NewsComponents from "./NewsComponents";


const DefaultNews = () => {
    const [news, setNews] = useState([]);
   
    useEffect(()=>{
        const url = `https://assingment12-server-site-omega.vercel.app/demo`;

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setNews(data)
        })
        
    }, []);


 const world = news.filter(item => item.category === 'world');
 const lifestyle = news.filter(item => item.category === 'lifestyle');
 const education = news.filter(item => item.category === 'education');

    return (
        <section>
            <NewsComponents items={world} category='World'></NewsComponents>
            <NewsComponents items={education} category='Education'></NewsComponents>
            <NewsComponents items={lifestyle} category='Lifestyle'></NewsComponents>
        </section>
    );
};

export default DefaultNews;