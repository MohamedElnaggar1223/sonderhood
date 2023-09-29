import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectedServices } from '../../app/services/servicesSlice'
import { useSelector } from 'react-redux'
import { motion, useAnimation, useInView } from 'framer-motion'

const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function OurServices() 
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

    const services = useSelector(selectedServices)

    const displayServices = services?.map((service, index) => 
    {
        
        const number = Math.floor((index+1) / 10) === 0 ? `0${index+1}` : index+1
        return(
            <motion.div 
                key={index} 
                onClick={() => navigate(`/Services/${service.title.replace(/\s/g, '')}`)} 
                className='OurServicesItemContainer' 
                style={{ background: colors[Math.floor(Math.random() * 3)] }}
                variants={{ 
                    hidden: { opacity: 0, y: 300 }, 
                    visible: { opacity: 1, y: 0 }
                }} 
                initial='hidden'
                animate={mainRefAnimation}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className='OurServicesItemNumber'>
                    {number}
                </div>
                <div className='OurServicesItemTitle'>
                    {service.title}
                </div>
                <div className='OurServicesItemBody'>
                    {service.description}
                </div>
            </motion.div>
        )
    })

    return (
        <div className='OurServicesContainer'>
            <div className='OurServicesHeader'>
                <h1>OUR SERVICES</h1>
            </div>
            <div ref={ref} className='OurServicesItems'>
                {displayServices}
            </div>
        </div>
    )
}
