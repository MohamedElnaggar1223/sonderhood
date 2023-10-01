import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PagesHeader from '../PagesHeader/PagesHeader'
import book from '../../imgs/book.png'
import Online from '../Booking/Online'
import { useSelector } from 'react-redux'
import { selectedTherapists } from '../../app/therapists/therapistsSlice'
import { selectedBlogs } from '../../app/blogs/blogsSlice'
import useTitle from '../../hooks/useTitle'
const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const therapyTypes = ['Individual Therapy', 'Group Therapy', 'Child Therapy']
const slots = ['7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM']

export default function Therapist() 
{
    const therapists = useSelector(selectedTherapists)
    const blogs = useSelector(selectedBlogs)

    const { therapist } = useParams()

    const navigate = useNavigate()

    const [location, setLocation] = useState('At The Center')
    const [month, setMonth] = useState('January')
    const [days, setDays] = useState(30)
    const [slot, setSlot] = useState(-1)
    //eslint-disable-next-line
    const [width, setWidth] = useState(window.innerWidth <= 900)

    const displayedSlots = slots.map((slotTime, index) => (
        <div style={{ cursor: 'pointer' }} onClick={() => setSlot(index)} key={index} className={slot === index ? 'BookSessionAvailableSlotsTimingsSlotSelected' : 'BookSessionAvailableSlotsTimingsSlot'}>
                {slotTime}
        </div>
    ))

    const therapyOptions = therapyTypes.map(therapy => (
        <option
            key={therapy}
            value={therapy}
        >
            {therapy}
        </option>
    ))

    const monthOptions = months.map(mon => 
        (
            <option
                key={mon}
                value={mon}
            >
                {mon}
            </option>
        ))

    let daysOptions = []
    for(let i = 1; i < days+1; i++)
    {
        daysOptions.push(
            <option
                key={i}
                value={i}
            >
                {i}
            </option>
        )
    }

    useEffect(() => 
    {
        const daysNumber = month === 'February'
        ? 28 
        : month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December'
        ? 31
        : 30

        setDays(daysNumber)
    }, [month])

    const selectedTherapist = therapists.find(therapistProfile => therapistProfile.name.split(" ").join("") === therapist)

    useTitle(`${selectedTherapist.name}`)

    const services = selectedTherapist?.clientele.map((service) => <div key={service} className='TherapistProfileService'>{service}</div>)
    
    const certificates = selectedTherapist?.certificates.map((certificate, index) => 
        (
            <div key={index} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                <div className='OurServicesItemNumber'>
                    {certificate.year}
                </div>
                <div className='OurServicesItemTitle'>
                    {certificate.title}
                </div>
                <div className='OurServicesItemBody'>
                    {certificate.description}
                </div>
            </div>
        ))

    const displayedBlogs = blogs.map(blog => 
        (
            <div key={blog.id} className='OurBlogItemContainer'>
                <div className='OurBlogItemImage'>
                    <img src={blog.image} alt='c1' />
                </div>
                <div className='OurBlogItemTitle'>
                    {blog.title}
                </div>
                <div className='OurBlogItemBody'>
                    {blog.description}
                </div>
            </div>
        ))
    
    return (
        <>
        <div className='TherapistProfileContainer'>
            <PagesHeader />
            <div className='TherapistProfile'>
                <div className='TherapistProfileImage'>
                    <img src={selectedTherapist?.image} alt='profile' />
                </div>
                <div className='TherapistProfileInfo'>
                    <div className='TherapistProfileName'>
                        {selectedTherapist?.name}
                    </div>
                    <div className='TherapistProfileDesc'>
                        {selectedTherapist?.position}
                    </div>
                    <div className='TherapistProfileServices'>
                        {services}
                    </div>
                    <div className='TherapistProfileButton'>
                        <button onClick={() => navigate('/RequestASession')}>REQUEST A BOOKING</button>
                    </div>
                </div>
            </div>
        </div>
        {selectedTherapist.quote && <div className='TestimonialsContainer'>
            <div className='TestimonialsImage'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.8286 0V10.9714C15.3264 10.9714 10.9186 11.1793 10.9184 21.1958V26.4H21.6V48H0V26.4V21.1958C0 13.3208 2.03795 7.47291 6.49047 3.81413C9.57054 1.28323 13.2195 0 17.8286 0ZM44.2286 0V10.9714C41.7264 10.9714 37.3186 11.1793 37.3184 21.1958V26.4H48V48H26.4V26.4V21.1958C26.4 13.3208 28.438 7.47291 32.8905 3.81413C35.9705 1.28323 39.6195 0 44.2286 0Z" fill="#464834"/>
                </svg>
            </div>
            <div className='TestimonialsText'>
                {selectedTherapist.quote}
            </div>
            <div className='TestimonialsDesc'>
                Lorem ipsum dolor sit amet consectetur. Ut ullamcorper id pellentesque aenean libero. Lorem ipsum dolor sit amet consectetur. Ut ullamcorper id pellentesque aenean libero. 
            </div>
        </div>}
        <div className='OurServicesContainer'>
            <div className='OurServicesHeader'>
                <h1>CERTIFICATES</h1>
            </div>
            <div className='OurServicesItems'>
                {certificates}
            </div>
        </div>
        <div className='OurBlogContainer'>
            <div className='OurBlogHeader'>
                <h1>BLOGS</h1>
            </div>
            <div className='OurBlogItems'>
                {displayedBlogs}
            </div>
            <div className='OurBlogItemsButtons'>
                <button onClick={() => navigate('/Blogs')} className='OurBlogItemBookButton'>SEE ALL BLOGS</button>
            </div>
        </div>
        {!width &&<div className='TherapistBookSession'>
            <div className='TherapistBookSessionImage'>
                <img src={book} alt='book' />
            </div>
            <div className='BookSessionInfoContainer'>
                <div style={{ margin: '0%', border: 'none', height: '100%' }} className='BookSession'>
                    <div className='BookSessionTitle'>
                        REQUEST A BOOKING
                    </div>
                    <div style={{ height: '10%' }} className='BookSessionLocation'>
                        <div style={{ marginBottom: '2%', height: '20%' }} className='BookSessionLocationTitle'>
                            Location
                        </div>
                        <div style={{ height: '80%', width: '100%' }} className='BookSessionLocationButtons'>
                            <button style={{ marginRight: '0.5%', width: '20%', fontSize: '1vw', height: '70%'}} className={location === 'Online' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('Online')}>Online</button>
                            <button style={{ marginLeft: '0.5%', width: '30%', fontSize: '1vw', height: '70%'}} className={location === 'At The Center' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('At The Center')}>At The Center</button>
                        </div>
                    </div>
                    <div style={{ height: '50%' }} className='BookSessionInfo'>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoName'>
                            <label style={{ marginBottom: '8%' }} htmlFor='Name'>Name</label>
                            <input placeholder='Name...' id='Name' type='text' />
                        </div>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoEmail'>
                            <label style={{ marginBottom: '8%' }} htmlFor='Email'>Email</label>
                            <input placeholder='Email...' id='Email' type='email' />
                        </div>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                            <label style={{ marginBottom: '8%' }} htmlFor='Therapist'>Therapist</label>
                            <input placeholder='Therapist...' id='Therapist' type='text' />
                        </div>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoTherapyType'>
                            <label style={{ marginBottom: '8%' }} htmlFor='TherapyType'>TherapyType</label>
                            <select id='TherapyType'>
                                {therapyOptions}
                            </select>
                        </div>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoDay'>
                            <label style={{ marginBottom: '8%' }} htmlFor='Day'>Day</label>
                            <select id='Day'>
                                {daysOptions}
                            </select>
                        </div>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoMonth'>
                            <label style={{ marginBottom: '8%' }} htmlFor='Month'>Month</label>
                            <select onChange={(e) => setMonth(e.target.value)} id='Month'>
                                {monthOptions}
                            </select>
                        </div>
                        <div style={{ height: '90%' }} className='BookSessionInfoCredentials BookSessionInfoType'>
                            <label style={{ marginBottom: '4%', height: '13.72%' }} htmlFor='Type'>Session type</label>
                            <select placeholder='Type...' id='Type' >
                                <option
                                    value='Assessment Session'
                                >
                                    Assessment Session
                                </option>
                            </select>
                        </div>
                    </div>
                    <div style={{ height: '9%', display: 'flex', justifyContent: 'space-around' }} className='BookSessionAvailableSlots'>
                        <div className='BookSessionAvailableSlotsTitle'>
                            Available Slots
                        </div>
                        <div className='BookSessionAvailableSlotsTimings'>
                            {displayedSlots}
                        </div>
                    </div>
                    <div style={{ alignSelf: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='BookSessionButton'>
                        <button onClick={() => navigate('/RequestASession')} style={{ width: '40%'}}>REQUEST A BOOKING</button>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}
