import React, { useEffect, useState } from 'react'
import FAQItem from './FAQItem'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Config/firebaseConfig'

export default function FAQ({ faqs }) 
{
    const [faqsHomePage, setFaqsHomePage] = useState([])

    const homepageFaqsCollection = collection(db, 'homepageFaqs')
    useEffect(() => 
    {
        const getFaqs = async () => 
        {
            const data = await getDocs(homepageFaqsCollection)
            //@ts-ignore
            setFaqsHomePage(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getFaqs()
    }, [])

    //@ts-ignore
    const faqsData = faqs?.length !== 0 ? faqs : faqsHomePage[0]?.faqs ? faqsHomePage[0]?.faqs : []

    const faqItems = faqsData?.map((question, index) => <FAQItem key={index} faq={question} faqs={faqsData} index={index} />)

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
