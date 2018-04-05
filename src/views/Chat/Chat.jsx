import React, { Component } from 'react';

class Chat extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="page-title">
                    <h2><span className="fa fa-angle-double-right"></span> Chat</h2>
                </div>

                <div className="panel panel-danger">
                    <div className="panel-body">

                        <div className="messages messages-img">
                            <div className="item in item-visible">
                                <div className="image">
                                    <img src="assets/images/users/user2.jpg" alt="John Doe"/>
                                </div>
                                <div className="text">
                                    <div className="heading">
                                        <a>John Doe</a>
                                        <span className="date">08:33</span>
                                    </div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis suscipit eros vitae iaculis.
                                </div>
                            </div>
                            <div className="item item-visible">
                                <div className="image">
                                    <img src="assets/images/users/user.jpg" alt="Dmitry Ivaniuk"/>
                                </div>                                
                                <div className="text">
                                    <div className="heading">
                                        <a>Dmitry Ivaniuk</a>
                                        <span className="date">08:27</span>
                                    </div>                                    
                                    Quisque ultricies turpis pulvinar lectus semper, eget fringilla purus tincidunt.
                                </div>
                            </div>
                            <div className="item in item-visible">
                                <div className="image">
                                    <img src="assets/images/users/user2.jpg" alt="John Doe"/>
                                </div>
                                <div className="text">
                                    <div className="heading">
                                        <a>John Doe</a>
                                        <span className="date">08:25</span>
                                    </div>
                                    Fusce dictum mauris quis velit cursus, consectetur tempor justo volutpat.
                                </div>
                            </div>                            
                        </div>                                

                    </div>
                    <div className="panel-footer">
                        <div className="input-group">                                    
                            <input className="form-control" placeholder="Type a message..." type="text"/>
                            <span className="input-group-btn">
                                <button className="btn btn-success" type="button">Send</button>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Chat;