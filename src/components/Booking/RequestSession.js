import React, { useEffect, useState, useRef } from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import Rules from './Rules';
import emailjs from '@emailjs/browser';

const NAME_REGEX = /^[A-z]{2,24}\s[A-z]{2,24}/
const NUMBER_REGEX = /^[0][1][0125][0-9]{8}/

export default function BookSession() 
{   
    const [name, setName] = useState('')
    const [verifyName, setVerifyName] = useState(false)
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [verifyNumber, setVerifyNumber] = useState(false)

    const onNameChanged = (e) => setName(e.target.value)
    const onEmailChanged = (e) => setEmail(e.target.value)
    const onNumberChanged = (e) => setNumber(e.target.value)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setNumber('')
        //@ts-ignore
        emailjs.sendForm(process.env.REACT_APP_service_id, process.env.REACT_APP_template_id, form.current, process.env.REACT_APP_public_key)
            .then((result) => {

            }, (error) => {

            });
    };

    useEffect(() => 
    {
        setVerifyName(NAME_REGEX.test(name))
    }, [name])

    useEffect(() => 
    {
        setVerifyNumber(NUMBER_REGEX.test(number))
    }, [number])

    const canRequest = [verifyName, verifyNumber].every(Boolean)

    return (
        <>
        <div className='BookSessionContainer'>
            <PagesHeader />
            <div className='BookSession'>
                <div className='BookSessionTitle'>
                    REQUEST TO BOOK A SESSION
                </div>
                {/*//@ts-ignore*/}
                <form ref={form} style={{ height: '25vh', gridTemplateRows: '1fr 1fr' }} className='BookSessionInfo'>
                    <div className='BookSessionInfoCredentials BookSessionInfoName'>
                        <label htmlFor='Name'>Name</label>
                        <input onChange={onNameChanged} value={name} placeholder='Name...' id='Name' type='text' name='name' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Email'>Email</label>
                        <input onChange={onEmailChanged} value={email} placeholder='Email...' id='Email' type='email' name='email' />
                    </div>
                    <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                        <label htmlFor='MobileNumber'>Mobile Number</label>
                        <input onChange={onNumberChanged} value={number} placeholder='Mobile Number...' id='MobileNumber' type='text' name='number' />
                    </div>
                </form>
                <div className='BookSessionButton'>
                    <button onClick={sendEmail} disabled={!canRequest}>BOOK A SESSION</button>
                </div>
            </div>
        </div>
        <Rules />
        </>
    )
}
