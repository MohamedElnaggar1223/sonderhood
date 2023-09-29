import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function TherapyImportance() 
{
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef)

    const mainTitleAnimation = useAnimation()
    const mainDescAnimation = useAnimation()

    useEffect(() =>
    {
        if(titleInView) 
        {
            mainTitleAnimation.start('visible')
            mainDescAnimation.start('visible')
        }
        else
        {
            mainTitleAnimation.start('hidden')
            mainDescAnimation.start('hidden')
        }
        //eslint-disable-next-line
    }, [titleInView])



    return (
        <div style={{ overflowX: 'hidden' }} className='TherapyImportanceContainer'>
            <motion.div 
                variants={{ 
                    hidden: { opacity: 0, x: -200 }, 
                    visible: { opacity: 1, x: 0 } 
                }} 
                initial='hidden'
                animate={mainTitleAnimation}
                transition={{ duration: 0.5, delay: 0 }}
                className='TherapyImportanceTitle'
            >
                <div><span ref={titleRef}>WHY IS </span><span style={{ fontFamily: 'Raglika' }}>THERAPY</span></div><div> IMPORTANT?</div>
            </motion.div>
            <motion.div 
                variants={{ 
                    hidden: { opacity: 0, x: 200 }, 
                    visible: { opacity: 1, x: 0 } 
                }} 
                initial='hidden'
                animate={mainDescAnimation}
                transition={{ duration: 0.5, delay: 0 }}
                className='TherapyImportanceDesc'
            >
                Therapy is a structured, confidential process facilitated by trained professionals. It provides individuals with a supportive environment to explore and address their emotional, psychological, and behavioral challenges. Through open dialogue, therapists offer guidance, insights, and evidence-based strategies to help clients improve their mental well-being, cope with difficulties, and achieve personal growth. It is a collaborative journey that fosters self-awareness, resilience, and the development of effective coping skills to enhance one's overall quality of life.
            </motion.div>
        </div>
    )
}
