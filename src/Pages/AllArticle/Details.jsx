import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import BreakingNews from "../../components/Shared/NavBar/BreakingNews";
import TrendingBanner from "../Home/Home/TrendingBanner/TrendingBanner";
import LeftSide from "./LeftSide";


const Details = () => {
    const news = useLoaderData();
    const { description, author, image, publisher, tags, title,} = news;
    // console.log(news)
    return (
        <section>
        <BreakingNews></BreakingNews>
            <div className="md:grid grid-cols-12 gap-5 mt-6">
                <div className="md:col-span-8">
                <TrendingBanner></TrendingBanner>
                <div className="card bg-base-100 shadow-2xl my-5">
                <h2 className="card-title text-6xl font-bold px-3 mb-5">{title}</h2>
                <h2 className="card-title italic uppercase">{publisher}</h2>
                <figure><img src={image} alt="Shoes" className="w-full" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">
                    {title}
                    <div className="badge badge-secondary">{tags}</div>
                  </h2>
                  <h2 className="font-bold underline">{author}</h2>
                  <p>{description}</p>
                </div>
              </div>
                </div>
                <div className="md:col-span-4">
                    <LeftSide></LeftSide>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Details;