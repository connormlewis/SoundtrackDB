import React, { Component, Fragment } from 'react';
import { Jumbotron } from "reactstrap";
import { UISref } from '@uirouter/react';

class ErrorPage extends Component {
    renderContent(code) {
        if (code === 500) {
            return (
                <Fragment>
                    <h1 className="display-1">Our bad!</h1>
                    <div className="text-muted">Our server encountered an error.<br/>Please try again, or return <UISref to="home"><a>home</a></UISref>.</div>
                </Fragment>
            )
        } else if (code === 404) {
            return (
                <Fragment>
                    <h1 className="display-1">Oh no!</h1>
                    <div className="text-muted">You made it to a page that doesnt yet exist.<br/>Please go back, or return <UISref to="home"><a>home</a></UISref>.</div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1 className="display-1">Uh oh!</h1>
                    <div className="text-muted">An unknown error occured.<br/>Please try again, or return <UISref to="home"><a>home</a></UISref>.</div>
                </Fragment>
            )
        }
    }

    render() {
        this.code = this.props.transition.params().code
        return (
            <div className="row">
                <div className="col-12 offset-md-3 col-md-6">
                    <Jumbotron className="text-danger text-center" style={{ marginTop: "20vh" }}>
                    {
                        this.renderContent(this.code)
                    }
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default ErrorPage;