import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
  faHtml5, faCss3Alt, faReact, faJs, faBootstrap, faPhp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const postgreSQLLogo = require('../../assets/img/PostgreSQL-logo.svg');
const expressIcon = require('../../assets/img/expressjs-logo.svg');
const sqlIcon = require('../../assets/img/sql-logo.svg');
const gitIcon = require('../../assets/img/git-logo.svg');
const webpackIcon = require('../../assets/img/webpack-logo.svg');
const nodejsIcon = require('../../assets/img/nodejs-logo.svg');
const npmIcon = require('../../assets/img/npm-logo.svg');
const reduxIcon = require('../../assets/img/redux-logo.svg');

const useStyles = makeStyles({
  root: {
    minHeight: 100,
    maxHeight: 100,
  },
  inline: {
    display: 'inline',
  },
  title: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 10,
  },
});

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
    title: 'Git', icon: gitIcon, custIcon: true, color: '',
  },
  {
    title: 'Webpack', icon: webpackIcon, custIcon: true, color: '',
  },
  {
    title: 'Node.js', icon: nodejsIcon, custIcon: true, color: '',
  },
  {
    title: 'NPM', icon: npmIcon, custIcon: true, color: '',
  },
  {
    title: 'Redux', icon: reduxIcon, custIcon: true, color: '',
  },
];

const makeList = (listData) => {
  const classes = useStyles();
  const ListItems = listData.map((data, key) => <ListItem className={classes.root} key={key} alignItems="center" divider={true}>
        <ListItemAvatar>
          {
            (typeof data.custIcon === 'undefined')
              ? <FontAwesomeIcon icon={data.icon} size='4x' style={{ color: data.color }} />
              : <div style={{ fill: data.color }} dangerouslySetInnerHTML={{ __html: data.icon }}/>
          }
        </ListItemAvatar>
        <ListItemText className={classes.title} primary={data.title} />
      </ListItem>);
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
