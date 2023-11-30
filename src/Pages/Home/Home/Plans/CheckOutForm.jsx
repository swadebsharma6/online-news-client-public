import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const CheckOutForm = ({price}) => {
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const [transactionId, setTransactionId] = useState("");
    const {user} = useAuth();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price: price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })


    },[axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
     const card = elements.getElement(CardElement);  

     if (card == null) {
        return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        console.log('[error]', error);
        setError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }

    //   confirm card payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName ||  'anonymous'
            }
        }
    });
    if (confirmError) {
        console.log('[error]', confirmError);
        setError(confirmError.message)
      } else {
        console.log('[PaymentIntent]', paymentIntent);
        if(paymentIntent.status ==='succeeded'){
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user.email,
                price: price,
                transactionId: paymentIntent.id,
                date: new Date(), 
                status: "premium",
              };

              // send payment
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for your payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        }
      }

    }



    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary m-4" 
        type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-500 font-bold text-center">{error}</p>
       {transactionId && <p className="text-primary font-bold text-center">
        Your Transaction Id: {transactionId}</p>}
      </form>
    );
};

export default CheckOutForm;