/** https://reactrouter.com/web/guides/quick-start */
import React from 'react';
import { Route } from 'react-router-dom';
import { Switch, RouteComponentProps } from 'react-router';

import Layout from '../containers/Layout';
import NotFound from '../containers/NotFound';

import MainPage from '../containers/MainPage';
import Entities from '../containers/Entities';


interface IRoute {
    exact?: boolean;
    path: string
    component: React.ReactNode;
    private?: boolean;
}


const appRoutes: IRoute[] = [
    {path: '/', exact: true, component: MainPage},
    {path: '/entities', exact: true, component: Entities},
    {path: '/entities/:id', exact: true, component: Entities}
];

const defaultContainer = () => (
    <Layout>
        <Switch>
            {appRoutes.map(route => 
                <Route key={route.path} exact={route.exact} path={route.path} render={routeProps => {
                    const Component = route.component as React.ComponentClass<RouteComponentProps>;
                    return <Component  {...routeProps} />
                }}/>
            )}
            <Route component={() => <NotFound />} />
        </Switch>
    </Layout>
);

export const routes = (
    <Switch>
        <Route component={defaultContainer} />
    </Switch>
)