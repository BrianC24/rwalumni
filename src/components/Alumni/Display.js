import React, { Component } from 'react';

class Display extends Component {
    state = {}
    render() {
        let { alumni } = this.props;
        return (
            <div className="alum-display-content">
                <table className="table alum-table">
                    <thead>
                        <th scope="col">Icon</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Cohort</th>
                        <th scope="col">Slack</th>
                    </thead>
                    <tbody>
                        {alumni.map((a, i) =>
                            <tr key={a.id}>
                                <th scope="row">
                                    <div className="alum-img-container">
                                        <img src={a.profilePic} alt="" />
                                    </div>
                                </th>
                                <td>{a.fName} {a.lName}</td>
                                <td>{a.email}</td>
                                <td>{a.phone}</td>
                                <td>{a.cohort}</td>
                                <td>{a.slackUsername}</td>
                            </tr>
                        )}
                    </tbody>

                </table>


            </div>
        );
    }
}

export default Display;


