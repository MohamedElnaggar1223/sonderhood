import React, { useState } from 'react'
import Therapist from '../HomePage/Therapists'
import { useNavigate } from 'react-router-dom'

export default function AboutMeetTheTeam({therapists}) 
{
    const [selectedService, setSelectedService] = useState('All Services')

    const navigate = useNavigate()
    
    const filteredTherapists = therapists.filter(therapist => selectedService !== 'All Services' ? therapist.services.includes(selectedService) : therapist)
    const therapistsDisplay = filteredTherapists.map(therapist => <Therapist key={therapist.id} therapist={therapist} />)

    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <div className='MeetTheTeamHeaderContainer'>
                    <div className='MeetTheTeamHeaderTitle'>
                        <h1>MEET THE <span>TEAM</span></h1>
                    </div>
                    <div className='MeetTheTeamHeaderDesc'>
                        Get to know our exceptional team of experienced and compassionate therapists. Each member is dedicated to supporting your well-being and helping you thrive on your journey toward personal growth and mental health.
                    </div>
                </div>
                <div className='MeetTheTeamHeaderFilters'>
                    <div className='MeetTheTeamHeaderFiltersInput'>
                        <label htmlFor='filters'>FILTER BY:</label>
                        <select onChange={(e) => setSelectedService(e.target.value)} id='filters'>
                            <option value="All Services">ALL SERVICES</option>
                            <option value="Group Therapy">GROUP THERAPY</option>
                            <option value="Child Therapy">CHILD THERAPY</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='MeetTheTeamItemsContainer'>
                {therapistsDisplay}
            </div>
            <div className='MeetTheTeamItemsButtons'>
                    <button onClick={() => navigate('/RequestASession')} className='MeetTheTeamItemBookButton'>BOOK A SESSION</button>
                    <button onClick={() => navigate('/ContactUs')} className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
