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
                        <h1>Your Safe Haven</h1>
                    </div>
                    <div className='HomePageBookSessionButton'>
                        <button>Book a Session</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
