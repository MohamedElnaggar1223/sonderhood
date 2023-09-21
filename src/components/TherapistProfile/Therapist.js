import React from 'react'
import { useParams } from 'react-router-dom'
import { therapists } from '../therapists'
import PagesHeader from '../PagesHeader/PagesHeader'

export default function Therapist() 
{
    const { therapist } = useParams()

    const selectedTherapist = therapists.find(therapistProfile => therapistProfile.name.split(" ").join("") === therapist)

    const services = selectedTherapist?.services.map(service => <div className='TherapistProfileService'>{service}</div>)
    
    return (
        <>
        <div className='TherapistProfileContainer'>
            <PagesHeader />
            <div className='TherapistProfile'>
                <div className='TherapistProfileImage'>
                    <img src={selectedTherapist?.image} alt='profile' />
                </div>
                <div className='TherapistProfileInfo'>
                    <div className='TherapistProfileName'>
                        {selectedTherapist?.name}
                    </div>
                    <div className='TherapistProfileDesc'>
                        {selectedTherapist?.desc}
                    </div>
                    <div className='TherapistProfileServices'>
                        {services}
                    </div>
                    <div className='TherapistProfileButton'>
                        <button>BOOK A SESSION</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='PledgeContainer'>

        </div>
        </>
    )
}
