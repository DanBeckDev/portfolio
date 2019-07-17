import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import {
  faHtml5, faCss3Alt, faReact, faJs, faBootstrap, faPhp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const postgreSQLLogo = require('../../assets/img/PostgreSQL_logo.svg');
const expressIcon = require('../../assets/img/expressjs-icon.svg');
const sqlIcon = require('../../assets/img/sql-icon.svg');
const gitIcon = require('../../assets/img/git-icon.svg');

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  title: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 10,
  },
}));

const listOneData = [
  { title: 'HTML', icon: faHtml5, color: '#f63' },
  { title: 'CSS', icon: faCss3Alt, color: '#49f' },
  { title: 'JavaScript', icon: faJs, color: '#fe2' },
  { title: 'React', icon: faReact, color: '#5df' },
  { title: 'Bootstap', icon: faBootstrap, color: '#548' },
];

const listTwoData = [
  { title: 'PHP', icon: faPhp, color: '#6a7db1' },
  {
    title: 'Express.js', icon: expressIcon, custIcon: true, color: '',
  },
  {
    title: 'PostgreSQL', icon: postgreSQLLogo, custIcon: true, color: '#fe2',
  },
  {
    title: 'SQL', icon: sqlIcon, custIcon: true, color: '',
  },
];

const listThreeData = [
  {
    title: 'Git', icon: gitIcon, custIcon: true, color: 'black',
  },
  {
    title: 'Express.js', icon: expressIcon, custIcon: true, color: '',
  },
  {
    title: 'PostgreSQL', icon: postgreSQLLogo, custIcon: true, color: '#fe2',
  },
  {
    title: 'SQL', icon: sqlIcon, custIcon: true, color: '',
  },
];

const makeList = (listData) => {
  const classes = useStyles();
  const ListItems = listData.map((data, key) => <List key={key} className={classes.root}>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {
            (typeof data.custIcon === 'undefined')
              ? <FontAwesomeIcon icon={data.icon} size='4x' style={{ color: data.color }} />
              : <div style={{ fill: data.color }} dangerouslySetInnerHTML={{ __html: data.icon }}/>
          }
        </ListItemAvatar>
        <ListItemText className={classes.title} primary={data.title} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>);
  return (
    <>
      { ListItems }
    </>
  );
};
const ListOne = () => makeList(listOneData);
const ListTwo = () => makeList(listTwoData);
const ListThree = () => makeList(listThreeData);

export { ListOne, ListTwo, ListThree };
