import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import WhySonderHood from '../HomePage/WhySonderHood'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectedServices } from '../../app/services/servicesSlice'
import WhySonderHoodSec from './WhySonderHoodSec'
const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function Serives() 
{
    const navigate = useNavigate()

    const services = useSelector(selectedServices)

    const displayServices = services?.map((service, index) => 
    {
        const number = Math.floor((index+1) / 10) === 0 ? `0${index+1}` : index+1
        return(
            <div key={index} onClick={() => navigate(`/Services/${service.title.replace(/\s/g, '')}`)} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)], marginTop: '10%' }}>
                <div className='OurServicesItemNumber'>
                    {number}
                </div>
                <div className='OurServicesItemTitle'>
                    {service.title}
                </div>
                <div className='OurServicesItemBody'>
                    {service.description}
                </div>
            </div>
        )
    })

    return (
        <>
        <motion.div exit={{ x: '-100vw' }} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }} className='ServicesPageContainer'>
            <PagesHeader />
            <div className='ServicesPage'>
                <div className='ServicesPageHeader'>
                    <div className='ServicesPageHeaderTitle'>
                        OUR SERVICES
                    </div>
                </div>
                <div className='ServicesPageItems'>
                    <div className='ServicesPageItemsTopPart'>
                        {displayServices}
                    </div>
                </div>
            </div>
        </motion.div>
        <WhySonderHoodSec />
        </>
    )
}
