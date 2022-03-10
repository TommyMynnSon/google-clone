import React from 'react';
import { Routes as Switch, Route, Navigate as Redirect } from 'react-router-dom';

import Results from './Results';

const Routes = () => {
  const routesThatRenderResults = ['/search', '/images', '/news', 'videos'];

  return (
    <div className='p-4'>
      <Switch>
        <Route exact path='/' element={<Redirect to='search' />}>
        </Route>
        {routesThatRenderResults.map(route => <Route key={route} exact path={route} element={<Results />}></Route>)}
      </Switch>
    </div>
  );
};

export default Routes;