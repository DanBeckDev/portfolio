import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import image from '../../assets/img/avitar.png';
import { ListOne, ListTwo, ListThree } from './List';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  aboutMe: {
    textAlign: 'center',
    fontSize: '2em',
    paddingLeft: 120,
    paddingRight: 120,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 340,
    textAlign: 'center',
    PaddingTop: '10px',
    PaddingBottom: '10px',
  },
  section: {
    backgroundImage: 'linear-gradient(0deg, rgba(38,170,255,1), 0%, rgba(38,170,255,1) 40%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)',
  },
});

const Section = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container>
        <Avatar alt="avatar image" src={image} className={classes.avatar} />
        <h1>Hi, I&apos;m Dan. Nice to meet you.</h1>
        <p className={classes.aboutMe}>
          Since I started out coding 6 years ago I have worked through different
           types of applications developing my skills in different aspecs and practices
           of programming. My skills range from designing websites in Photoshop all the
           way to developing full-stack applications.
        </p>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h2>Front-end Development</h2>
                    <h3>Languages:</h3>
                    <ListOne />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h2>Back-end Development</h2>
                    <h3>Languages:</h3>
                    <ListTwo />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <h2>Technologies</h2>
                    <ListThree />
                  </Paper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default Section;
