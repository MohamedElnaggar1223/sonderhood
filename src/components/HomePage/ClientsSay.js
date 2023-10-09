import React from 'react'
import { selectedTestimonials } from '../../app/testimonials/testimonialsSlice'
import { useSelector } from 'react-redux'

export default function ClientsSay() 
{
    const testimonials = useSelector(selectedTestimonials)

    const displayedTestimonials = testimonials.map((testimonial, index) => (
        <div key={index} className='ClientsSayItem'>
            <div className='ClientsSayItemRating'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none">
                    <g clipPath="url(#clip0_75_816)">
                        <path d="M18.3862 0.635889L21.8787 11.2632C22.0033 11.6427 22.361 11.8994 22.7646 11.8994H34.067C34.9692 11.8994 35.3446 13.0411 34.6145 13.5653L25.4706 20.1332C25.144 20.3678 25.0077 20.7835 25.1322 21.1629L28.6247 31.7903C28.9037 32.6386 27.9215 33.3442 27.1914 32.82L18.0475 26.2521C17.7209 26.0175 17.279 26.0175 16.9525 26.2521L7.80855 32.82C7.0784 33.3442 6.09617 32.639 6.37519 31.7903L9.8677 21.1629C9.99226 20.7835 9.85591 20.3678 9.52934 20.1332L0.386285 13.5657C-0.343864 13.0415 0.0315211 11.8998 0.933791 11.8998H12.2362C12.6397 11.8998 12.9974 11.6431 13.122 11.2637L16.6145 0.635889C16.8935 -0.212451 18.1076 -0.212451 18.3862 0.635889Z" fill="#D6DCA2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_75_816">
                            <rect width="35" height="33" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none">
                    <g clipPath="url(#clip0_75_816)">
                        <path d="M18.3862 0.635889L21.8787 11.2632C22.0033 11.6427 22.361 11.8994 22.7646 11.8994H34.067C34.9692 11.8994 35.3446 13.0411 34.6145 13.5653L25.4706 20.1332C25.144 20.3678 25.0077 20.7835 25.1322 21.1629L28.6247 31.7903C28.9037 32.6386 27.9215 33.3442 27.1914 32.82L18.0475 26.2521C17.7209 26.0175 17.279 26.0175 16.9525 26.2521L7.80855 32.82C7.0784 33.3442 6.09617 32.639 6.37519 31.7903L9.8677 21.1629C9.99226 20.7835 9.85591 20.3678 9.52934 20.1332L0.386285 13.5657C-0.343864 13.0415 0.0315211 11.8998 0.933791 11.8998H12.2362C12.6397 11.8998 12.9974 11.6431 13.122 11.2637L16.6145 0.635889C16.8935 -0.212451 18.1076 -0.212451 18.3862 0.635889Z" fill="#D6DCA2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_75_816">
                            <rect width="35" height="33" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none">
                    <g clipPath="url(#clip0_75_816)">
                        <path d="M18.3862 0.635889L21.8787 11.2632C22.0033 11.6427 22.361 11.8994 22.7646 11.8994H34.067C34.9692 11.8994 35.3446 13.0411 34.6145 13.5653L25.4706 20.1332C25.144 20.3678 25.0077 20.7835 25.1322 21.1629L28.6247 31.7903C28.9037 32.6386 27.9215 33.3442 27.1914 32.82L18.0475 26.2521C17.7209 26.0175 17.279 26.0175 16.9525 26.2521L7.80855 32.82C7.0784 33.3442 6.09617 32.639 6.37519 31.7903L9.8677 21.1629C9.99226 20.7835 9.85591 20.3678 9.52934 20.1332L0.386285 13.5657C-0.343864 13.0415 0.0315211 11.8998 0.933791 11.8998H12.2362C12.6397 11.8998 12.9974 11.6431 13.122 11.2637L16.6145 0.635889C16.8935 -0.212451 18.1076 -0.212451 18.3862 0.635889Z" fill="#D6DCA2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_75_816">
                            <rect width="35" height="33" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 35 33" fill="none">
                    <g clipPath="url(#clip0_75_816)">
                        <path d="M18.3862 0.635889L21.8787 11.2632C22.0033 11.6427 22.361 11.8994 22.7646 11.8994H34.067C34.9692 11.8994 35.3446 13.0411 34.6145 13.5653L25.4706 20.1332C25.144 20.3678 25.0077 20.7835 25.1322 21.1629L28.6247 31.7903C28.9037 32.6386 27.9215 33.3442 27.1914 32.82L18.0475 26.2521C17.7209 26.0175 17.279 26.0175 16.9525 26.2521L7.80855 32.82C7.0784 33.3442 6.09617 32.639 6.37519 31.7903L9.8677 21.1629C9.99226 20.7835 9.85591 20.3678 9.52934 20.1332L0.386285 13.5657C-0.343864 13.0415 0.0315211 11.8998 0.933791 11.8998H12.2362C12.6397 11.8998 12.9974 11.6431 13.122 11.2637L16.6145 0.635889C16.8935 -0.212451 18.1076 -0.212451 18.3862 0.635889Z" fill="#D6DCA2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_75_816">
                            <rect width="35" height="33" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className='ClientsSayItemComments'>
                <div className='ClientsSayItemCommentsTitle'>
                    “{testimonial.testimonial.slice(0, 25)}...”
                </div>
                <div className='ClientsSayItemCommentsBody'>
                    {testimonial.testimonial}    
                </div>
            </div>
            <div className='ClientsSayItemAuthor'>
                <div className='ClientsSayItemAuthorName'>
                    Anonymous
                </div>
                <div className='ClientsSayItemAuthorTherapy'>
                    {/* Individual therapy */}
                </div>
            </div>
        </div>
    ))

    return (
        <div className='ClientsSayContainer'>
            <div className='ClientsSayHeader'>
                <h1>WHAT OUR CLIENTS SAY</h1>
            </div>
            <div className='ClientsSayItems'>
                {displayedTestimonials}
            </div>
        </div>
    )
}
