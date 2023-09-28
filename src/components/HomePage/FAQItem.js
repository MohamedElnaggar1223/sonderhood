import React, { useState } from 'react'

export default function FAQItem({ faq, faqs, index }) 
{
    const [shown, setShown] = useState(false)

    const openIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
            <path d="M19.1582 4.1792V32.6792" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.9082 18.4292H33.4082" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
            <path d="M4.7627 33.25L33.2627 4.75" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33.2627 33.25L4.7627 4.75" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

    return (
        <>
        <div style={ faqs.length === (index+1) ? {} : shown ? {} : {borderBottom: '1px solid #000'} } onClick={() => setShown(prev => !prev)} className='FAQItem'>
            <div className='FAQItemHeading'>
                <div className='FAQItemHeadingNumber'>
                    { Math.floor((index+1) / 10) === 0 ? `0${index+1}` : index+1 }
                </div>
                <div className='FAQItemHeadingQuestion'>
                    {faq.question}
                </div>
                <div className='FAQItemHeadingController'>
                    { shown ? closeIcon : openIcon }
                </div>
            </div>
        </div>
        <div className={shown ? 'FAQItemAnswerWrapper open' : 'FAQItemAnswerWrapper'}>
            {shown && 
                <div style={ faqs.length === (index+1) ? {} : {borderBottom: '1px solid #000'} } className={'FAQItemAnswerTemp'}>
                    {faq.answer}    
                </div>
            }
        </div>
        </>
    )
}
