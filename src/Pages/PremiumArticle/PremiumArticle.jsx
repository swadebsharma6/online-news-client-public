import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PremCard from "./PremCard";


const PremiumArticle = () => {
    const axiosSecure = useAxiosSecure(); 
   

    const {data: articles=[], } = useQuery({
       queryKey: ['articles'],
       queryFn: async () =>{
           const res = await axiosSecure.get('/articles');
           return res.data
       }

   });

//    console.log(articles);

   const premiums = articles.filter(article => article.role ==='premium')


    return (
        <section>

        <h3 className="text-6xl my-5 font-bold text-center">Premium Article</h3>

        <div className="md:grid grid-cols-3 gap-6 ">
            {

                premiums.map( article => <PremCard
                    key={article._id}
                    article={article}
                    ></PremCard>)
            }
        </div>

        </section>
    );
};

export default PremiumArticle;