import { useQuery } from "@tanstack/react-query";
import Chart from "react-google-charts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useView from "../../hooks/useView";

const DashBoardPage = () => {
  const [views] = useView();
  console.log(views);
  const axiosSecure = useAxiosSecure(); 

  const {data: articles=[],} = useQuery({
     queryKey: ['articles'],
     queryFn: async () =>{
         const res = await axiosSecure.get('/articles');
         return res.data
     }

 });

 console.log(articles);
 const theDailyStar =articles.filter(article => article.publisher === 'the daily star');
 const theTmesOfIndia =articles.filter(article => article.publisher === 'the times of india');
 const theGurdian =articles.filter(article => article.publisher === 'the guardian');


 const data = [
    ["Task", "Article Published By Publisher"],
    ["TheDailyStar", theDailyStar.length],
    ["TheTimesOfIndia", theTmesOfIndia.length],
    ["TheGurdian", theGurdian.length],
   
  ];

 const options = {
    title: "Article Published By Publisher",
    is3D: true,
  }

  return (
    <section>
      <h2 className="text-6xl font-bold text-center">------DashBoard------</h2>
      <div className="divider divider-neutral shadow-2xl mb-5"></div>
      <div className="md:h-[400px]">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="divider divider-neutral shadow-2xl mb-5"></div>
      <div>
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
      </div>
    </section>
  );
};

export default DashBoardPage;
