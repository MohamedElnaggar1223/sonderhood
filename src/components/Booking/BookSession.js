import React, { useState } from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function BookSession() 
{
    const [location, setLocation] = useState('At The Center')
    const [month, setMonth] = useState('January')

    const monthOptions = months.map(mon => 
        (
            <option
                key={mon}
                value={mon}
            >
                {mon}
            </option>
        ))

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
                <div style={location === 'At The Center' ? { height: '90vh'} : { height: '48vh' }} className='BookSessionInfo'>
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
                        <input placeholder='TherapyType...' id='TherapyType' type='text' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoDay'>
                        <label htmlFor='Day'>Day</label>
                        <select id='Day'></select>
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoMonth'>
                        <label htmlFor='Month'>Month</label>
                        <select id='Month'>
                            {monthOptions}
                        </select>
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoType'>
                        <label htmlFor='Type'>Session type</label>
                        <select placeholder='Type...' id='Type' >

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
