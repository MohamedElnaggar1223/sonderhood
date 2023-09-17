import React from 'react'
import HomeHeader from './HomeHeader'

export default function Home() 
{
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
                        <button>Book a Session</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
