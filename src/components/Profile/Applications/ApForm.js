import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { Animated } from "react-animated-css";


class ApForm extends Component {
    state = {
        company: '',
        jobTitle: '',
        dateApplied: '',
        notes: '',
        recruiter: '',
        lastContact: '',
        phase: '',
        contact: ''
    }

    submit = (e) => {
        e.preventDefault();

        this.props.add({ id: uuid(), ...this.state });

        this.setState({
            company: '',
            jobTitle: '',
            dateApplied: '',
            notes: '',
            recruiter: '',
            lastContact: '',
            phase: '',
            contact: ''
        })

    }

    handleChange = (cat, e) => {
        this.setState({ [cat]: e.target.value })
    }

    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="slideOutUp" isVisible={true}>
                <form onSubmit={(e) => this.submit(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Company: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.company}
                                    onChange={(e) => this.handleChange('company', e)} />
                            </div>

                            <div className="form-group">
                                <label>Job Title: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.jobTitle}
                                    onChange={(e) => this.handleChange('jobTitle', e)} />
                            </div>

                            <div className="form-group">
                                <label>Date Applied: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.dateApplied}
                                    onChange={(e) => this.handleChange('dateApplied', e)} />
                            </div>

                            <div className="form-group">
                                <label>Notes: </label>
                                <textarea
                                    rows="3"
                                    className="form-control"
                                    value={this.state.notes}
                                    onChange={(e) => this.handleChange('notes', e)}></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Recruiter: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.recruiter}
                                    onChange={(e) => this.handleChange('recruiter', e)} />
                            </div>

                            <div className="form-group">
                                <label>Last Contact: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.lastContact}
                                    onChange={(e) => this.handleChange('lastContact', e)} />
                            </div>

                            <div className="form-group">
                                <label>Phase: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.phase}
                                    onChange={(e) => this.handleChange('phase', e)} />
                            </div>

                            <div className="form-group">
                                <label>Contact: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.contact}
                                    onChange={(e) => this.handleChange('contact', e)} />
                            </div>

                            <button type="submit" className="apply-button">Applied</button>
                        </div>
                    </div>
                </form>
            </Animated>
        );
    }
}

export default ApForm;