import React from 'react';
import { Link, Route } from 'react-router-dom';
// import { capitalize } from '../../helpers/index';

import content from './Content';
import './css/set2.css';

const Portfolio = ({ match }) => {

    if ( ! match.isExact )

        return (
            <Route path={`${match.path}/:name`} render = {({match}) => (

                <div className="col-md-12">

                    {
                        content.map((prop,key) => {
                            if (prop.path === match.params.name)
                                return (
                                    <div key={key}>
                                        <div className="page-title">
                                            <h2>
                                                <Link to='/portfolio'>
                                                    <span className="fa fa-angle-double-left"></span> 
                                                </Link> { prop.title+' '+prop.subtitle }
                                            </h2>
                                        </div>
                                        
                                        <div className="panel panel-danger">
                                            <div className="panel-body">

                                                <div className="col-md-6">
                                                    <img src={ prop.image } className="img-responsive" alt="image1" style={{ paddingBottom: 30 }}/>
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="post-item">
                                                        <div className="post-title">
                                                            <h3>Project Description</h3><hr/>
                                                        </div>
                                                        <div className="post-text">
                                                            <p>{prop.description}</p>
                                                        </div>
                                                        <hr/>
                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td width="70px">Category</td>
                                                                <td>: {prop.category}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Link</td>
                                                                <td>: <a href={prop.link} target="_blank">{prop.link}</a></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>               
                                )
                            return false
                        })
                    }

                </div>

            )} />
        );

    return (

        <div className="col-md-12">
            <div className="page-title">
                <h2><span className="fa fa-angle-double-right"></span> Portfolio</h2>
            </div>

            <div className="panel panel-warning">
                <div className="panel-body posts">
                    
                    <div className="row">

                        {
                            content.map((prop,key) => {
                                return (

                                    <div className="col-md-4" key={key}>
                                        <div className="grid">
                                            <figure className="effect-ming">
                                                <img src={prop.image} alt={'image'+key}/>
                                                <figcaption>
                                                    <div>
                                                        <h2>{prop.title} <span>{prop.subtitle}</span></h2>
                                                        {prop.category}
                                                    </div>
                                                    <Link to={`${match.url}/`+prop.path}>View more</Link>
                                                </figcaption>
                                            </figure>
                                        </div>                                        
                                    </div>

                                )
                            })
                        }

                        <div className="col-md-4">
                            <div className="grid">
                                <figure className="effect-jazz">
                                    <img src="/assets/images/portfolio/other.png" alt="image3"/>
                                    <figcaption>
                                        <div>
                                            <h2>AND <span>MORE</span></h2>
                                            INTERNAL APP
                                        </div>
                                        <Link to='/contact'>View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );

}

export default Portfolio;
