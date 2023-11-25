import Footer from "../../../../components/Shared/Footer/Footer";
import AllPublisher from "../AllPublisher/AllPublisher";
import Plans from "../Plans/Plans";
import Statistic from "../Statistic/Statistic";
import TrendingBanner from "../TrendingBanner/TrendingBanner";


const Home = () => {
    return (
        <div className="">
            <TrendingBanner></TrendingBanner>
            <AllPublisher></AllPublisher>
            <Statistic></Statistic>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default Home;