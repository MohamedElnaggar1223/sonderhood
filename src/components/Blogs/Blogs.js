import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import blogmain from '../../imgs/blogmain.png'
import title from '../../imgs/title.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Blogs()
{
    const navigate = useNavigate()

    return (
        <>
        <div className='BlogsPageContainer'>
            <PagesHeader />
            <div className='BlogsPage'>
                <div className='BlogsPageOurBlogs'>
                    <div className='AboutPageOurStoryTitle'>
                        OUR BLOG
                    </div>
                    <div className='AboutPageOurStoryDesc'>
                        <div className='AboutPageDescFirstPart'>
                        Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                        </div>
                        <div className='AboutPageDescSecPart'>
                            Lorem ipsum dolor sit amet consectetur. Sed urna diam lacus cum. Facilisi quis fames suscipit malesuada. Tincidunt velit in dolor cursus cursus neque. Et turpis eget pellentesque vitae eu. Non nulla urna dictum pharetra pellentesque faucibus vel.
                        </div>
                    </div>
                </div>
                <div className='BlogsMain'> 
                    <div className='BlogsMainImage'>
                        <img src={blogmain} alt='mid' />
                    </div>
                    <div className='BlogsMainInfo'>
                        <div className='BlogsMainInfoService'>
                            <div className='BlogsMainInfoServiceName'>
                                Child Therapy
                            </div>
                            <div className='BlogsMainInfoServiceTime'>
                                5 min read
                            </div>
                        </div>
                        <div className='BlogsMainInfoTitle'>
                            Lorem ipsum dolor sit amet consectetur
                        </div>
                        <div className='BlogsMainInfoDesc'>
                            Lorem ipsum dolor sit amet consectetur. Nulla sociis tortor sed leo vulputate ipsum semper sed ullamcorper. In est gravida imperdiet sodales erat pharetra. Mauris dui velit sagittis vitae risus faucibus nec amet. Urna nunc sapien mauris posuere ullamcorper tristique arcu. Risus mi dis arcu amet lacus nulla sed tortor. Bibendum nulla eget commodo at.
                        </div>
                        <div className='BlogsMainInfoButton'>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='TopicContainer'>
            <div className='TopicMain'> 
                <div className='TopicMainImage'>
                    <img src={title} alt='mid' />
                </div>
                <div className='TopicMainInfo'>
                    <div className='TopicMainInfoService'>
                        <div className='TopicMainInfoServiceName'>
                            Therapy Topic
                        </div>
                        <div className='TopicMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='TopicMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className='TopicMainInfoDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                    <div className='TopicMainInfoButton'>
                        <button onClick={() => navigate('/ArticlePage')}>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
            <div className='TopicMain'> 
                <div className='TopicMainImage'>
                    <img src={title} alt='mid' />
                </div>
                <div className='TopicMainInfo'>
                    <div className='TopicMainInfoService'>
                        <div className='TopicMainInfoServiceName'>
                            Therapy Topic
                        </div>
                        <div className='TopicMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='TopicMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className='TopicMainInfoDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                    <div className='TopicMainInfoButton'>
                        <button onClick={() => navigate('/ArticlePage')}>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
            <div className='TopicMain'> 
                <div className='TopicMainImage'>
                    <img src={title} alt='mid' />
                </div>
                <div className='TopicMainInfo'>
                    <div className='TopicMainInfoService'>
                        <div className='TopicMainInfoServiceName'>
                            Therapy Topic
                        </div>
                        <div className='TopicMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='TopicMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className='TopicMainInfoDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                    <div className='TopicMainInfoButton'>
                        <button onClick={() => navigate('/ArticlePage')}>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
            <div className='TopicMain'> 
                <div className='TopicMainImage'>
                    <img src={title} alt='mid' />
                </div>
                <div className='TopicMainInfo'>
                    <div className='TopicMainInfoService'>
                        <div className='TopicMainInfoServiceName'>
                            Therapy Topic
                        </div>
                        <div className='TopicMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='TopicMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className='TopicMainInfoDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                    <div className='TopicMainInfoButton'>
                        <button onClick={() => navigate('/ArticlePage')}>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
            <div className='TopicMain'> 
                <div className='TopicMainImage'>
                    <img src={title} alt='mid' />
                </div>
                <div className='TopicMainInfo'>
                    <div className='TopicMainInfoService'>
                        <div className='TopicMainInfoServiceName'>
                            Therapy Topic
                        </div>
                        <div className='TopicMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='TopicMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className='TopicMainInfoDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                    <div className='TopicMainInfoButton'>
                        <button onClick={() => navigate('/ArticlePage')}>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
            <div className='TopicMain'> 
                <div className='TopicMainImage'>
                    <img src={title} alt='mid' />
                </div>
                <div className='TopicMainInfo'>
                    <div className='TopicMainInfoService'>
                        <div className='TopicMainInfoServiceName'>
                            Therapy Topic
                        </div>
                        <div className='TopicMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='TopicMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className='TopicMainInfoDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                    </div>
                    <div className='TopicMainInfoButton'>
                        <button onClick={() => navigate('/ArticlePage')}>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}