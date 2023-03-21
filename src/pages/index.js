import Hero from "./Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./Index/Index";
import MangaForm from "./MangaForm/MangaForm";
import AuthForm from "./AuthForm/AuthForm";
import ChapterForm from "./ChapterForm/ChapterForm";
import AuthorForm from './AuthorForm/AuthorForm'
import Mangas from './Mangas/Mangas'
import PageChapter from '../pages/PageChapter/Page'
import MangaC from "./Mangas/MangaC";
import Author from "./Author/Author";
import MyMangas from "./MyMangas/MyMangas";

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
            { path: '/chapter-form/:manga_id' , element: <ChapterForm /> },
            { path: '/author-form' , element: <AuthorForm /> },
            { path: '/mangas/:page' , element: <Mangas /> },
            { path: "/chapters/:id/:page", element: <PageChapter /> },
            { path: '/mangas/:id/:page' , element: <MangaC /> },
            { path: "/manga-form", element: <MangaForm/> },
            { path: "/author/:id", element: <Author /> },
            { path: '/mymangas/:page', element: <MyMangas /> }
        ]
    }
])
