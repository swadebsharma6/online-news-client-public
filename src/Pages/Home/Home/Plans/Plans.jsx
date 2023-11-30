import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import PlanCard from "./PlanCard";

const Plans = () => {

  const axiosPublic = useAxiosPublic(); 

  const {data: plans=[],} = useQuery({
     queryKey: ['articles'],
     queryFn: async () =>{
         const res = await axiosPublic.get('/plans');
         return res.data
     }

 });

 console.log(plans)



  return (
    <section className="mb-16">
    <div className="md:h-[250px]">
      <h3 className="text-4xl text-center font-bold mt-10 mb-4">Our Awesome <span className="text-secondary">Subscription Plans</span> </h3>
      <p className="font-bold text-center text-black">Please consider supporting us by becoming a full access members. You get all the bells and whistles included,<br /> plus free access to our ebook librarties</p>
    </div>
     <div className="md:max-w-6xl mx-auto">
     <div className="md:grid md:grid-cols-3 gap-6">
     {
       plans.map(plan => <PlanCard
         key={plan._id}
         plan={plan}
         ></PlanCard>)
     }
   </div>
     </div>
    </section>
  );
};

export default Plans;
