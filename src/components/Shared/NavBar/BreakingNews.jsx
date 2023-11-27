import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex  py-3">
        <button className="btn btn-error">Breaking News</button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link className="m-12">I can be a React component, multiple React components, or just some
          text.</Link>
          <Link className="m-12">I can be a React component, multiple React components, or just some
          text.</Link>
          <Link className="m-12">I can be a React component, multiple React components, or just some
          text.</Link>
        </Marquee>
      </div>
    );
};

export default BreakingNews;