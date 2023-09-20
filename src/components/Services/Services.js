import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import WhySonderHood from '../HomePage/WhySonderHood'
const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default function Serives() 
{
    return (
        <>
        <div className='ServicesPageContainer'>
            <PagesHeader />
            <div className='ServicesPage'>
                <div className='ServicesPageHeader'>
                    <div className='ServicesPageHeaderTitle'>
                        OUR SERVICES
                    </div>
                </div>
                <div className='ServicesPageItems'>
                    <div className='ServicesPageItemsTopPart'>
                        <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
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

                        <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
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

                        <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
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
                    </div>

                    <div className='ServicesPageItemsBotPart'>
                        <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
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

                        <div className='OurServicesItemContainer' style={{ background: colors[Math.floor(Math.random() * 3)] }}>
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

                    </div>
                </div>
            </div>
        </div>
        <WhySonderHood />
        </>
    )
}
