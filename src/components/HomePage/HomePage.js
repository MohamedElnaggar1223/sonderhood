import React from 'react'
import Home from './Home';
import TherapyImportance from './TherapyImportance';
import OurServices from './OurServices';
import LookingForHelp from './LookingForHelp';
import WhySonderHood from './WhySonderHood';
import MeetTheTeam from './MeetTheTeam';
import OurBlog from './OurBlog';
import ClientsSay from './ClientsSay';
import FAQ from './FAQ';
import { useScroll } from 'framer-motion';

export default function HomePage({ therapists, blogs }) 
{
    return (
        <>
            <Home />
            <TherapyImportance />
            <OurServices />
            <LookingForHelp therapists={therapists} />
            <WhySonderHood />
            <MeetTheTeam therapists={therapists} />
            <OurBlog blogs={blogs} />
            <ClientsSay />
            <FAQ />
        </>
    )
}
