import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import FormControl from '@material-ui/core/FormControl';

import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Input({email, setEmail, password, setPassword}) {
  const classes = useStyles();


  return (
    <div>
      <FormControl className={classes.margin}>
        <BootstrapInput id="demo-customized-textbox" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl className={classes.margin}>
        <BootstrapInput id="demo-customized-textbox" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>

    </div>
  );
}
