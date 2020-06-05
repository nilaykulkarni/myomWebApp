import React from 'react';
import MainFeaturedPost from "./MainFeaturedPost";
import postImage from '../images/dogShelter.png';

const mainFeaturedPost = {
    title: '',
    description: "",
    image: postImage,
    imgText: 'main image description',
};

const featuredPostFirst = () => {
    return (
        <div>
            <MainFeaturedPost post={mainFeaturedPost} />
            Put details here
        </div>
    );
}

export default featuredPostFirst;