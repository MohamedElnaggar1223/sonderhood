import React, { useEffect, useState } from 'react'
import searchImage from '../../imgs/Search.png'
import HelpButton from './HelpButton'
import { useNavigate } from 'react-router-dom'

export default function LookingForHelp({ therapists }) 
{
    const buttons = ['Depression & Anxiety', 'Eating problems', 'Anxiety', 'Marriage problems', 'Body dysmorphic disorder (BDD)', 'Loneliness', 'Depression & Anxiety', 'Eating problems', 'Anxiety', 'Marriage problems', 'Body dysmorphic disorder (BDD)', 'Loneliness']
    const buttonItems = buttons.map((button, index) => <HelpButton key={index} button={button} />)

    const [search, setSearch] = useState([''])
    const [showResults, setShowResults] = useState(false)

    console.log(search)
    console.log(showResults)

    useEffect(() => 
    {
        if(!search) setShowResults(false)
    }, [search])

    function handleSubmit(e)
    {
        e.preventDefault()
        setShowResults(true)

    }
    
    const navigate = useNavigate()
    
    return (
        <div className='LookingForHelpContainer'>
            <div className='LookingForHelpHeader'>
                <h1>I AM LOOKING FOR HELP WITH:</h1>
            </div>
            <form onSubmit={handleSubmit} className='LookingForHelpSearch'>
                <input
                    type='text'
                    placeholder='How are you feeling...'
                    value={search}
                    onChange={(e) => setSearch(prev => {
                        const array = prev
                        array.push(e.target.value)
                        return array
                    })}
                />
                <img src={searchImage} alt='search'/>
            </form>
            <div className='LookingForHelpItemsContainer'>
                <div className='LookingForHelpItemsMostSearched'>
                    Most Searched:
                </div>
                <div className='LookingForHelpItems'>
                    {buttonItems}
                </div>
                <div className='LookingForHelpItemsButtons'>
                    <button className='LookingForHelpItemsFindButton'>FIND A THERAPIST</button>
                    <button onClick={() => navigate('/About')} className='LookingForHelpItemsAboutButton'>ABOUT US</button>
                </div>
            </div>
        </div>
    )
}
