import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Therapists({ therapist }) 
{
    const navigate = useNavigate()

    //eslint-disable-next-line
    const services = therapist?.clientele?.map(service => 
        {
            if(service !== 'All Services')
            {
                return (
                    <div key={service} className='MeetTheTeamItemProfItem'>
                            {service}
                    </div>
                )
            }
        }
    )

    // if(therapist.name === 'Mirna Mostafa' || therapist.name === 'Leena Abdelgawad') return (<></>)

    return (
        <>
        { therapist ?<div onClick={() => navigate(`/Therapists/${therapist.name.split(" ").join("")}`)} className='MeetTheTeamItem'>
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
        : 
        <div className='NoTherapists'>
            No Therapists Available
        </div>
        }
        </>
    )
}
