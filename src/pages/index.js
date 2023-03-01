import Hero from "./Hero/Hero";
import Register from "./Register/Register";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import Index from "./Index/Index";
import Login from "./Login/Login";
import Auth1 from "./Auth1/Auth1";
import AuthorForm from "./AuthorForm/AuthorForm";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/index', element: <Index /> },
            { path: '/register' , element: <Register /> },
            { path: '/login' , element: <Login /> },
            { path: '/hero' , element: <Hero />},
            { path: '/auth' , element: <Auth1 />},
            { path: '/author-form' , element: <AuthorForm />}
        ]
    },
])