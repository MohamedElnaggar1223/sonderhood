import React from 'react'
import PagesHeader from '../PagesHeader/PagesHeader'
import { text } from './text'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { selectedBlogs } from '../../app/blogs/blogsSlice'
import useTitle from '../../hooks/useTitle'

export default function Article() 
{
    const blogs = useSelector(selectedBlogs)

    const { title } = useParams()

    const navigate = useNavigate()

    const selectedBlog = blogs.find(blog => blog.title.split(" ").join("") === title)
    const readMoreBlogs = blogs.filter(blog => blog.id !== selectedBlog.id)

    useTitle(`${selectedBlog.title}`)

    const displayedSelectedBlog = (
        <div className='ArticlePageMain'> 
            <div className='ArticlePageMainImage'>
                <img src={selectedBlog.image} alt='mid' />
            </div>
            <div className='ArticlePageMainInfo'>
                <div className='ArticlePageMainInfoServiceAuthor'>
                    Author: {selectedBlog.therapist}
                </div>
                <div className='ArticlePageMainInfoService'>
                    <div className='ArticleMainInfoServiceName'>
                        {selectedBlog.topic}
                    </div>
                    <div className='ArticleMainInfoServiceTime'>
                        {selectedBlog.duration}
                    </div>
                </div>
                <div className='ArticleMainInfoTitle'>
                    {selectedBlog.title}
                </div>
            </div>
        </div>
    )

    const displayedReadMoreBlogs = readMoreBlogs.map(blog => (
        <div className='TopicMain'> 
            <div className='TopicMainImage'>
                <img src={blog.image} alt='mid' />
            </div>
            <div className='TopicMainInfo'>
                <div className='TopicMainInfoService'>
                    <div className='TopicMainInfoServiceName'>
                        {blog.topic}
                    </div>
                    <div className='TopicMainInfoServiceTime'>
                        {blog.duration}
                    </div>
                </div>
                <div className='TopicMainInfoTitle'>
                    {blog.title}
                </div>
                <div className='TopicMainInfoDesc'>
                    {blog.description}
                </div>
                <div className='TopicMainInfoButton'>
                    <button onClick={() => navigate(`/ArticlePage/${blog.title.split(" ").join("")}`)}>Read more <FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </div>
        </div>
    ))

    return (
        <>
        <div className='ArticlePageContainer'>
            <PagesHeader />
            {displayedSelectedBlog}
        </div>
        <div className='ArticleText'>
            {selectedBlog.body}
        </div>
        <div className='ReadMoreContainer'>
            <div className='ReadMoreTitle'>
                <h1>READ <span>MORE</span></h1>
            </div>
            <div className='TopicContainer'>
                {displayedReadMoreBlogs}
            </div>
        </div>
        </>
    )
}