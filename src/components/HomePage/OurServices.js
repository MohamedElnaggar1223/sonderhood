import React from 'react'
import { useNavigate } from 'react-router-dom'
import { selectedServices } from '../../app/services/servicesSlice'
import { useSelector } from 'react-redux'

const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function OurServices() 
{
    const navigate = useNavigate()

    const services = useSelector(selectedServices)

    const displayServices = services?.map((service, index) => 
    {
        const number = Math.floor((index+1) / 10) === 0 ? `0${index+1}` : index+1
        return(
            <div key={index} onClick={() => navigate(`/Services/${service.title.replace(/\s/g, '')}`)} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
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
        <div className='OurServicesContainer'>
            <div className='OurServicesHeader'>
                <h1>OUR SERVICES</h1>
            </div>
            <div className='OurServicesItems'>
                {displayServices}
            </div>
        </div>
    )
}
