import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="page-title">
                    <h2><span className="fa fa-angle-double-right"></span> Contact</h2>
                </div>

                <div className="panel panel-primary">
                    <div className="panel-body">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" placeholder="youremail@domain.com"/>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="email" className="form-control" placeholder="Message subject"/>
                        </div>                                
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" placeholder="Your message" rows="3"></textarea>
                        </div>                                
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-default"><span className="fa fa-paperclip"></span> Add attachment</button>
                        <button className="btn btn-success pull-right"><span className="fa fa-envelope-o"></span> Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;