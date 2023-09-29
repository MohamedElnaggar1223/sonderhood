import React, { useState, useEffect, useRef } from 'react'
import Therapist from '../HomePage/Therapists'
import { useNavigate } from 'react-router-dom'
import { selectedServices } from '../../app/services/servicesSlice'
import { useSelector } from 'react-redux'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Config/firebaseConfig'
import { selectedTherapists } from '../../app/therapists/therapistsSlice'

export default function AboutMeetTheTeam({therapists}) 
{
    const [selectedService, setSelectedService] = useState('All Services')

    const services = useSelector(selectedServices)
    const therapistsData = useSelector(selectedTherapists)

    const [availableTherapists, setAvailableTherapists] = useState(therapists)


    async function handleFilter(e)
    {
        const serviceTitle = e.target.value
        setSelectedService(serviceTitle)

        const service = services?.find(serviceItem => serviceItem.title === serviceTitle)

        if(service)
        {
            let therapistsArray = []
            service.therapists.map(therapist => 
                {
                    const foundTherapist = therapistsData.find(data => data.id === therapist.id)
                    therapistsArray.push(foundTherapist)
                })
            setAvailableTherapists(therapistsArray)
        }
        else setAvailableTherapists(therapists)
    }

    const servicesOptions = services.map(service => (
        <option
            value={service.title}
            key={service.title}
        >
            {service.title}
        </option>
    ))

    const navigate = useNavigate()

    //@ts-ignore
    const therapistsDisplay = availableTherapists.map((therapist, index) => <Therapist key={index} therapist={therapist} />)

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
                        <select onChange={handleFilter} id='filters'>
                            <option value='All Services'>All Services</option>
                            {servicesOptions}
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
