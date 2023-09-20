import React from 'react'

export default function Therapist({ therapist }) 
{
    const services = therapist.services.map(service => 
        {
            if(service !== 'All Services')
            {
                return (
                    <div className='MeetTheTeamItemProfItem'>
                            {service}
                    </div>
                )
            }
        }
    )

    return (
        <div className='MeetTheTeamItem'>
            <div className='MeetTheTeamItemImage'>
                <img src={therapist.image} alt='t4' />
            </div>
            <div className='MeetTheTeamItemInfo'>
                <div className='MeetTheTeamItemName'>
                    {therapist.name}
                </div>
                <div className='MeetTheTeamItemDesc'>
                    {therapist.desc}
                </div>
            </div>
            <div className='MeetTheTeamItemProf'>
                {services}
            </div>
        </div>
    )
}
