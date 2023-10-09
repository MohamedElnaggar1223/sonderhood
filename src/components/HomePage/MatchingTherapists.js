import React from 'react'
import { useNavigate } from 'react-router-dom'
import MeetTheTeamTherapist from './MeetTheTeamTherapist'

export default function MatchingTherapists({ therapists, search }) 
{
    const navigate = useNavigate()

    const filteredTherapists = therapists.filter(therapist => 
        {
            let counter = 0
            search.forEach(searchElem => 
            {
                if(therapist.search.includes(searchElem)) counter++
            })
            return counter === search.length
        })

    const therapistsDisplay = filteredTherapists.map((therapist, index) => <MeetTheTeamTherapist key={therapist.id} index={index} therapist={therapist} />)

    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <h1>SEARCH RESULTS:</h1>
            </div>
            <div className='MeetTheTeamItemsContainer'>
                { therapistsDisplay }
            </div>
            <div className='MeetTheTeamItemsButtons'>
                    <button onClick={() => navigate('/RequestASession')} className='MeetTheTeamItemBookButton'>REQUEST A BOOKING</button>
                    <button onClick={() => navigate('/ContactUs')} className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
