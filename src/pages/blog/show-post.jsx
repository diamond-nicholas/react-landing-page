/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from '../../components/NavBar'
import { formatDate } from '../../utils/format-date'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

const ShowPost = ({ match, location }) => {
  const { id } = match.params
  const { posts } = location.state

  const [blogPost, setBlogPost] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getABlogPost = async () => {
    try {
      const res = await axios.get(
        `https://primustrackapi.herokuapp.com/api/v1/blog-post/${id}`
      )
      setLoading(true)
      setBlogPost(res.data.data)
    } catch (error) {
      setError(error.message, 'something went wrong while requesting posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getABlogPost()
  }, [])

  if (error) return <h1>{error}</h1>

  return (
    <div className='ShowPost'>
      <NavBar />
      {(loading || blogPost.length === 0) && <Loader />}
      <div className='lg:px-48 mt-20'>
        <h1 className='mb-11 font-bold text-teal2 text-4xl leading-tight my-2'>
          {blogPost.title}
        </h1>
        <div className='h-96 lg:w-full bg-gray5 object-cover'>
          <img
            className='object-cover max-w-full w-full h-full'
            src={blogPost.image}
            alt='_'
          />
        </div>
        <div className='flex items-center mt-8 mb-20'>
          <p className='text-gray6 font-medium text-xl mr-9'>
            {formatDate(blogPost.created_at)} - 10mins read
          </p>
          <p className='text-gray6 font-medium text-xl'>
            Written by: {blogPost.Author ? blogPost.Author[0].name : '123'}
          </p>
        </div>
        <p>{blogPost.blog_post}</p>
      </div>
      <div className='lg:px-48 mt-28'>
        {(loading || posts.length === 0) && <Loader />}
        <h1 className='text-4xl text-gray8 font-medium'>Check other post</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-10 my-20'>
          {posts
            .slice(1, 6)
            .map(({ _id, created_at, title, blog_post, image }) => (
              <div key={_id}>
                <div className='h-48 w-full bg-gray5'>
                  <img
                    src={image}
                    alt='_'
                    className='w-full h-full max-w-full object-cover'
                  />
                </div>
                <p className='text-gray6 font-medium text-xs mt-8'>
                  {formatDate(created_at)} - 10mins read
                </p>
                <h2 className='font-bold text-teal2 text-2xl leading-tight my-2'>
                  {title}
                </h2>
                <p className='text-gray7 text-base max-w-xs'>
                  {blog_post.slice(0, 100)}
                </p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShowPost
