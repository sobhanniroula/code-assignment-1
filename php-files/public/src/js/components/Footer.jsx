import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            email: "",
            isLoading: false,
            isValidated: false,
            status: ""
        };

    }

    handleChange(event) {
        this.setState({email: event.target.value})
    }

    submitEmail(event) {
        event.preventDefault();
        this.validateEmail();
        this.setState({email: ""});

        const makeBlock = document.querySelector('.subscription-validate');
        makeBlock.style.display = "block";
    }

    validateEmail() {
        this.setState({ isLoading: true });
        const email = this.state.email;
        fetch(`/newsletter/subscribe?email=${email}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        }).then(response => response.json())
        .then(data => {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    isValidated: true,
                    status: data.status
                });
            }, 1500)
        }).catch((e) => {
            console.log(e);
            this.setState({ isLoading: false });
        })
    }

    render() {

        const { isLoading, status } = this.state;
        let subsValidate, statusString;

        if(isLoading) { 
            subsValidate =
                    (<div className="loading">
                        <img src="/img/spinner.svg" alt="spinner"/>
                        <em> Subscribing to newsletter...</em>
                    </div>);
        }
        
        if(status === "success") {
            statusString = (
                <div className="status-success">
                    <p><i class="fas fa-check"></i><em> Subscription successful.</em></p>
                </div> 
            );
        } else if(status === "failed") {
            statusString = (
                <div className="status-failed">
                    <p><i class="fas fa-exclamation-triangle"></i><em> Email verfication failed...</em></p>
                </div>
            );
        }
        

        return (
            <div className="footer">
                <div class="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Top Categories</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Women</a></li>
                                <li><a href="/">Men</a></li>
                                <li><a href="/">Junior</a></li>
                                <li><a href="/">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Customer Service</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Returns</a></li>
                                <li><a href="/">Shipping</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h5 className="subscribe-text">Newsletter Subscribe</h5>
                            <div className="input-group">
                                <i class="far fa-envelope subs-icon"></i>
                                <input type="email" value={this.state.email} onChange = {this.handleChange.bind(this)} className="form-control subs-input" placeholder="Enter your email address" />
                                <button className="btn btn-subscribe" type="submit" onClick = {this.submitEmail.bind(this)} >Subscribe</button>                                
	                        </div>
                            <div className="subscription-validate">
                                    {subsValidate}
                                    {statusString}                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}
