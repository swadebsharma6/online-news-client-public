import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import BreakingNews from "../../components/Shared/NavBar/BreakingNews";
import LeftSide from "./LeftSide";
import NewsCard from "./NewsCard";
import RightSide from "./RightSide";

const AllArticle = () => {
  const articles = useLoaderData();
  console.log(articles);

  return (
    <section>
    <BreakingNews></BreakingNews>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="">
      <LeftSide></LeftSide>
     </div>
     <div className="md:col-span-2 ">
       <div>
        {articles.map(news => <NewsCard
            key={news._id}
            news={news}
            ></NewsCard>)}
       </div>
     </div>
     <div className="">
        <RightSide></RightSide>
     </div>
        </div>
        <Footer></Footer>
    </section>
  );
};

export default AllArticle;
