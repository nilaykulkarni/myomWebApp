import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Work from './Work';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import FeaturedPostFirst from './FeaturedPostFirst';
import FeaturedPostSecond from './FeaturedPostSecond';
import FeaturedPostThird from './FeaturedPostThird';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'How we work', url: '/work' },
  { title: 'Past movements', url: '/campaigns' },
  { title: 'Gallery', url: '/gallery' },
  { title: 'Contact Us', url: '/contact' }
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Make Your Own Movement" sections={sections} />
        <main>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/work" exact component={Work} />
            <Route path="/featuredpost1" exact component={FeaturedPostFirst} />
            <Route path="/featuredpost2" exact component={FeaturedPostSecond} />
            <Route path="/featuredpost3" exact component={FeaturedPostThird} />
          </Router>
        </main>
      </Container>
      <Footer title="Copyright information" />
    </React.Fragment>
  );
}
