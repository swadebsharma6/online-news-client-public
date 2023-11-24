import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AddArticle from "../../Pages/AddArticle/AddArticle";
import AllArticle from "../../Pages/AllArticle/AllArticle";
import Home from "../../Pages/Home/Home/Home/Home";
import LogIn from "../SignUpPage/LogIn";
import Register from "../SignUpPage/Register";



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
            element: <AllArticle></AllArticle>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element:<LogIn></LogIn>
        }
      ]
    },
  ]);