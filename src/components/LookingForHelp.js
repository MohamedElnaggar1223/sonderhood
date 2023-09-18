import React from 'react'
import search from '../imgs/Search.png'

const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function LookingForHelp() 
{
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
            <div className='LookingForHelpItems'>

            </div>
        </div>
    )
}
