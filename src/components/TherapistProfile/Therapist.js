import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PagesHeader from '../PagesHeader/PagesHeader'
import book from '../../imgs/mainmob.jpeg'
import { useSelector } from 'react-redux'
import { selectedTherapists } from '../../app/therapists/therapistsSlice'
import { selectedBlogs } from '../../app/blogs/blogsSlice'
import useTitle from '../../hooks/useTitle'
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2'
const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const therapyTypes = ['Individual Therapy', 'Group Therapy', 'Child Therapy']
// const slots = ['7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM', '7:00AM-8:00AM']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const NAME_REGEX = /^[A-z]{2,24}/
const NUMBER_REGEX = /^[1-9]{1,3}[0][1][0125][0-9]{8}/


export default function Therapist() 
{
    const therapists = useSelector(selectedTherapists)
    const blogs = useSelector(selectedBlogs)

    const { therapist } = useParams()

    const navigate = useNavigate()

    const [location, setLocation] = useState('At The Center')
    //eslint-disable-next-line
    // const [width, setWidth] = useState(window.innerWidth <= 900)

    const [firstName, setFirstName] = useState('')
    const [verifyFirstName, setVerifyFirstName] = useState(false)
    const [lastName, setLastName] = useState('')
    const [verifyLastName, setVerifyLastName] = useState(false)
    const [email, setEmail] = useState('')
    const [day, setDay] = useState('Day')
    const [prefWay, setPrefWay] = useState('')
    const [number, setNumber] = useState('')
    const [verifyNumber, setVerifyNumber] = useState(false)

    const [err, setErr] = useState(false)
    const [succ, setSucc] = useState(false)

    const onFirstNameChanged = (e) => setFirstName(e.target.value)
    const onLastNameChanged = (e) => setLastName(e.target.value)
    const onEmailChanged = (e) => setEmail(e.target.value)
    const onDayChanged = (e) => setDay(e.target.value)
    const onPrefWayChanged = (e) => setPrefWay(e.target.value)

    const form = useRef();

    const sendEmail = (e) => {
        console.log(verifyFirstName, verifyLastName, verifyNumber)
        e.preventDefault();
        if(canRequest)
        {
            setSucc(true)
            setFirstName('')
            setLastName('')
            setEmail('')
            setNumber('')
            //@ts-ignore
            emailjs.sendForm(process.env.REACT_APP_service_id, process.env.REACT_APP_templateBook_id, form.current, process.env.REACT_APP_public_key)
                .then((result) => {
    
                }, (error) => {
    
                });
        }
        else
        {
            setErr(true)
        }
    };
    const daysOptions = days.map(day => <option value={day} key={day}>{day}</option>)
    
    useEffect(() => 
    {
        setVerifyFirstName(NAME_REGEX.test(firstName))
    }, [firstName])

    useEffect(() => 
    {
        setVerifyLastName(NAME_REGEX.test(lastName))
    }, [lastName])

    useEffect(() => 
    {
        setVerifyNumber(NUMBER_REGEX.test(number.replace(/\s/g,'')))
    }, [number])

    useEffect(() => 
    {
        setErr(false)
    }, [firstName, lastName, email, number, prefWay, day])

    const canRequest = [verifyFirstName, verifyLastName, verifyNumber].every(Boolean)

    const selectedTherapist = therapists.find(therapistProfile => therapistProfile.name.split(" ").join("") === therapist)

    useTitle(`${selectedTherapist.name}`)

    const services = selectedTherapist?.clientele.map((service) => <div key={service} className='TherapistProfileService'>{service}</div>)
    
    const orderedCerts = [...selectedTherapist?.certificates]

    orderedCerts.sort((a, b) => parseInt(a.year) === parseInt(b.year) ? 0 : parseInt(a.year) > parseInt(b.year) ? -1 : 1)
    
    const certificates = orderedCerts.map((certificate, index) => 
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
    
    const haveBlogs = blogs.filter(blog => blog.therapist === selectedTherapist.name).length

    const displayedBlogs = blogs.map(blog => 
        blog.therapist === selectedTherapist.name
        ?
        (
            <div onClick={() => navigate(`/ArticlePage/${blog.title.split(" ").join("")}`)} key={blog.id} className='OurBlogItemContainer'>
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
        )
        :
        <React.Fragment key={blog.id}></React.Fragment>
    )

    const error = (
        <div className='BookError'>
            <p> All Fields Must Be Filled!</p>
        </div>
    )

    const success = (
        <div className='BookError'>
            <p style={{ color: 'green' }}> Request Sent Successfully!</p>
        </div>
    )
    
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
                {/* Lorem ipsum dolor sit amet consectetur. Ut ullamcorper id pellentesque aenean libero. Lorem ipsum dolor sit amet consectetur. Ut ullamcorper id pellentesque aenean libero.  */}
            </div>
        </div>}
        <div className='OurServicesContainer'>
            <div className='OurServicesHeader'>
                <h1>CREDENTIALS</h1>
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
                {haveBlogs ? displayedBlogs : (
                    <div style={{ marginRight: '7.5%' }} className='NoTherapists'>
                        No Blogs Available
                    </div>
                )}
            </div>
            <div className='OurBlogItemsButtons'>
                <button onClick={() => navigate('/Blogs')} className='OurBlogItemBookButton'>SEE ALL BLOGS</button>
            </div>
        </div>
        <div className='TherapistBookSession'>
            <div className='TherapistBookSessionImage'>
                <img src={book} alt='book' />
            </div>
            <div className='BookSession'>
                <div className='BookSessionTitle'>
                    REQUEST TO BOOK A SESSION
                </div>
                {err && error}
                {succ && success}
                <div className='BookSessionLocation'>
                    <div className='BookSessionLocationTitle'>
                        Location
                    </div>
                    <div className='BookSessionLocationButtons'>
                        <button className={location === 'Online' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('Online')}>Online</button>
                        <button className={location === 'At The Center' ? 'BookSessionLocationSelectedButton' : 'BookSessionLocationNotSelectedButton'} onClick={() => setLocation('At The Center')}>At The Center</button>
                    </div>
                </div>
                {/*//@ts-ignore*/}
                <form ref={form} style={{ height: '40vh', gridTemplateRows: '1fr 1fr 1fr' }} className='BookSessionInfo'>
                    <input hidden={true} value={location} name='location' />
                    <input hidden={true} value={number} name='number' />
                    <div className='BookSessionInfoCredentials BookSessionInfoFirstName'>
                        <label htmlFor='FirstName'>First Name</label>
                        <input onChange={onFirstNameChanged} value={firstName} placeholder='First Name...' id='FirstName' type='text' name='firstname' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoLastName'>
                        <label htmlFor='LastName'>Last Name</label>
                        <input onChange={onLastNameChanged} value={lastName} placeholder='Last Name...' id='LastName' type='text' name='lastname' />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Email'>Email</label>
                        <input onChange={onEmailChanged} value={email} placeholder='Email...' id='Email' type='email' name='email' />
                    </div>
                    <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoTherapist'>
                        <label >Mobile Number</label>
                        <PhoneInput
                            country={"eg"}
                            enableSearch={true}
                            value={number}
                            onChange={(phone) => setNumber(phone)}
                            specialLabel='Number: '
                            inputStyle={{
                                width: "100%",
                                height: "100%",
                                padding: '0%',
                                background: "transparent",
                                border: "1px solid #90946B",
                                outline: "none",
                                boxSizing: "border-box",
                                boxShadow: "none",
                                color: "var(--Text, #90946B)",
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "100%",
                                textIndent: "7%",
                                borderRadius: '0',
                                marginLeft: '15%',
                                marginTop: '0'
                            }}
                        />
                    </div>
                    <div className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Day'>Day</label>
                        <select onChange={onDayChanged} value={day} id='Day' name='day'>
                            {daysOptions}
                        </select>
                    </div>
                    <div style={{ gridColumn: '1 / span 2' }} className='BookSessionInfoCredentials BookSessionInfoEmail'>
                        <label htmlFor='Reach'>How Do We Reach You?</label>
                        <select onChange={onPrefWayChanged} value={prefWay} id='Reach' name='reach'>
                            <option value='WhatsApp'>WhatsApp</option>
                            <option value='Email'>Email</option>
                            <option value='Call'>Call</option>
                        </select>
                    </div>
                </form>
                <div className='BookSessionButton'>
                    <button onClick={sendEmail} >REQUEST A BOOKING</button>
                </div>
            </div>
        </div>
        </>
    )
}
