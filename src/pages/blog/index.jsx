import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getAllBlogPosts = async () => {
    try {
      const res = await axios.get(
        'https://primustrackapi.herokuapp.com/api/v1/all/blog-post'
      )
      setLoading(true)
      setPosts(res.data.data)
    } catch (error) {
      setError(error.message, 'something went wrong while requesting posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllBlogPosts()
  }, [])

  if (error) return <h1>{error}</h1>

  return (
    <div className='BlogPage'>
      <header className='h-screen'>
        <NavBar />
        <div className='xs:px-5 px-10 lg:px-48'>
          <h1 className='font-bold xs:text-5xl lg:text-8xl text-teal2 mt-8 lg:mt-16 mb-28'>
            The Blog
          </h1>
          <div className='xs:flex xs:flex-col lg:flex lg:flex-row mt-10'>
            <div className='h-96 lg:w-4/6 bg-gray5' />
            <div className='m-5'>
              <p className='text-gray6 font-medium text-xl'>
                March 31, 2021 - 10mins read
              </p>
              <h2 className='text-teal2 lg:font-bold lg:text-7xl leading-tight my-4'>
                How to effectively manage your team.
              </h2>
              <p className='text-gray7 text-3xl max-w-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className='xs:px-5 px-10 lg:px-48 mt-20'>
        <h2 className='text-gray8 xs:text-3xl lg:text-5xl font-medium'>
          Older Posts
        </h2>
        {(loading || posts.length === 0) && <Loader />}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 my-20'>
          {posts.map(post => (
            <div key={post._id}>
              <div className='h-64 w-6/6 bg-gray5' />
              <p className='text-gray6 font-medium text-xs mt-8'>
                March 31, 2021 - 10mins read
              </p>
              <h2 className='font-bold text-teal2 text-4xl leading-tight my-2'>
                {post.title}
              </h2>
              <p className='text-gray7 text-base max-w-xs'>
                {post.blog_post.slice(0, 100)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage
