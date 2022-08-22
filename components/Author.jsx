import Image from 'next/image';
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 relative rounded-lg bg-black bg-opacity-70 p-8 font-poppins">
      <div className="absolute left-0 right-2 -top-9">
        <Image
          alt={author.name}
          height={70}
          width={70}
          src={author.photo.url}
          className="rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">
        {author.name}
      </h3>
      <p className="text-white text-lg">
        {author.bio}
      </p>
    </div>
  )
}

export default Author