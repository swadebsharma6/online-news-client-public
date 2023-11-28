import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AddArticle from "../../Pages/AddArticle/AddArticle";
import AllArticle from "../../Pages/AllArticle/AllArticle";
import Details from "../../Pages/AllArticle/Details";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Error from "../../Pages/ErrorPage/Error";
import Home from "../../Pages/Home/Home/Home/Home";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import LogIn from "../SignUpPage/LogIn";
import Register from "../SignUpPage/Register";
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
            element: <AddArticle></AddArticle>
        },
        {
            path: '/allArticle',
            element: <AllArticle></AllArticle>,
            loader: ()=> fetch(`http://localhost:5000/articles`)
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/articles/${params.id}`)
        },
        {
            path: '/dashboard',
            element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>
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
            path: '/my-profile',
            element: <MyProfile></MyProfile>,
            loader: ()=> fetch(`http://localhost:5000/articles`)
        }
      ],
      errorElement: <Error></Error>
    },
  ]);