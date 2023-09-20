import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import ReactPlayer from 'react-player'

export default function About() 
{
    return (
        <div className='AboutPageContainer'>
            <PagesHeader />
            <div className='AboutPage'>
                <div className='AboutPageOurStory'>
                    <div className='AboutPageOurStoryTitle'>
                        OUR STORY
                    </div>
                    <div className='AboutPageOurStoryDesc'>
                        <div className='AboutPageDescFirstPart'>
                            Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                        </div>
                        <div className='AboutPageDescSecPart'>
                            Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                        </div>
                    </div>
                </div>
                <div className='AboutPageVideo'>
                    {/*//@ts-ignore*/}
                    <iframe src="https://www.youtube.com/embed/-MKapbz0GIo?si=kxc7xo9Z2RFjCMsV&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* <ReactPlayer
                        style={{ height: '100%', width: '100%'}} 
                        playIcon=
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="97" viewBox="0 0 98 97" fill="none">
                                <circle cx="49.0001" cy="48.5001" r="48.1732" fill="#FFFDF4"/>
                                <path d="M61.2434 46.7679C62.5767 47.5377 62.5767 49.4622 61.2434 50.232L44.3784 59.969C43.0451 60.7388 41.3784 59.7765 41.3784 58.2369L41.3784 38.7629C41.3784 37.2233 43.0451 36.2611 44.3784 37.0309L61.2434 46.7679Z" fill="#464834"/>
                            </svg>
                        } 
                        stopOnUnmount={true}
                        url={'https://www.youtube.com/watch?v=-MKapbz0GIo'} 
                    /> */}
                </div>
            </div>
        </div>
    )
}
