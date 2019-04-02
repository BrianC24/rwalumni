import React, { Component } from 'react';
import Toggle from './Toggle';

class ApDisplay extends Component {
    state = {
    }
    

    render() {
        return ( 
            <div className="table-container">
                <table className="table table-striped">
                    <thead className="fixed">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Company</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Date Applied</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Recruiter</th>
                            <th scope="col">Date of Last Contact</th>
                            <th scope="col">Phase</th>
                            <th scope="col">Notes</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {this.props.apps.map((a, i) =>
                                <tr key={a.id}>
                                    <th scope="row">{i + 1}</th>
                                    <Toggle update={this.props.update} category={a.company} value={'company'} index={i}/>
                                    <td>{a.jobTitle}</td>
                                    <td>{a.dateApplied}</td>
                                    <td>{a.contact}</td>
                                    <td>{a.recruiter}</td>
                                    <td>{a.lastContact}</td>
                                    <td>{a.phase}</td>
                                    <td>{a.notes}</td>
                                    <td className="del-button" onClick={() => this.props.delete(i)}>x</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
         );
    }
   
}
 
export default ApDisplay;