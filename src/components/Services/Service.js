import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AvailableTherapists from './AvailableTherapists'
import FAQ from '../HomePage/FAQ'
import PagesHeader from '../PagesHeader/PagesHeader'
import { motion } from 'framer-motion'

export default function Service({ therapists }) 
{
    const { service } = useParams()
    const navigate = useNavigate()

    let selectedService
    if(service === 'GroupTherapy') selectedService = 'Group Therapy'
    else if(service === 'ChildTherapy') selectedService = 'Child Therapy'
    else selectedService = 'Individual Therapy'

    const title = selectedService?.split(' ')
    console.log(title)
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
                                <h1>{title[0]?.toUpperCase()} <span>{title[1]?.toUpperCase()}</span></h1>
                            </div>
                            <div className='SingleServicePageHeaderDesc'>
                                Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. 
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
