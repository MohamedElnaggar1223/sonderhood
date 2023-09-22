import React, { useEffect, useState } from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import Rules from './Rules';
import Online from './Online';
import AtTheCenter from './AtTheCenter';

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const therapyTypes = ['Individual Therapy', 'Group Therapy', 'Child Therapy']

const slots = ['7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM']

export default function BookSession() 
{
    const [location, setLocation] = useState('At The Center')
    const [month, setMonth] = useState('January')
    const [days, setDays] = useState(30)
    const [slot, setSlot] = useState(-1)

    const displayedSlots = slots.map((slotTime, index) => (
        <div style={{ cursor: 'pointer' }} onClick={() => setSlot(index)} key={index} className={slot === index ? 'BookSessionAvailableSlotsTimingsSlotSelected' : 'BookSessionAvailableSlotsTimingsSlot'}>
                {slotTime}
        </div>
    ))

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
        <>
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
                {location === 'Online' 
                ?   <Online therapyOptions={therapyOptions} daysOptions={daysOptions} displayedSlots={displayedSlots} monthOptions={monthOptions} setMonth={setMonth}/>       
                :   <AtTheCenter />
                }
                <div className='BookSessionButton'>
                    <button>BOOK A SESSION</button>
                </div>
            </div>
        </div>
        <Rules />
        </>
    )
}
