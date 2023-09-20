import React from 'react'
import search from '../../imgs/Search.png'
import HelpButton from './HelpButton'

export default function LookingForHelp() 
{
    const buttons = ['Depression & Anxiety', 'Eating problems', 'Anxiety', 'Marriage problems', 'Body dysmorphic disorder (BDD)', 'Loneliness', 'Depression & Anxiety', 'Eating problems', 'Anxiety', 'Marriage problems', 'Body dysmorphic disorder (BDD)', 'Loneliness']
    const buttonItems = buttons.map((button, index) => <HelpButton key={index} button={button} />)
    
    return (
        <div className='LookingForHelpContainer'>
            <div className='LookingForHelpHeader'>
                <h1>I AM LOOKING FOR HELP WITH:</h1>
            </div>
            <div className='LookingForHelpSearch'>
                <input
                    placeholder='How are you feeling...'
                />
                <img src={search} alt='search'/>
            </div>
            <div className='LookingForHelpItemsContainer'>
                <div className='LookingForHelpItemsMostSearched'>
                    Most Searched:
                </div>
                <div className='LookingForHelpItems'>
                    {buttonItems}
                </div>
                <div className='LookingForHelpItemsButtons'>
                    <button className='LookingForHelpItemsFindButton'>FIND A THERAPIST</button>
                    <button className='LookingForHelpItemsAboutButton'>ABOUT US</button>
                </div>
            </div>
        </div>
    )
}
