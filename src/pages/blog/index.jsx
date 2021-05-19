import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import { formatDate } from '../../utils/format-date'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [featuredPost, setFeaturedPost] = useState([])

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

  const getFeaturedBlogPost = async () => {
    try {
      const response = await axios.get(
        'https://primustrackapi.herokuapp.com/api/v1/all/blog-post?limit=1'
      )
      setLoading(true)
      setFeaturedPost(response.data.data)
    } catch (error) {
      setError(
        error.message,
        'Opps, something went wrong, please try again!!!!!'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllBlogPosts()
    getFeaturedBlogPost()
  }, [])

  if (error) return <h1>{error}</h1>

  return (
    <div className='BlogPage'>
      <header className='h-screen'>
        <NavBar />
        <div className='xs:px-5 px-10 lg:px-48'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold xs:text-5xl lg:text-8xl text-teal2 mt-8 lg:mt-16 mb-28'>
              The Blog
            </h1>
            <select className='bg-transparent focus:outline-none'>
              <option disabled value='Category'>
                Category
              </option>
              <option value='sport'>Sport</option>
              <option value='communications'>Communications</option>
              <option value='tech'>Tech</option>
              <option value='crypto'>Crypto</option>
              <option value='education'>Education</option>
              <option value='food'>Food</option>
              <option value='agriculture'>Agriculture</option>
            </select>
          </div>
          {featuredPost.map(({ _id, title, image, blog_post, created_at }) => (
            <div
              key={_id}
              className='xs:flex xs:flex-col lg:flex lg:flex-row mt-10'
            >
              <di className='h-96 lg:w-4/6 bg-gray5'>
                <img src={image} alt='' className='w-full h-full max-w-full' />
              </di>

              <div className='lg:m-5 md:ml-0'>
                <p className='text-gray6 font-medium text-xl'>
                  {formatDate(created_at)} - 10mins read
                </p>
                <h2 className='text-teal2 lg:font-bold lg:text-7xl leading-tight my-4'>
                  {title}
                </h2>
                <p className='text-gray7 text-3xl max-w-xl'>
                  {blog_post.slice(0, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </header>
      <div className='xs:px-5 px-10 lg:px-48 md:mt-60 mt-20'>
        <h2 className='text-gray8 xs:text-3xl lg:text-5xl font-medium'>
          Older Posts
        </h2>
        {(loading || posts.length === 0) && <Loader />}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 my-20'>
          {posts.slice(1, posts.length - 1).map(post => (
            <div key={post._id}>
              <div className='h-64 w-6/6 bg-gray5'>
                <img
                  src={post.image}
                  alt='_'
                  className='w-full h-full max-w-full'
                />
              </div>
              <p className='text-gray6 font-medium text-xs mt-8'>
                {formatDate(post.created_at)} - 10mins read
              </p>
              <Link
                to={{
                  pathname: `/blog/${post._id}`,
                  state: {
                    posts
                  }
                }}
              >
                <h2 className='font-bold text-teal2 text-4xl leading-tight my-2'>
                  {post.title}
                </h2>
              </Link>
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
