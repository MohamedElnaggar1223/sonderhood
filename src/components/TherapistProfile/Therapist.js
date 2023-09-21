import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { therapists } from '../therapists'
import PagesHeader from '../PagesHeader/PagesHeader'
import container1 from '../../imgs/Container1.png'
import container2 from '../../imgs/Container2.png'
import container3 from '../../imgs/Container3.png'
const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function Therapist() 
{
    const { therapist } = useParams()

    const navigate = useNavigate()

    const selectedTherapist = therapists.find(therapistProfile => therapistProfile.name.split(" ").join("") === therapist)

    const services = selectedTherapist?.services.map(service => <div className='TherapistProfileService'>{service}</div>)
    
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
                        {selectedTherapist?.desc}
                    </div>
                    <div className='TherapistProfileServices'>
                        {services}
                    </div>
                    <div className='TherapistProfileButton'>
                        <button>BOOK A SESSION</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='TestimonialsContainer'>
            <div className='TestimonialsImage'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8286 0V10.9714C15.3264 10.9714 10.9186 11.1793 10.9184 21.1958V26.4H21.6V48H0V26.4V21.1958C0 13.3208 2.03795 7.47291 6.49047 3.81413C9.57054 1.28323 13.2195 0 17.8286 0ZM44.2286 0V10.9714C41.7264 10.9714 37.3186 11.1793 37.3184 21.1958V26.4H48V48H26.4V26.4V21.1958C26.4 13.3208 28.438 7.47291 32.8905 3.81413C35.9705 1.28323 39.6195 0 44.2286 0Z" fill="#464834"/>
                </svg>
            </div>
            <div className='TestimonialsText'>
                I once read in a book “wounded healers are effective because they are more able to empathize with the wounds of the patient”.. And I promise to feel whatever you bring in. I promise to put myself in your shoes.. so come in and feel home.
            </div>
            <div className='TestimonialsDesc'>
                Lorem ipsum dolor sit amet consectetur. Ut ullamcorper id pellentesque aenean libero. Lorem ipsum dolor sit amet consectetur. Ut ullamcorper id pellentesque aenean libero. 
            </div>
        </div>
        <div className='OurServicesContainer'>
            <div className='OurServicesHeader'>
                <h1>CERTIFICATES</h1>
            </div>
            <div className='OurServicesItems'>
                <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        2010
                    </div>
                    <div className='OurServicesItemTitle'>
                        Essentials of CBT
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        2020
                    </div>
                    <div className='OurServicesItemTitle'>
                        Essentials of CBT
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        2022
                    </div>
                    <div className='OurServicesItemTitle'>
                        Essentials of CBT
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        2023
                    </div>
                    <div className='OurServicesItemTitle'>
                        Essentials of CBT
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        2023
                    </div>
                    <div className='OurServicesItemTitle'>
                        Essentials of CBT
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>
            </div>
        </div>
        <div className='OurBlogContainer'>
            <div className='OurBlogHeader'>
                <h1>BLOGS</h1>
            </div>
            <div className='OurBlogItems'>
                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container1} alt='c1' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container2} alt='c2' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container3} alt='c3' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container1} alt='c1' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container2} alt='c2' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container3} alt='c3' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

                <div className='OurBlogItemContainer'>
                    <div className='OurBlogItemImage'>
                        <img src={container1} alt='c1' />
                    </div>
                    <div className='OurBlogItemTitle'>
                        Title
                    </div>
                    <div className='OurBlogItemBody'>
                        "Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam."
                    </div>
                </div>

            </div>
            <div className='OurBlogItemsButtons'>
                <button onClick={() => navigate('/Blogs')} className='OurBlogItemBookButton'>SEE ALL BLOGS</button>
            </div>
        </div>
        </>
    )
}
