import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Layout from './components/HomePage/Layout';
import About from './components/About/About';

function App() 
{
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path='/About' element={<About />} />
                <Route path='/about' element={<About />} />
            </Route>

        </Routes>
    )
}

export default App;
