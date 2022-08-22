import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'

const PostWidget = ({ slug, categories }) => {
  const [relatedPost, setRelatedPost] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPost(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPost(result))
    }
  }, [slug, categories])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 font-poppins">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              width={60}
              height={60}
              src={post.featuedImage.url}
              className="align-middle rounded-full"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`}>
              <p className="font-medium text-gray-700 cursor-pointer">
                {post.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget