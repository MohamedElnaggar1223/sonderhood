import React from 'react'
import FAQItem from './FAQItem'

export default function FAQ() 
{
    const questions = ["Why don't you have Insurance", "Is therapy confidential", "What kind of couples therapy do you offer?", "Is anyone going to see me during the session?"]
    const faqItems = questions.map((question, index) => <FAQItem key={index} questions={questions} index={index} question={question} />)

    return (
        <div className='FAQContainer'>
            <div className='FAQHeader'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <div className='FAQItems'>
                {faqItems}
            </div>
        </div>
    )
}
