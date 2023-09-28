import React from 'react'
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
// import BookSession from './components/Booking/BookSession';
import RequestSession from './components/Booking/RequestSession';

function App() 
{
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />

                    <Route path='About' element={<About />} />
                    <Route path='about' element={<About />} />

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

                    <Route path='Therapists/:therapist' element={<Therapist />} />
                    <Route path='therapists/:therapist' element={<Therapist />} />

                    <Route path='Blogs' element={<Blogs />} />
                    <Route path='blogs' element={<Blogs />} />

                    <Route path='ArticlePage/:title' element={<Article />} />
                    <Route path='ArticlePage/:title' element={<Article />} />

                    {/* <Route path='BookASession' element={<BookSession />} /> */}
                    {/* <Route path='BookASession' element={<BookSession />} /> */}
                    <Route path='RequestASession' element={<RequestSession />} />
                    <Route path='requestasession' element={<RequestSession />} />


                </Route>

            </Routes>
        </AnimatePresence>
    )
}

export default App;
