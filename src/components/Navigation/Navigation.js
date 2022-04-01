import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import UserContext from "../User/User";

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: 'purple solid 8px',
    padding: [15, 10],
    textAlign: 'right',
  }
});

export default function Navigation() {
  const classes = useStyles();
  const user = useContext(UserContext)
  return(
    <div className={classes.wrapper}>
      {/*<UserContext.Consumer>*/}
      {/*  {dev => `Welcome, ${dev.name}`}*/}
      {/*</UserContext.Consumer>*/}
      <hr/>
      Welcome, { user.name }
    </div>
  )
}
