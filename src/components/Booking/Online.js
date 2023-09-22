import React from 'react'

export default function Online({ therapyOptions, daysOptions, monthOptions, displayedSlots, setMonth }) 
{
    return (
        <>
        <div style={{ height: '52vh' }} className='BookSessionInfo'>
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
                {displayedSlots}
            </div>
        </div>
        </>
    )
}
