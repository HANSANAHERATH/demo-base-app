import React from 'react';
import { Routes as Routing, Route, Navigate } from 'react-router-dom';

import {
    NotFound as NotFoundView,
    Home as HomeView,
} from './views'

const RoutesComponent = () => {
    return (
        <div>
            <Routing>
                <Route
                    exact
                    path="/home"
                    element={<HomeView />}>
                </Route>
                <Route
                    path="*"
                    element={<NotFoundView />}>
                </Route>
            </Routing>
        </div>
    );
};

export default RoutesComponent;