import Footer from "../../../../components/Shared/Footer/Footer";
import BreakingNews from "../../../../components/Shared/NavBar/BreakingNews";
import AllPublisher from "../AllPublisher/AllPublisher";
import DefaultNews from "../DefaultNews/DefaultNews";
import Plans from "../Plans/Plans";
import Statistic from "../Statistic/Statistic";
import TrendingBanner from "../TrendingBanner/TrendingBanner";


const Home = () => {
    return (
        <div className="">
            <BreakingNews></BreakingNews>
            <TrendingBanner></TrendingBanner>
            <AllPublisher></AllPublisher>
            <Plans></Plans>
            <Statistic></Statistic>
            <DefaultNews></DefaultNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;