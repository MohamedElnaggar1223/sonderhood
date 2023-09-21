import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import article from '../../imgs/article.png'
import title from '../../imgs/title.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { text } from './text'

export default function Article() 
{
    return (
        <>
        <div className='ArticlePageContainer'>
            <PagesHeader />
            <div className='ArticlePageMain'> 
                <div className='ArticlePageMainImage'>
                    <img src={article} alt='mid' />
                </div>
                <div className='ArticlePageMainInfo'>
                    <div className='ArticlePageMainInfoService'>
                        <div className='ArticleMainInfoServiceName'>
                            Child Therapy
                        </div>
                        <div className='ArticleMainInfoServiceTime'>
                            5 min read
                        </div>
                    </div>
                    <div className='ArticleMainInfoTitle'>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
            </div>
        </div>
        <div className='ArticleText'>
            {text}
        </div>
        <div className='ReadMoreContainer'>
            <div className='ReadMoreTitle'>
                <h1>READ <span>MORE</span></h1>
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
                            <button>Read more</button>
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
                            <button>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
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
                            <button>Read more <FontAwesomeIcon style={{width: '7%'}} icon={faChevronRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}