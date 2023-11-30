import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API);

const Payment = () => {
    const plan = useLoaderData();

    return (
        <div>
           <h3 className="text-6xl font-bold text-center">Please Payment: <span className="text-orange-400"> ${plan.price}</span> </h3> 
           <div className="divider divider-primary"></div>

           <div className="md:max-w-3xl mx-auto p-4">
           <Elements stripe={stripePromise}>
              <CheckOutForm price={plan.price}></CheckOutForm>
          </Elements>
           
           </div>
        </div>
    );
};

export default Payment;

