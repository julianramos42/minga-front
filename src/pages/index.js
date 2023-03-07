import Hero from "./Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./Index/Index";
import MangaForm from "./MangaForm/MangaForm";
import AuthForm from "./AuthForm/AuthForm";
import ChaptherForm from "./ChaptherForm/ChaptherForm";
import AuthorForm from './AuthorForm/AuthorForm'
import Comics from './Comics/Comics'

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { 
        path: '/' , 
        element: <IndexLayout /> , 
        children: [
            { path: '/', element: <Index /> },
            { path: '/hero' , element: <Hero />},
            { path: '/auth' , element: <AuthForm />},
        ]
    },
    {
        path: '/' , 
        element: <MainLayout /> , 
        children: [
            { path: '/register' , element: <AuthForm state='register'/> },
            { path: '/signin' , element: <AuthForm state='login'/> },
            { path: '/chapther-form/:manga_id' , element: <ChaptherForm /> },
            { path: '/author-form' , element: <AuthorForm /> },
            { path: '/comics/:page' , element: <Comics /> },
            {path: "/manga-form", element:<MangaForm/>}
        ]
    }
])