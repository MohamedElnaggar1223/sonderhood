import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MeetTheTeamTherapist({ therapist }) 
{
    const navigate = useNavigate()

    const services = therapist.services.map((service) => <div key={service} className='MeetTheTeamItemProfItem'>{service}</div>
    )

    return (
        <div onClick={() => navigate(`/Therapists/${therapist.name.split(" ").join("")}`)} className='MeetTheTeamItem'>
            <div className='MeetTheTeamItemImage'>
                <img src={therapist.image} alt='t4' />
            </div>
            <div className='MeetTheTeamItemInfo'>
                <div className='MeetTheTeamItemName'>
                    {therapist.name}
                </div>
                <div className='MeetTheTeamItemDesc'>
                    {therapist.position}
                </div>
            </div>
            <div className='MeetTheTeamItemProf'>
                {services}
            </div>
        </div>
    )
}
