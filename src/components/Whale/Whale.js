import React from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function () {
  const { path } = useRouteMatch()

  return (
    <>
      <h3>Whale</h3>

      <Switch>
       <Route path={`${path}/beluga`}>
          <Beluga/>
       </Route>
       <Route path={`${path}/blue`}>
          <Blue/>
       </Route>
      </Switch>
    </>
  )
}
