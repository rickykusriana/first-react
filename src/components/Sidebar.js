import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
    <ul className="x-navigation x-navigation-horizontal">
        <li className="xn-logo">
            <a role="button" href="/">First</a>
            <a role="button" className="x-navigation-control"> </a>
        </li>

        <li><NavLink exact to='/dashboard' activeClassName="active"><span className="fa fa-dashboard"></span> Dashboard</NavLink></li>
        <li><NavLink to='/icons' activeClassName="active"><span className="fa fa-key"></span>Icons</NavLink></li>

        <li className="xn-icon-button pull-right">
            <a role="button" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out"></span></a>                        
        </li>
    </ul>
);

export default Sidebar;