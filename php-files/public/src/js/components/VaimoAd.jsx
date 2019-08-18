import React, { Component } from 'react';

export default class VaimoAd extends Component {
    render() {
        return (
            <div className="vaimo-ad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/img/get-ready.jpg" alt="Winter" className="get-ready-img"/>
                        </div>
                        <div className="col-md-6 vaimo-ad-desc">
                            <h1>This is Vaimo Store</h1>
                            <h3>Your one-stop</h3>
                            <h3>Fashion destination</h3>
                            <h5>Shop from over 850 of the best brands, including VAIMO's own label. Plus, get your daily fix of the freshest style, celebrity and music news.</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
