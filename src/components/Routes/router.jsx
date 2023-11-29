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
            path: '/my-profile',
            element: <MyProfile></MyProfile>,
            loader: ()=> fetch(`http://localhost:5000/articles`)
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
                element: <DashBoardPage></DashBoardPage>
            },
    
            // admin routes
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'articles',
                element: <Articles></Articles>
            },
            {
                path: 'publisher',
                element: <AddPublisher></AddPublisher>
            }
        ]
    },
  ]);