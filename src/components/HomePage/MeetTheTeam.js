import React from 'react'
import { useNavigate } from 'react-router-dom'
import MeetTheTeamTherapist from './MeetTheTeamTherapist'

export default function MeetTheTeam({ therapists }) 
{
    const navigate = useNavigate()

    const therapistsDisplay = therapists.map((therapist) => <MeetTheTeamTherapist key={therapist.id} therapist={therapist} />)

    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <h1>MEET THE <span>TEAM</span></h1>
            </div>
            <div className='MeetTheTeamItemsContainer'>
                {therapistsDisplay}
            </div>
            <div className='MeetTheTeamItemsButtons'>
                    <button onClick={() => navigate('/BookASession')} className='MeetTheTeamItemBookButton'>BOOK A SESSION</button>
                    <button onClick={() => navigate('/ContactUs')} className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
