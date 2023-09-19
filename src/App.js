import React from 'react'
import Home from './components/Home';
import TherapyImportance from './components/TherapyImportance';
import OurServices from './components/OurServices';
import LookingForHelp from './components/LookingForHelp';
import WhySonderHood from './components/WhySonderHood';
import MeetTheTeam from './components/MeetTheTeam';
import OurBlog from './components/OurBlog';
import ClientsSay from './components/ClientsSay';
import FAQ from './components/FAQ';

function App() 
{
    return (
        <>
            <Home />
            <TherapyImportance />
            <OurServices />
            <LookingForHelp />
            <WhySonderHood />
            <MeetTheTeam />
            <OurBlog />
            <ClientsSay />
            <FAQ />
        </>
    )
}

export default App;
