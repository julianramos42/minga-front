import Hero from "./Hero/Hero";
import Register from "./Register/Register";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import Index from "./Index/Index";
import MainLayout from  '../layouts/MainLayout/MainLayout'
import MangaForm from "./MangaForm/MangaForm";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/index', element: <Index /> },
            { path: '/register' , element: <Register /> },
            { path: '/hero' , element: <Hero />}
        ]
    },
    {
        path: '/',
        element: <MainLayout/> ,
        children: [

            {path: "/manga-form", element:<MangaForm/>},
        ]
    },
])