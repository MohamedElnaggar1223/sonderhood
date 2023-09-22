import React from 'react'
import { countries } from './countries'

export default function AtTheCenter() 
{
    const countriesOptions = countries.map(country => 
        (
            <option
                key={country}
                value={country}
            >
                {country}
            </option>
        ))

    return (
        <>
        <div style={{ height: '73vh', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', rowGap: '8%', marginBottom: '10%' }} className='BookSessionInfo'>
            <div className='BookSessionInfoCredentials BookSessionInfoName'>
                <label htmlFor='Name'>First Name</label>
                <input placeholder='Name...' id='Name' type='text' />
            </div>
            <div style={{ gridColumn: '3 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoName'>
                <label htmlFor='LastName'>Last Name</label>
                <input placeholder='Last Name...' id='LastName' type='text' />
            </div>
            <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoEmail'>
                <label htmlFor='Email'>Email</label>
                <input placeholder='Email...' id='Email' type='email' />
            </div>
            <div style={{ gridColumn: '3 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                <label htmlFor='DateOfBirth'>Date of Birth</label>
                <input id='DateOfBirth' type='date' />
            </div>
            <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                <label htmlFor='MobileNumber'>Mobile Number</label>
                <input placeholder='Mobile Number...' id='MobileNumber' type='text' />
            </div>
            <div style={{ gridColumn: '3 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                <label htmlFor='AdressofResidency'>Adress of Residency</label>
                <input placeholder='Adress of Residency...' id='AdressofResidency' type='text' />
            </div>
            <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                <label htmlFor='Nationality'>Nationality</label>
                <select defaultValue={countries.find(country => country === 'Egypt')} placeholder='Nationality...' id='Nationality'>
                    {countriesOptions}
                </select>
            </div>
            <div style={{ gridColumn: '3 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                <label htmlFor='MartialStatus'>Martial Status</label>
                <input placeholder='Martial Status...' id='MartialStatus' type='date' />
            </div>
            <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                <label htmlFor='Occupation'>Occupation</label>
                <input placeholder='Occupation...' id='Occupation' type='date' />
            </div>
        </div>

        <div style={{ height: '21.55vh', gridTemplateRows: '1fr 1fr', rowGap: '8%', marginBottom: '3%' }} className='BookSessionInfo'>
            <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoEmail'>
                <label htmlFor='Emergency'>Emergency Contact Name <span style={{ fontSize: '0.75vw', fontWeight: '400' }}>(has to be 18+ years old)</span></label>
                <input placeholder='Emergency...' id='Emergency' type='text' />
            </div>
            <div style={{ gridColumn: '3 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoName'>
                <label htmlFor='ContactNumber'>Emergency Contact Mobile Number</label>
                <input placeholder='01234567890' id='ContactNumber' type='text' />
            </div>
            <div style={{ gridColumn: '1 / span 2', marginTop: '2%' }} className='BookSessionInfoCredentials BookSessionInfoName'>
                <label htmlFor='Relation'>Relation to Emergency Contact</label>
                <input placeholder='Relation...' id='Relation' type='text' />
            </div>
        </div>
        </>
    )
}
