import React, { useState } from 'react'
import therapist3 from '../../imgs/therapist1.png'
import therapist2 from '../../imgs/therapist2.png'
import therapist1 from '../../imgs/therapist3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Therapist from '../HomePage/Therapist'

export default function AboutMeetTheTeam() 
{
    const [selectedService, setSelectedService] = useState('All Services')

    const therapists = [
        {
            image: therapist1,
            name: 'Full Name',
            desc: 'Founder & Counseling Psychologist',
            services: ['Child Therapy', 'Group Therapy', 'All Services']
        },
        {
            image: therapist2,
            name: 'Full Name',
            desc: 'Founder & Counseling Psychologist',
            services: ['Child Therapy', 'Group Therapy', 'All Services']
        },
        {
            image: therapist3,
            name: 'Full Name',
            desc: 'Founder & Counseling Psychologist',
            services: ['Child Therapy', 'Group Therapy', 'All Services']
        }
        ,{
            image: therapist1,
            name: 'Full Name',
            desc: 'Founder & Counseling Psychologist',
            services: ['Group Therapy', 'All Services']
        }
        ,{
            image: therapist2,
            name: 'Full Name',
            desc: 'Founder & Counseling Psychologist',
            services: [ 'Child Therapy', 'All Services']
        },
        {
            image: therapist3,
            name: 'Full Name',
            desc: 'Founder & Counseling Psychologist',
            services: ['Child Therapy', 'Group Therapy', 'All Services']
        }
    ]

    const filteredTherapists = therapists.filter(therapist => therapist.services.includes(selectedService))
    const therapistsDisplay = filteredTherapists.map(therapist => <Therapist therapist={therapist} />)

    return (
        <div className='MeetTheTeamContainer'>
            <div className='MeetTheTeamHeader'>
                <div className='MeetTheTeamHeaderContainer'>
                    <div className='MeetTheTeamHeaderTitle'>
                        <h1>MEET THE <span>TEAM</span></h1>
                    </div>
                    <div className='MeetTheTeamHeaderDesc'>
                        Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
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
                    <button className='MeetTheTeamItemBookButton'>BOOK A SESSION</button>
                    <button className='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
