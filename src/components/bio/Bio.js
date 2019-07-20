import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import image from '../../assets/img/avitar.png';
import { ListOne, ListTwo, ListThree } from './List';

const useStyles = makeStyles({
  list: {
    padding: 20,
    maxWidth: 360,
  },
  avatar: {
    margin: 10,
    width: 200,
    height: 200,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  section: {
    backgroundImage: 'linear-gradient(-20deg, rgba(38,170,255,1), 45%, rgba(255,255,255,1) 45%)',
  },
  tableHead: {
    paddingTop: 20,
    marginBottom: 0,
  },
});

const Bio = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container>
        <Avatar alt="avatar image" src={image} className={classes.avatar} />
        <h1>Hi, I&apos;m Dan. Nice to meet you.</h1>
        <p id='bio'>
          Since I started out coding 6 years ago I have worked through different
           types of applications developing my skills in different aspecs and practices
           of programming. My skills range from designing websites in Photoshop all the
           way to developing full-stack applications.
        </p>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Paper className='paper'>
                    <h2 className={classes.tableHead}>Front-end Development</h2>
                    <List className={classes.list}>
                      <ListOne />
                    </List>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className='paper'>
                    <h2 className={classes.tableHead}>Back-end Development</h2>
                    <List className={classes.list}>
                      <ListTwo />
                    </List>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className='paper'>
                    <h2 className={classes.tableHead}>Technologies</h2>
                    <List className={classes.list}>
                      <ListThree />
                    </List>
                  </Paper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default Bio;
