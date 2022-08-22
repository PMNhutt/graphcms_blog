import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendarAlt } from "react-icons/fa";

const PostCard = ({ post }) => {
    // console.log(post);
    return (
        <div className="bg-white shadow-lg rounded-[5px] p-0 lg:p-8 pb-12 mb-8 font-poppins">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <Image
                    priority
                    layout='fill'
                    className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                    src={post.featuedImage.url}
                    alt={post.title} />
            </div>
            <h1 className="transition duration-200 text-center mb-8 cursor-pointer
            hover:text-blue-600 text-3xl font-semibold">
                <Link
                    href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <Image
                        height={30}
                        width={30}
                        src={post.author.photo.url}
                        alt={post.author.name}
                        className="align-middle rounded-full"
                    />
                    <p className="inline ml-2 text-gray-700">
                        {post.author.name}
                    </p>
                </div>
                <div className="font-medium text-gray-700">
                    <FaCalendarAlt className="h-6 w-6 text-center inline text-blue-700 mr-2" />
                    <span className="align-middle">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal px-4 mb-8 lg:px-20">
                {post.excrept}
            </p>
            <div className="text-center">
                <Link href={`/post/${post.slug}`}>
                    <span className="transition duration-200 transform hover:-translate-y-1 inline-block cursor-pointer bg-blue-500 rounded-full text-white
                    px-8 py-2">
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard