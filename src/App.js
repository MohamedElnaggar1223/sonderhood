import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Layout from './components/HomePage/Layout';
import About from './components/About/About';
import Services from './components/Services/Services';
import Service from './components/Services/Service';
import ContactUs from './components/ContactUs/ContactUs';
import { AnimatePresence } from 'framer-motion';
import Therapist from './components/TherapistProfile/Therapist';
import Blogs from './components/Blogs/Blogs';
import Article from './components/Blogs/Article';
import { db } from './Config/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

function App() 
{
    const location = useLocation()

    const [therapists, setTherapists] = useState([])
    const [blogs, setBlogs] = useState([])

    const therapistsCollection = collection(db, "therapists")
    const blogsCollection = collection(db, "blogs")

    useEffect(() => 
    {
        const getTherapists = async () => 
        {
            const therapistsData = await getDocs(therapistsCollection)
            //@ts-ignore
            setTherapists(therapistsData.docs.map(therapist => ({ ...therapist.data(), id: therapist.id })))
        }

        getTherapists()
        //eslint-disable-next-line
    }, [])

    useEffect(() => 
    {
        const getBlogs = async () => 
        {
            const blogsData = await getDocs(blogsCollection)
            //@ts-ignore
            setBlogs(blogsData.docs.map(blog => ({ ...blog.data(), id: blog.id })))
        }

        getBlogs()
        //eslint-disable-next-line
    }, [])

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage therapists={therapists} blogs={blogs} />} />

                    <Route path='About' element={<About therapists={therapists} />} />
                    <Route path='about' element={<About therapists={therapists} />} />

                    <Route path='Services'>
                        <Route index element={<Services />} />
                        <Route path=':service' element={<Service />} />
        
                    </Route>
                    <Route path='services'>
                        <Route index element={<Services />} />
                        <Route path=':service' element={<Service />} />
        
                    </Route>

                    <Route path='ContactUs' element={<ContactUs />} />
                    <Route path='contactus' element={<ContactUs />} />

                    <Route path='Therapists/:therapist' element={<Therapist therapists={therapists} blogs={blogs}/>} />
                    <Route path='therapists/:therapist' element={<Therapist therapists={therapists} blogs={blogs}/>} />

                    <Route path='Blogs' element={<Blogs blogs={blogs} />} />
                    <Route path='blogs' element={<Blogs blogs={blogs} />} />

                    <Route path='ArticlePage' element={<Article />} />
                    <Route path='ArticlePage' element={<Article />} />


                </Route>

            </Routes>
        </AnimatePresence>
    )
}

export default App;
