import React, { useEffect, useRef, useState } from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import map from '../../imgs/map.png'
import topleft from '../../imgs/topleft.png'
import botleft from '../../imgs/botleft.png'
import topright from '../../imgs/topright.png'
import botright from '../../imgs/botright.png'
import mid from '../../imgs/mid.png'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const NAME_REGEX = /^[A-z]{2,24}\s[A-z]{2,24}/
const NUMBER_REGEX = /^[0][1][0125][0-9]{8}/

export default function ContactUs() 
{
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [verifyName, setVerifyName] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [verifyNumber, setVerifyNumber] = useState(false)

    useEffect(() => 
    {
        setVerifyName(NAME_REGEX.test(name))
    }, [name])

    useEffect(() => 
    {
        setVerifyNumber(NUMBER_REGEX.test(number))
    }, [number])

    const canSend = [verifyName, verifyNumber, message.length].every(Boolean)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setMessage('')
        //@ts-ignore
        emailjs.sendForm(process.env.REACT_APP_service_id, process.env.REACT_APP_template_id, form.current, process.env.REACT_APP_public_key)
            .then((result) => {

            }, (error) => {

            });
    };
    
    return (
        <>
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
                            <Link to='https://maps.app.goo.gl/qf4ZGCDJwEFf3dfK7'><img src={map} alt='map' /></Link>
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
                            {/*//@ts-ignore*/}
                            <form ref={form} className='ContactUsContactMessageInfo'>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageName'>
                                    <label htmlFor='Name'>Name:</label>
                                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder='Name...' id='Name' type='text' name='name' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageEmail'>
                                    <label htmlFor='Email'>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} name='email' placeholder='Email...' id='Email' type='email' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageNumber'>
                                    <label htmlFor='Number'>Number</label>
                                    <input onChange={(e) => setNumber(e.target.value)} placeholder='Number...' id='Number' type='tel' />
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageDOB'>
                                    <label htmlFor='DOB'>DOB:</label>
                                    <select></select>
                                </div>
                                <div className='ContactUsContactMessageCredentials ContactUsContactMessageMessage'>
                                    <label htmlFor='Send us a message'>Send us a message:</label>
                                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' style={{ paddingTop: '2.5%', textIndent: '0%', paddingLeft: '2.5%', justifyContent: 'flex-start', alignItems: 'flex-start' }} placeholder='' id='Send us a message' />
                                </div>
                            </form>
                            <div className='ContactUsContactMessageButton'>
                                {/* <button onClick={() => navigate('/BookASession')}>BOOK A SESSION</button> */}
                                <button disabled={!canSend} onClick={sendEmail}>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='OurSpaceContainer'>
            <div className='OurSpace'>
                <div className='OurSpaceHeading'>
                    <h1>OUR <span>SPACE</span></h1>
                </div>
                <div className='OurSpaceImages'>
                    <div className='OurSpaceImagesLeft'>
                        <img src={topleft} alt='tl' />
                        <img src={botleft} alt='bl' />
                    </div>
                    <div className='OurSpaceImagesMid'>
                        <img src={mid} alt='m' />
                    </div>
                    <div className='OurSpaceImagesRight'>
                        <img src={topright} alt='tr' />
                        <img src={botright} alt='br' />
                    </div>
                </div>
                <div className='OurSpaceButton'>
                    <button onClick={() => navigate('/RequestASession')}>BOOK A SESSION</button>
                </div>
            </div>
        </div>
        </>
    )
}
