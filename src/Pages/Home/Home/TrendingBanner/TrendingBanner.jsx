import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TrendingBanner = () => {

    const [trendingArticles, setTrendingArticles] = useState([]);

    useEffect(()=>{
    const url = `http://localhost:5000/trending`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        setTrendingArticles(data)
    })

    }, []);

    console.log(trendingArticles)
 
    return (
        <section className="mb-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            trendingArticles.map(article => <SwiperSlide key={article._id}>
                    <div className=" border px-10" >
                        <div>
                        <div>
                        <h2 className="text-3xl font-bold">{article.title}</h2>
                        <h4 className="text-xl text-primary py-2">{article.publisher}</h4>
                        </div>
                       
                      <img className="md:h-[800px] w-full bg-cover mb-6" src={article.image} alt="" />
                          <p className="text-xl font-bold mb-4">{article.tags}</p>
                        <p className="font-bold text-base">{article.description}...... <span className="text-primary">read more</span> </p>
                       

                        </div>
                    </div>
                </SwiperSlide>)
        }
        
       
        
      </Swiper>
        
           
        </section>
    );
};

export default TrendingBanner;