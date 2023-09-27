import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OurBlog({ blogs }) 
{
    const navigate = useNavigate()

    const displayedBlogs = blogs.map(blog => 
        (
            <div onClick={() => navigate(`/ArticlePage/${blog.title.split(" ").join("")}`)} key={blog.id} className='OurBlogItemContainer'>
                <div className='OurBlogItemImage'>
                    <img src={blog.image} alt='c1' />
                </div>
                <div className='OurBlogItemTitle'>
                    {blog.title.split(' ')[0]}
                </div>
                <div className='OurBlogItemBody'>
                    {blog.description}
                </div>
            </div>
        ))

    return (
        <div className='OurBlogContainer'>
            <div className='OurBlogHeader'>
                <h1>OUR BLOG</h1>
            </div>
            <div className='OurBlogItems'>
                {displayedBlogs}
            </div>
            <div className='OurBlogItemsButtons'>
                <button onClick={() => navigate('/Blogs')} className='OurBlogItemBookButton'>SEE ALL BLOGS</button>
                <button onClick={() => navigate('/ContactUs')} className='OurBlogItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
}
