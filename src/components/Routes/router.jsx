import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../LayOut/DashBoard/DashBoard";
import Main from "../../LayOut/Main/Main";
import AddArticle from "../../Pages/AddArticle/AddArticle";
import AllArticle from "../../Pages/AllArticle/AllArticle";
import Details from "../../Pages/AllArticle/Details";
import Contact from "../../Pages/Contact/Contact";
import AllUsers from "../../Pages/DashBoard/components/AllUsers/AllUsers";
import Articles from "../../Pages/DashBoard/components/Articles/Articles";
import AddPublisher from "../../Pages/DashBoard/components/Publisher/AddPublisher";
import DashBoardPage from "../../Pages/DashBoardPage/DashBoardPage";
import Error from "../../Pages/ErrorPage/Error";
import Home from "../../Pages/Home/Home/Home/Home";
import Payment from "../../Pages/Home/Home/Plans/Payment";
import MyArticle from "../../Pages/MyArticle/MyArticle";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import PremiumArticle from "../../Pages/PremiumArticle/PremiumArticle";
import Subscribe from "../../Pages/Subscribe/Subscribe";
import LogIn from "../SignUpPage/LogIn";
import Register from "../SignUpPage/Register";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addArticle',
            element: <PrivetRoute><AddArticle></AddArticle></PrivetRoute>
        },
        {
            path: '/allArticle',
            element: <AllArticle></AllArticle>,
            loader: ()=> fetch(`https://assingment12-server-site-omega.vercel.app/articles`)
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`https://assingment12-server-site-omega.vercel.app/articles/${params.id}`)
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element:<LogIn></LogIn>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/my-article',
            element: <PrivetRoute><MyArticle></MyArticle></PrivetRoute>
        },
        {
            path: '/premiumArticle',
            element: <PrivetRoute><PremiumArticle></PremiumArticle></PrivetRoute>
        },
        {
            path: '/payment/:id',
            element: <Payment></Payment>,
            loader: ({params})=> fetch(`https://assingment12-server-site-omega.vercel.app/plans/${params.id}`)
        },
        {
            path: '/subscribe',
            element: <Subscribe></Subscribe>
        },
        {
            path: '/my-profile',
            element: <MyProfile></MyProfile>,
            
        }
      ],
      errorElement: <Error></Error>
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children: [
            {
                path: 'dashboard',
                element: <AdminRoute><DashBoardPage></DashBoardPage></AdminRoute>
            },
    
            // admin routes
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'articles',
                element: <AdminRoute><Articles></Articles></AdminRoute>
            },
            {
                path: 'publisher',
                element: <AdminRoute><AddPublisher></AddPublisher></AdminRoute>
            }
        ],
        errorElement: <Error></Error>
    },
  ]);