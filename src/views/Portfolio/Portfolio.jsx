import React from 'react';
import { Link, Route } from 'react-router-dom';
import { capitalize } from '../../helpers/index';

import './css/set2.css';

const Portfolio = ({ match }) => {

    if ( ! match.isExact )
        return (
        
            <Route path={`${match.path}/:name`} render = {({match}) => (

                <div className="col-md-12">
                    <div className="page-title">
                        <h2>
                            <Link to='/portfolio'>
                                <span className="fa fa-angle-double-left"></span> 
                            </Link> { capitalize(match.params.name) }
                        </h2>
                    </div>
                </div>

            )} />
        );

    return (

        <div className="col-md-12">

            <div className="page-title">
                <h2><span className="fa fa-angle-double-right"></span> Portfolio</h2>
            </div>

            <div className="panel panel-default">
                <div className="panel-body posts">
                    
                    <div className="row">

                        <div className="col-md-4">
                            <div className="post-item">

                                <div className="grid">
                                    <figure className="effect-ming">
                                        <img src="/assets/images/portfolio/milariancms.png" alt="image1"/>
                                        <figcaption>
                                            <div>
                                                <h2>MILARIAN <span>CMS</span></h2>
                                                CMS Blog
                                            </div>
                                            <Link to={`${match.url}/milariancms`}>View more</Link>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="grid">
                                    <figure className="effect-ming">
                                        <img src="/assets/images/portfolio/mastershop.png" alt="image2"/>
                                        <figcaption>
                                            <div>
                                                <h2>MASTER <span>SHOP</span></h2>
                                                Online Shop
                                            </div>
                                            <Link to={`${match.url}/mastershop`}>View more</Link>
                                        </figcaption>
                                    </figure>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post-item">
                                
                                <div className="grid">
                                    <figure className="effect-ming">
                                        <img src="/assets/images/portfolio/masterpos.png" alt="image3"/>
                                        <figcaption>
                                            <div>
                                                <h2>MASTER <span>POS</span></h2>
                                                Point of Sale
                                            </div>
                                            <Link to={`${match.url}/masterpos`}>View more</Link>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="grid">
                                    <figure className="effect-ming">
                                        <img src="/assets/images/portfolio/kamaratih.png" alt="image3"/>
                                        <figcaption>
                                            <div>
                                                <h2>KAMARATIH <span>BOOKING</span></h2>
                                                Online Booking System
                                            </div>
                                            <Link to={`${match.url}/kamaratih`}>View more</Link>
                                        </figcaption>
                                    </figure>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post-item">

                                <div className="grid">
                                    <figure className="effect-ming">
                                        <img src="/assets/images/portfolio/ozonegroup.png" alt="image3"/>
                                        <figcaption>
                                            <div>
                                                <h2>OZONE <span>GROUP</span></h2>
                                                Corporate Web
                                            </div>
                                            <Link to={`${match.url}/ozonegroup`}>View more</Link>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="grid">
                                    <figure className="effect-jazz">
                                        <img src="/assets/images/portfolio/other.png" alt="image3"/>
                                        <figcaption>
                                            <div>
                                                <h2>AND <span>MORE</span></h2>
                                                INTERNAL APP
                                            </div>
                                            <Link to={`${match.url}/other`}>View more</Link>
                                        </figcaption>
                                    </figure>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );

}

export default Portfolio;
