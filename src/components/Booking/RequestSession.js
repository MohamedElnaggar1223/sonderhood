import React, { useEffect, useState, useRef } from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import emailjs from '@emailjs/browser';
import useTitle from '../../hooks/useTitle';
import PhoneInput from 'react-phone-input-2';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const NAME_REGEX = /^[A-z]{2,36}/
const NUMBER_REGEX = /^[1-9]{1,3}[0][1][0125][0-9]{8}/

export default function BookSession() 
{   
    useTitle('Request A Booking')

    const [firstName, setFirstName] = useState('')
    const [verifyFirstName, setVerifyFirstName] = useState(false)
    const [lastName, setLastName] = useState('')
    const [verifyLastName, setVerifyLastName] = useState(false)
    const [email, setEmail] = useState('')
    const [day, setDay] = useState('Day')
    const [prefWay, setPrefWay] = useState('')
    const [number, setNumber] = useState('')
    const [verifyNumber, setVerifyNumber] = useState(false)

    const [location, setLocation] = useState('At The Center')

    const [err, setErr] = useState(false)
    const [succ, setSucc] = useState(false)

    const onFirstNameChanged = (e) => setFirstName(e.target.value)
    const onLastNameChanged = (e) => setLastName(e.target.value)
    const onEmailChanged = (e) => setEmail(e.target.value)
    const onDayChanged = (e) => setDay(e.target.value)
    const onPrefWayChanged = (e) => setPrefWay(e.target.value)

    const form = useRef();

    const sendEmail = (e) => {
        console.log(verifyFirstName, verifyLastName, verifyNumber)
        e.preventDefault();
        if(canRequest)
        {
            setSucc(true)
            setFirstName('')
            setLastName('')
            setEmail('')
            setNumber('')
            //@ts-ignore
            emailjs.sendForm(process.env.REACT_APP_service_id, process.env.REACT_APP_templateBook_id, form.current, process.env.REACT_APP_public_key)
                .then((result) => {
    
                }, (error) => {
    
                });
        }
        else
        {
            setErr(true)
        }
    };

    const daysOptions = days.map(day => <option value={day} key={day}>{day}</option>)

    useEffect(() => 
    {
        setVerifyFirstName(NAME_REGEX.test(firstName))
    }, [firstName])

    useEffect(() => 
    {
        setVerifyLastName(NAME_REGEX.test(lastName))
    }, [lastName])

    useEffect(() => 
    {
        setVerifyNumber(NUMBER_REGEX.test(number.replace(/\s/g,'')))
    }, [number])

    useEffect(() => 
    {
        setErr(false)
    }, [firstName, lastName, email, number, prefWay, day])

    const canRequest = [verifyFirstName, verifyLastName, verifyNumber].every(Boolean)

    const error = (
        <div className='BookError'>
            <p> All Fields Must Be Filled!</p>
        </div>
    )

    const success = (
        <div className='BookError'>
            <p style={{ color: 'green' }}> Request Sent Successfully!</p>
        </div>
    )

    return (
        <>
        <div className='BookSessionContainer'>
            <PagesHeader />
            <div className='BookSession'>
                <div className='BookSessionTitle'>
                    REQUEST TO BOOK A SESSION
                </div>
                {err && error}
                {succ && success}
                <div className='BookSessionLocation'>
                    <div className='BookSessionLocationTitle'>
                        Location
                    </div>
                    <div className='BookSessionLocationButtons'>
                        <button className={location === 'Online' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('Online')}>Online</button>
                        <button className={location === 'At The Center' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('At The Center')}>At The Center</button>
                    </div>
                </div>
                {/*//@ts-ignore*/}
                <form ref={form} style={{ height: '40vh', gridTemplateRows: '1fr 1fr 1fr' }} className='BookSessionInfo'>
                    <input hidden={true} value={number} name='number' />
                    <input hidden={true} value={location} name='location' />
                    <div className='BookSessionInfoCredentials BookSessionInfoFirstName'>
                        <label htmlFor='FirstName'>First Name</label>
                        <input onChange={onFirstNameChanged} value={firstName} placeholder='First Name...' id='FirstName' type='text' name='firstname' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoLastName'>
                        <label htmlFor='LastName'>Last Name</label>
                        <input onChange={onLastNameChanged} value={lastName} placeholder='Last Name...' id='LastName' type='text' name='lastname' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Email'>Email</label>
                        <input onChange={onEmailChanged} value={email} placeholder='Email...' id='Email' type='email' name='email' />
                    </div>
                    <div className='ContactUsContactMessageCredentials ContactUsContactMessageNumber'>
                        <label >Mobile Number</label>
                        <PhoneInput
                            country={"eg"}
                            enableSearch={true}
                            value={number}
                            onChange={(phone) => setNumber(phone)}
                            specialLabel='Number: '
                            inputStyle={{
                                width: "100%",
                                height: "100%",
                                padding: '0%',
                                background: "transparent",
                                border: "1px solid #90946B",
                                outline: "none",
                                boxSizing: "border-box",
                                boxShadow: "none",
                                color: "var(--Text, #90946B)",
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "100%",
                                textIndent: "7%",
                                borderRadius: '0',
                                marginLeft: '15%'
                            }}
                        />
                        {/* <input onChange={(e) => setNumber(e.target.value)} placeholder='Number...' id='Number' type='tel' /> */}
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Day'>Day</label>
                        <select onChange={onDayChanged} value={day} id='Day' name='day'>
                            {daysOptions}
                        </select>
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoReach'>
                        <label htmlFor='Reach'>How Do We Reach You?</label>
                        <select onChange={onPrefWayChanged} value={prefWay} id='Reach' name='Reach'>
                            <option value='WhatsApp'>WhatsApp</option>
                            <option value='Email'>Email</option>
                            <option value='Call'>Call</option>
                        </select>
                    </div>
                </form>
                <div className='BookSessionButton'>
                    <button onClick={sendEmail}>REQUEST A BOOKING</button>
                </div>
            </div>
        </div>
        </>
    )
}
