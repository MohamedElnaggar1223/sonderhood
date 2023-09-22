import React, { useEffect, useState } from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const therapyTypes = ['Individual Therapy', 'Group Therapy', 'Child Therapy']

export default function BookSession() 
{
    const [location, setLocation] = useState('At The Center')
    const [month, setMonth] = useState('January')
    const [days, setDays] = useState(30)

    const therapyOptions = therapyTypes.map(therapy => (
        <option
            key={therapy}
            value={therapy}
        >
            {therapy}
        </option>
    ))

    const monthOptions = months.map(mon => 
        (
            <option
                key={mon}
                value={mon}
            >
                {mon}
            </option>
        ))

    let daysOptions = []
    for(let i = 1; i < days+1; i++)
    {
        daysOptions.push(
            <option
                key={i}
                value={i}
            >
                {i}
            </option>
        )
    }

    useEffect(() => 
    {
        const daysNumber = month === 'February'
        ? 28 
        : month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December'
        ? 31
        : 30

        setDays(daysNumber)
    }, [month])
    

    return (
        <div className='BookSessionContainer'>
            <PagesHeader />
            <div className='BookSession'>
                <div className='BookSessionTitle'>
                    BOOK A SESSION
                </div>
                <div className='BookSessionLocation'>
                    <div className='BookSessionLocationTitle'>
                        Location
                    </div>
                    <div className='BookSessionLocationButtons'>
                        <button style={{ marginRight: '0.5%', width: '10%'}} className={location === 'Online' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('Online')}>Online</button>
                        <button style={{ marginLeft: '0.5%', width: '15%'}} className={location === 'At The Center' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('At The Center')}>At The Center</button>
                    </div>
                </div>
                <div style={location === 'At The Center' ? { height: '90vh'} : { height: '52vh' }} className='BookSessionInfo'>
                    <div className='BookSessionInfoCredentials BookSessionInfoName'>
                        <label htmlFor='Name'>Name</label>
                        <input placeholder='Name...' id='Name' type='text' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Email'>Email</label>
                        <input placeholder='Email...' id='Email' type='email' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                        <label htmlFor='Therapist'>Therapist</label>
                        <input placeholder='Therapist...' id='Therapist' type='text' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoTherapyType'>
                        <label htmlFor='TherapyType'>TherapyType</label>
                        <select id='TherapyType'>
                            {therapyOptions}
                        </select>
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoDay'>
                        <label htmlFor='Day'>Day</label>
                        <select id='Day'>
                            {daysOptions}
                        </select>
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoMonth'>
                        <label htmlFor='Month'>Month</label>
                        <select onChange={(e) => setMonth(e.target.value)} id='Month'>
                            {monthOptions}
                        </select>
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoType'>
                        <label htmlFor='Type'>Session type</label>
                        <select placeholder='Type...' id='Type' >
                            <option
                                value='Assessment Session'
                            >
                                Assessment Session
                            </option>
                        </select>
                    </div>
                </div>
                <div className='BookSessionAvailableSlots'>
                    <div className='BookSessionAvailableSlotsTitle'>
                        Available Slots
                    </div>
                    <div className='BookSessionAvailableSlotsTimings'>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                        <div className='BookSessionAvailableSlotsTimingsSlot'>
                            7:00AM-8:00AM
                        </div>
                    </div>
                </div>
                <div className='BookSessionButton'>
                    <button>BOOK A SESSION</button>
                </div>
            </div>
        </div>
    )
}
