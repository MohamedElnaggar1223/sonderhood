import React from 'react'
import container1 from '../imgs/Container1.png'
import container2 from '../imgs/Container2.png'
import container3 from '../imgs/Container3.png'

export default function OurBlog() 
{
    return (
        <div className='OurBlogContainer'>
            <div className='OurBlogHeader'>
                <h1>OUR BLOG</h1>
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
                <button className='OurBlogItemBookButton'>SEE ALL BLOGS</button>
                <button className='OurBlogItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
