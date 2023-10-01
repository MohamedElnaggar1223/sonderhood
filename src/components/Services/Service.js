import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AvailableTherapists from './AvailableTherapists'
import FAQ from '../HomePage/FAQ'
import PagesHeader from '../PagesHeader/PagesHeader'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectedServices } from '../../app/services/servicesSlice'
import { selectedTherapists } from '../../app/therapists/therapistsSlice'
import useTitle from '../../hooks/useTitle'

export default function Service() 
{
    const { service } = useParams()
    const navigate = useNavigate()
    const services = useSelector(selectedServices)
    const therapists = useSelector(selectedTherapists)
    const [availableTherapists, setAvailableTherapists] = useState(therapists)

    const selectedService = services?.find(serviceItem => serviceItem.title.replace(/\s/g, '') === service)

    useTitle(`${selectedService.title}`)
    
    //@ts-ignore
    useEffect(() => 
    {
        // if(effRan.current === true || process.env.NODE_ENV !== 'development')
        // {
        //     const getFaqs = async (therapist) => 
        //     {
        //         const dataRef = doc(db, "therapists", therapist.id)
        //         const data = await getDoc(dataRef)
        //         //@ts-ignore
        //         setAvailableTherapists(prev => {
        //             const array = prev
        //             //@ts-ignore
        //             array.push(data.data())
        //             return array
        //         })
        //         setRan(true)
        //     }

        //     selectedService?.therapists?.length && selectedService.therapists?.map(therapist => getFaqs(therapist))
        // }

        // return () => effRan.current = true

        if(selectedService)
        {
            let therapistsArray = []
            selectedService.therapists.map(therapist => 
                {
                    const foundTherapist = therapists.find(data => data.id === therapist.id)
                    therapistsArray.push(foundTherapist)
                })
            setAvailableTherapists(therapistsArray)
        }
        else setAvailableTherapists(therapists)
        //eslint-disable-next-line
    }, [])


    const title = selectedService?.title.split(' ')

    const selectedServiceTitle = title?.map((text, index) => index === 0 ? text : <span key={index}> {text}</span>)
    
    const displayPoints = selectedService?.points?.map((point, index) => <li key={index}> {point}</li>)
    
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
                                {selectedService?.description}    
                            </div>
                        </div>
                        <div className='SingleServicePagePoints'>
                            <ul>
                                {displayPoints}
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
            <AvailableTherapists availableTherapists={availableTherapists} therapists={therapists} selectedService={selectedService} />
            <FAQ faqs={selectedService?.faqs} />
        </>
    )
}
