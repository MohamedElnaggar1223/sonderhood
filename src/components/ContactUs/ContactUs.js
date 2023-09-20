import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import { useNavigate } from 'react-router-dom'
import map from '../../imgs/map.png'

export default function ContactUs() 
{
    const navigate = useNavigate()

    return (
        <div className='ContactUsPageContainer'>
            <PagesHeader />
            <div className='ContactUsPage'>
                <div className='ContactUsPageOurStory'>
                    <div className='ContactUsPageOurStoryTitle'>
                        FIND US
                    </div>
                    <div className='ContactUsPageOurStoryDesc'>
                        <div className='ContactUsPageDescFirstPart'>
                            Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                        </div>
                        <div className='ContactUsPageDescSecPart'>
                            Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                        </div>
                    </div>
                </div>
                <div className='ContactUsContact'>
                    <div className='ContactUsContactMap'>
                        <div className='ContactUsContactMapImage'>
                            <img src={map} alt='map' />
                        </div>
                        <div className='ContactUsContactMapInfo'>
                            201094292553 <br />
                            inquiries@thesonderhood.net<br />
                            Trivium Square, New Cairo<br />
                        </div>
                    </div>
                    <div className='ContactUsContactMessage'>
                        <div className='ContactUsContactMessageContainer'>
                            <div className='ContactUsContactMessageTitle'>
                                SEND US A MESSAGE
                            </div>
                            <div className='ContactUsContactMessageInfo'>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageName'>
                                    <label htmlFor='Name'>Name:</label>
                                    <input placeholder='Name...' id='Name' type='text' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageEmail'>
                                    <label htmlFor='Email'>Email</label>
                                    <input placeholder='Email...' id='Email' type='email' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageNumber'>
                                    <label htmlFor='Number'>Number</label>
                                    <input placeholder='Number...' id='Number' type='tel' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageDOB'>
                                    <label htmlFor='DOB'>DOB:</label>
                                    <input placeholder='' id='DOB' type='text' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageMessage'>
                                    <label htmlFor='Send us a message'>Send us a message:</label>
                                    <input placeholder='' id='Send us a message' type='text' />
                                </div>
                            </div>
                            <div className='ContactUsContactMessageButton'>
                                <button>BOOK A SESSION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
