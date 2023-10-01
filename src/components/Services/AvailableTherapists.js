import React, { useEffect, useState } from 'react'
import Therapists from '../HomePage/Therapists'
import { useNavigate } from 'react-router-dom'

export default function AvailableTherapists({ availableTherapists, selectedService, therapists }) 
{
    const navigate = useNavigate()

    const therapistsDisplay = availableTherapists?.map((therapist, index) => <Therapists key={index} therapist={therapist} />)

    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <div className='MeetTheTeamHeaderContainer'>
                    <div className='MeetTheTeamHeaderTitle'>
                        <h1>AVAILABLE <span>TEHERAPISTS</span></h1>
                    </div>
                    <div className='MeetTheTeamHeaderDesc'>
                        Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                    </div>
                </div>
            </div>
            <div className='MeetTheTeamItemsContainer'>
                {therapistsDisplay}
            </div>
            <div className='MeetTheTeamItemsButtons'>
                    <button onClick={() => navigate('/RequestASession')} className='MeetTheTeamItemBookButton'>REQUEST A BOOKING</button>
                    <button onClick={() => navigate('/ContactUs')} className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
