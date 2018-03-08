import React, { Component } from 'react';
import Pagination from './Pagination';

class Blog extends Component {

    render() {

        return (
        	<div className="col-md-12">
                
                <div className="page-title">
                    <h2><span className="fa fa-angle-double-right"></span> Blog |<small><code>From API https://kodokode.com/api/post/</code></small></h2>
                </div>

                <Pagination/>
            </div>
        );
    }
}

export default Blog;