import React from 'react';
import MainFeaturedPost from "./MainFeaturedPost";
import workImage from '../images/myomTeam.jpg';

const mainFeaturedPost = {
    title: '',
    description: "",
    image: workImage,
    imgText: 'main image description',
    imageSize: "contain"
};

const work = () => {
    return (
        <div>
            <MainFeaturedPost post={mainFeaturedPost} />
            There will be an online portal where people will submit their ideas to the admin team(or the request handling team).Upon shortlisting from our end, the original idea holder will be called for a meeting to plan out the activity along with a tentative date for the same.
Once it's done, then the activity will be posted on the portal along with the requirements, to register volunteers who are willing to be a part of it.
Initially we need to create our own activities and invite people to join. Once the portal gains momentum & publicity,we will start receiving more ideas and so we will help accomplish those.
The intention is to serve in every possible way and hence there are no restrictions on the area of social welfare.

        </div>
    );
}

export default work;