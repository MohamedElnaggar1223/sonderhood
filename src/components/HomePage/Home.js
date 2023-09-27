import React from 'react'
import HomeHeader from './HomeHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Home() 
{
    const navigate = useNavigate()

    return (
        <div className='HomePageContainer'>
            <HomeHeader />
            <div className='HomePage'>
                <div className='IVectors'>
                    <div className='IVector'></div>
                    <div className='IVector'></div>
                    <div className='IVectorTilted'></div>
                </div>
                <div className='HomePageBookSession'>
                    <div className='HomePageBookSessionText'>
                        <h6>Your</h6> <h6>Safe</h6> <h6>Haven</h6>
                    </div>
                    <div className='HomePageBookSessionButton'>
                        <button onClick={() => navigate('/RequestASession')}>Book A Session <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
