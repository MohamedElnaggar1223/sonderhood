import React from 'react'
import { useNavigate } from 'react-router-dom'
import MeetTheTeamTherapist from './MeetTheTeamTherapist'

export default function MatchingTherapists({ search }) 
{
    const navigate = useNavigate()
    
    const therapistsDisplay = search.map((therapist, index) => <MeetTheTeamTherapist key={therapist.id} index={index} therapist={therapist} />)

    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <h1>SEARCH RESULTS:</h1>
            </div>
            <div className='MeetTheTeamItemsContainer'>
                { therapistsDisplay }
            </div>
            <div className='MeetTheTeamItemsButtons'>
                    <button onClick={() => navigate('/RequestASession')} className='MeetTheTeamItemBookButton'>BOOK A SESSION</button>
                    <button onClick={() => navigate('/ContactUs')} className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
