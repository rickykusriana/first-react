import React, { Component } from 'react';
import { get_img, cut_htmltag } from '../../helpers/index';
import Pagination from './Pagination';

class Blog extends Component {
    
    constructor(){
        super();
        this.state = { 
            isValue: [],
            isLoading: false,
            isError: null
        };
    }

    componentDidMount(){

        this.setState({
            isLoading: true
        })

        fetch('http://localhost/masterapp/api/post/blog?X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Terjadi kesalahan');
                }
            })

            .then(data => this.setState({
                isValue: data,
                isLoading: false
            }) )
    }

    render() {

        const {isValue, isLoading, isError} = this.state;

        if (isLoading) {
            return <p align="center" style={{marginTop:220}}>
                        <i className="fa fa-spin fa-sync fa-2x"></i>
                        <br/><br/>
                        <span>Get data from API Server ... </span>
                    </p>
        }
        if (isError) {

            return <p align="center" style={{marginTop:220}}>
                        <i className="fa fa-spin fa-sync fa-2x"></i>
                        <br/><br/>
                        <span>{isError.message}</span>
                    </p>
        }

        return (
        	<div className="col-md-12">

                <div className="page-title">
                    <h2><span className="fa fa-angle-double-right"></span> Blog</h2>
                </div>

                <div className="panel panel-default">
                    <div className="panel-body posts">
                        
                        <div className="row">

                            { 
                                isValue.map((prop, key) => { 

                                    return (
                                        <div className="col-md-4" key={key}>

                                            <div className="post-item">
                                                <div className="post-title">
                                                    <a href="pages-blog-post.html">{prop.post_title}</a>
                                                </div>
                                                <div className="post-date">
                                                    <span className="fa fa-calendar"></span> {prop.created_at}&nbsp;&nbsp;&nbsp;
                                                    <span className="fa fa-user"></span><a href="pages-profile.html">{prop.created_by}</a>
                                                </div>
                                                <div className="post-text">
                                                    <img src={ get_img(prop.post_content) } className="img-responsive img-text" alt="image1" style={{ width:463.7+'px', height:283.21+'px' }} />
                                                    <p>{ cut_htmltag(prop.post_content) }</p>
                                                </div>
                                                <div className="post-row">
                                                    <button className="btn btn-default btn-rounded pull-right">Read more</button>
                                                </div>
                                                <div className="post-row">
                                                    <hr/>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>

                    </div>
                </div>
                
                { /*
                <ul className="pagination pagination-sm pull-right push-down-20">
                    <li className="disabled"><a>«</a></li>
                    <li className="active"><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>                                    
                    <li><a>»</a></li>
                </ul>
                */ }

                <Pagination/>

            </div>
        );
    }
}

export default Blog;