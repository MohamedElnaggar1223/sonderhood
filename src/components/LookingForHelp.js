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
            <div className='LookingForHelpItemsContainer'>
                <div className='LookingForHelpItemsMostSearched'>
                    Most Searched:
                </div>
                <div className='LookingForHelpItems'>
                    <button>Depression & Anxiety</button>
                    <button>Eating problems</button>
                    <button>Anxiety</button>
                    <button>Marriage problems</button>
                    <button>Body dysmorphic disorder {'(BDD)'}</button>
                    <button>Loneliness</button>
                    <button>Depression & Anxiety</button>
                    <button>Eating problems</button>
                    <button>Anxiety</button>
                    <button>Marriage problems</button>
                    <button>Body dysmorphic disorder {'(BDD)'}</button>
                    <button>Loneliness</button>
                </div>
                <div className='LookingForHelpItemsButtons'>
                    <button>FIND A THERAPIST</button>
                    <button>ABOUT US</button>
                </div>
            </div>
        </div>
    )
}
