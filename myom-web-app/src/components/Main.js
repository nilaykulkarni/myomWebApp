  
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
//import Markdown from './Markdown';
import Markdown from 'markdown-to-jsx';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
        <Markdown>
         M.Y.O.M is a Pune-based social group that provides a platform for every budding idea to thrive. Idea is nurtured into Movements which allows Individuals to join & connect with people in the community and thus promulgate the cause. 
So, Ideas from diverse sectors of social welfare are welcomed; be it environment, animal care, child education or any other concern.

Many of us might have had a wish to do something for the society but couldn't bring it out into action because of lack of advocacy and resource. Approaching & working with the conventional welfare organisations also won’t gratify one’s need because most of them rather make you follow ‘their’ mission, and thus putting you at an early path of compromise and dissatisfaction. 
At M.Y.O.M, we believe in what ‘You’ believe i.e. to make world a better place to live in. We provide you much required Liberty & the Platform to come up with your noble ideas, and assist you in every possible way to make ‘it’ a reality. Conducting events would have never been so fun because you get the opportunity to lead, share & connect with folks who share your mind-set.
You just need to send your ideas to us through the link, whose feasibility is then judged by our panel. Once the screening is over, ideas are reformed into events which are further resourced by the Team M.Y.O.M. The events are made open to public for volunteering. All volunteers thus, have opportunity to volunteer in their vicinity and their field of interest.
Our mission:To promote altruism by channelizing the ideas of people   onto a flexible volunteering platform in-order to make the idea a reality.
How we will work:There will be an online portal where people will submit their ideas to the admin team(or the request handling team).Upon shortlisting from our end, the original idea holder will be called for a meeting to plan out the activity along with a tentative date for the same.
Once it's done, then the activity will be posted on the portal along with the requirements, to register volunteers who are willing to be a part of it.
Initially we need to create our own activities and invite people to join. Once the portal gains momentum and publicity,we will start receiving more ideas and so we will help accomplish those.
The intention is to serve in every possible way and hence there are no restrictions on the area of social welfare.

        </Markdown>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};