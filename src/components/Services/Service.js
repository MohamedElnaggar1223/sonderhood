import React from 'react'
import { useParams } from 'react-router-dom'
import AvailableTherapists from './AvailableTherapists'
import FAQ from '../HomePage/FAQ'
import PagesHeader from '../PagesHeader/PagesHeader'

export default function Service() 
{
    const { service } = useParams()

    let selectedService
    if(service === 'GroupTherapy') selectedService = 'Group Therapy'
    else if(service === 'ChildTherapy') selectedService = 'Child Therapy'

    const title = selectedService?.split(' ')
    console.log(title)
    return (
        <>
            <div className='SingleServicePageContainer'>
                <PagesHeader />
                <div className='SingleServicePage'>
                    <div className='SingleServicePageDetails'>
                        <div className='SingleServicePageHeader'>
                            <div className='SingleServicePageHeaderTitle'>
                                {/*//@ts-ignore*/}
                                <h1>{title[0].toUpperCase()} <span>{title[1].toUpperCase()}</span></h1>
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
                            <button className='SingleServicePageBookButton'>BOOK A SESSION</button>
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
            </div>
            <AvailableTherapists selectedService={selectedService} />
            <FAQ />
        </>
    )
}
