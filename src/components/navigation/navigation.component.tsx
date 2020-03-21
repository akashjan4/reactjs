import * as React from "react"
import { NavLink } from 'react-router-dom';
import './navigation.scss';
export class NavigationComponent extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/list">Task List</NavLink></li>
                    <li><NavLink to="/planner">Planner</NavLink></li>
                    <li><NavLink to="/request">Top Req.</NavLink></li>
                </ul>
            </nav>

        );
    }
}