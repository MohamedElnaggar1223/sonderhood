import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MeetTheTeamTherapist({ index, therapist }) 
{
    const navigate = useNavigate()
    const ref = useRef(null)
    const refInView = useInView(ref)

    const mainRefAnimation = useAnimation()

    useEffect(() =>
    {
        if(refInView) 
        {
            mainRefAnimation.start('visible')
        }
        else
        {
            mainRefAnimation.start('hidden')
        }
        //eslint-disable-next-line
    }, [refInView])

    const services = therapist.clientele.map((service) => <div key={service} className='MeetTheTeamItemProfItem'>{service}</div>)

    // if(therapist.name === 'Mirna Mostafa' || therapist.name === 'Leena Abdelgawad') return (<></>)

    return (
        <motion.div 
            onClick={() => navigate(`/Therapists/${therapist.name.split(" ").join("")}`)} 
            className='MeetTheTeamItem'
            // variants={{ 
            //     hidden: { opacity: 0 }, 
            //     visible: { opacity: 1 }
            // }} 
            // initial='hidden'
            // animate={mainRefAnimation}
            // transition={{ duration: 0.25, delay: 0.35 }}
        >
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
        </motion.div>
    )
}
