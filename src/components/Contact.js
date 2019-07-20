import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: 8,
    maxWidth: 500,
    background: '#444',
    marginTop: 20,
    marginBottom: 20,
  },
  menu: {
    width: 200,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
  root: {
    background: '#141618',
    paddingTop: 100,
    paddingBottom: 100,
  },
  form: {
    background: 'rgba(0,0,0, .3)',
    paddingBottom: 40,
  },
  button: {
    maxWidth: 300,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form className={classes.container} noValidate autoComplete='off'>
        <Container className={classes.form} maxWidth="sm">
          <h1 className={classes.title}>Say Hello</h1>
          <TextField
            id="standard-uncontrolled"
            label="Name"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-uncontrolled"
            label="Email"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-full-width"
            label="Message"
            margin="normal"
            className={classes.textField}
            fullWidth
          />
          <Button variant="contained" color="primary" className={classes.button}>
            Send
          </Button>
        </Container>
      </form>
    </div>
  );
};
export default Contact;
