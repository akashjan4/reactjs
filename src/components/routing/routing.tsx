import * as React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import { APP_COMPONENTS } from '../component.cont';
import { NavigationComponent } from '../navigation/navigation.component';
export class RouterComponent extends React.Component {
    render() {
        return (
            <HashRouter>
                <NavigationComponent />
                <div className="content">
                    <Route path="/" exact component={APP_COMPONENTS.TASK_LIST} />
                    <Route path="/list" exact component={APP_COMPONENTS.TASK_LIST} />
                    <Route path="/planner" component={APP_COMPONENTS.PLANER} />
                    <Route path="/request" component={APP_COMPONENTS.REQUEST} />
                </div>
            </HashRouter>
        );
    }
}
