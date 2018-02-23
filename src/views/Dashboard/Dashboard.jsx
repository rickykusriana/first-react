import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="page-title">                    
                    <h2><span className="fa fa-dashboard"></span> Dashboard</h2>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        Add class <code>.page-navigation-top</code> to <code>.page-container</code> to use top navigation
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
