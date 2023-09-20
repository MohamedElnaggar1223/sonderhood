import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Layout from './components/HomePage/Layout';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() 
{
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path='/About' element={<About />} />
                <Route path='/about' element={<About />} />

                <Route path='/Services' element={<Services />} />
                <Route path='/services' element={<Services />} />
            </Route>

        </Routes>
    )
}

export default App;
