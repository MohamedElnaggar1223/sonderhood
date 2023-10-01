import React, { useEffect, useState } from 'react'
import searchImage from '../../imgs/Search.png'
import HelpButton from './HelpButton'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectedTherapists } from '../../app/therapists/therapistsSlice'
import MatchingTherapists from './MatchingTherapists'

export default function LookingForHelp() 
{
    const therapists = useSelector(selectedTherapists)

    const buttons = ['Depression', 'Eating Disorder', 'Anxiety', 'Marriage', 'Body Dysmorphia', 'Relationship', 'Personality Disorder', 'Addiction', 'Self esteem', 'Social anxiety', 'OCD', 'Trauma', 'Codependency', 'Abusive parents', 'Family problems']
    const buttonItems = buttons.map((button, index) => <HelpButton key={index} button={button} />)

    const [searchValue, setSearchValue] = useState('')
    const [search, setSearch] = useState([])
    const [showResults, setShowResults] = useState(false)

    useEffect(() => 
    {
        if(!search) setShowResults(false)
    }, [search])

    function handleSubmit(e)
    {
        e.preventDefault()
        setShowResults(true)

    }

    function handleSearch()
    {
        const array = search
        array.push(searchValue)
        //@ts-ignore
        setSearch(array)
        console.log(search)
        setShowResults(true)
    }
    
    const navigate = useNavigate()

    return (
        <>
        <div className='LookingForHelpContainer'>
            <div className='LookingForHelpHeader'>
                <h1>I AM LOOKING FOR A THERAPIST TO HELP ME WITH MY:</h1>
            </div>
            <form onSubmit={handleSubmit} className='LookingForHelpSearch'>
                <input
                    type='text'
                    placeholder='How are you feeling...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
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
                    <button onClick={handleSearch} className='LookingForHelpItemsFindButton'>FIND A THERAPIST</button>
                    {/* <button onClick={() => navigate('/About')} className='LookingForHelpItemsAboutButton'>ABOUT US</button> */}
                </div>
            </div>
        </div>
        { showResults && <MatchingTherapists search={therapists} /> }
        </>
    )
}
