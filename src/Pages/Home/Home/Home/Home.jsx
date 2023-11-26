import Footer from "../../../../components/Shared/Footer/Footer";
import AllPublisher from "../AllPublisher/AllPublisher";
import DefaultNews from "../DefaultNews/DefaultNews";
import Plans from "../Plans/Plans";
import Statistic from "../Statistic/Statistic";
import TrendingBanner from "../TrendingBanner/TrendingBanner";


const Home = () => {
    return (
        <div className="">
            <TrendingBanner></TrendingBanner>
            <AllPublisher></AllPublisher>
            <Statistic></Statistic>
            <DefaultNews></DefaultNews>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default Home;