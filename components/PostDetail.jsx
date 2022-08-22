import Image from 'next/image';
import React from 'react'
import moment from 'moment';
import { FaCalendarAlt } from "react-icons/fa";


const PostDetail = ({ post }) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <Image
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 font-poppins">
            <div className="relative overflow-hidden shadow-md mb-6 h-80 lg:h-96">
                <Image
                    priority
                    alt={post.title}
                    src={post.featuedImage.url}
                    layout='fill'
                    className="object-cover object-top shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <div className="px-4 lg:px-0">
                <div className="flex sm:items-center  mb-8 w-full sm:flex-row flex-col">
                    <div className="flex items-center mb-4 sm:mb-0 lg:w-auto mr-8">
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
                <h1 className="mb-8 text-3xl font-semibold">
                    {post.title}
                </h1>
                {/* funtion to know which type of content will be in post description */}
                {post.content.raw.children.map((typeObj, i) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                    return getContentFragment(i, children, typeObj, typeObj.type)
                })}
            </div>
        </div>
    )
}

export default PostDetail;
