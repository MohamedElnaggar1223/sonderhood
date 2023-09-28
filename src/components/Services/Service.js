import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AvailableTherapists from './AvailableTherapists'
import FAQ from '../HomePage/FAQ'
import PagesHeader from '../PagesHeader/PagesHeader'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectedServices } from '../../app/services/servicesSlice'
import { selectedTherapists } from '../../app/therapists/therapistsSlice'

export default function Service() 
{
    const { service } = useParams()
    const navigate = useNavigate()
    const services = useSelector(selectedServices)
    const therapists = useSelector(selectedTherapists)

    const selectedService = services?.find(serviceItem => serviceItem.title.replace(/\s/g, '') === service)

    const title = selectedService?.title.split(' ')

    const selectedServiceTitle = title.map((text, index) => index === 0 ? text : <span> {text}</span>)
    
    return (
        <>
            <motion.div 
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }} 
                className='SingleServicePageContainer'
            >
                <PagesHeader />
                <div className='SingleServicePage'>
                    <div className='SingleServicePageDetails'>
                        <div className='SingleServicePageHeader'>
                            <div className='SingleServicePageHeaderTitle'>
                                {/*//@ts-ignore*/}
                                <h1>{selectedServiceTitle}</h1>
                            </div>
                            <div className='SingleServicePageHeaderDesc'>
                                {selectedService.description}    
                            </div>
                        </div>
                        <div className='SingleServicePagePoints'>
                            <ul>
                                <li>Communication difficulties</li>
                                <li>Issues with family-in-law</li>
                                <li>Decline in sexual desire</li>
                                <li>Jealousy</li>
                                <li>Finding family/work balance</li>
                            </ul>
                        </div>
                        <div className='SingleServicePageBook'>
                            <button onClick={() => navigate('/RequestASession')} className='SingleServicePageBookButton'>BOOK A SESSION</button>
                        </div>
                    </div>
                    <div className='SingleServicePageShapes'>
                        <div className='IVectors'>
                            <div className='IVector'>

                            </div>
                            <div className='IVector'>
                                
                            </div>
                            <div className='IVectorTilted'>
                                
                            </div>
                        </div>
                        <div className='ICircles'>
                            <div className='ICircle'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <AvailableTherapists therapists={therapists} selectedService={selectedService} />
            <FAQ />
        </>
    )
}
