import './Router.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './routes';
import React, { Suspense } from 'react';
import RouteWithSubRoutes from './subcomp/RouteWithSubRoutes';
import Nav from '@@/components/nav/Nav';
import Loading from '@@/components/loading/Loading';

function App() {
  return (
    <BrowserRouter>
      <div className="website">
        <header className="website-header">
          <Nav/>
        </header>
        <Suspense fallback={<Loading/>}>
          <section className="website-body">
            <Switch>
              {routes.map((route, i) => (
                route.subroutes ? <RouteWithSubRoutes key={i} {...route} />
                : <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                  >
                    <route.component />
                  </Route>
              ))}
            </Switch>
          </section>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;