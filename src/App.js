import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Layout from './components/HomePage/Layout';
import About from './components/About/About';
import Services from './components/Services/Services';
import Service from './components/Services/Service';

function App() 
{
    return (
        <Routes>
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
            </Route>

        </Routes>
    )
}

export default App;
