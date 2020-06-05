import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from '../content/blog-post-1.md';
import post2 from '../content/blog-post-2.md';
import post3 from '../content/blog-post-3.md';
import coverImage from '../images/dogShelter.png';
import dogImage from '../images/dog.jpg';
import oldAgeHome from '../images/oldAgeHome.jpg';
import collectionDrive from '../images/collectionDrive.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));
  
const mainFeaturedPost = {
    title: '',
    description: "",
    image: coverImage,
    imgText: 'main image description',
};

const featuredPosts = [
    {
        title: 'Make New Life',
        date: 'April 2020',
        description:
            'Suvarna & Arun Pasare have selflessly devoted their life for strays since 2007',
        image: dogImage,
        imageText: 'Image Text',
        url: '/featuredPost1'
    },
    {
        title: 'Mega collection drive',
        date: 'September 2016',
        description:
            'Banket donation drive during winter season',
        image: collectionDrive,
        imageText: 'Image Text',
        url: '/featuredPost2'
    },
    {
        title: 'Umeed Surron Se',
        date: 'June 2015',
        description:
            'A fundraiser for old age home',
        image: oldAgeHome,
        imageText: 'Image Text',
        url: '/featuredPost3'
    },
    
];

const sidebar = {
    title: 'Mission',
    description:
        'To promote altruism by giving ‘You’ a chance to create an impact and revamp the society.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
    ],
    social: [
        { name: 'Facebook', icon: FacebookIcon, url: "https://www.facebook.com/myomindia/" },
        { name: 'Instagram', icon: InstagramIcon, url: "https://instagram.com/myomindia?igshid=mg2crc852upr" },
        { name: 'Twitter', icon: TwitterIcon, url: "https://twitter.com/myomindia?s=20" },
    ],
};

const posts = [post1, post2, post3];

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
                <Main title="Introduction" posts={posts} />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
        </div>
    );
}