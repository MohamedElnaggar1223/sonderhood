import React, { useState } from 'react'

export default function HelpButton({ button, handleClick }) 
{
    const [clicked, setClicked] = useState(false)
    return (
        <button 
            style={clicked ? { background: '#D6DCA2', border: '0', fontWeight: '600', width: '105%' } : {}} 
            onClick={() => { 
                setClicked(prev => !prev)
                handleClick()
            }}
        >
            {button}
        </button>
    )
}
