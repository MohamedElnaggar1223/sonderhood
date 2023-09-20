import React from 'react'
import { useNavigate } from 'react-router-dom'

const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function OurServices() 
{
    const navigate = useNavigate()

    return (
        <div className='OurServicesContainer'>
            <div className='OurServicesHeader'>
                <h1>OUR SERVICES</h1>
            </div>
            <div className='OurServicesItems'>
                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        01
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        02
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        03
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        04
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        05
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        06
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

                <div onClick={() => navigate('/Services/IndividualTherapy')} className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
                    <div className='OurServicesItemNumber'>
                        07
                    </div>
                    <div className='OurServicesItemTitle'>
                        Individual Therapy
                    </div>
                    <div className='OurServicesItemBody'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet volutpat sed amet sapien a vitae. Arcu a nibh id cursus ultrices. Magna ut lorem aliquet a. Lobortis habitasse blandit mauris placerat nisl quam.
                    </div>
                </div>

            </div>
        </div>
    )
}
