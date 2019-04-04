import React, { Component } from 'react';
import Toggle from './Toggle';

class ApDisplay extends Component {
    state = {
        
    }
    
    

    render() {
        return ( 
            <div className="table-container">
                <table className="table table-striped">
                    <thead>
                        <tr className="profile-table">
                            <th scope="col">#</th>
                            <th scope="col">Company</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Date Applied</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Recruiter</th>
                            <th scope="col">Date of Last Contact</th>
                            <th scope="col">Phase</th>
                            <th scope="col">Notes</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {this.props.apps.map((a, i) =>
                                <tr key={a.id}>
                                    <th scope="row">{i + 1}</th>
                                    <Toggle update={this.props.update} category={a.company} value={'company'} index={i}/>
                                    <Toggle update={this.props.update} category={a.jobTitle} value={'jobTitle'} index={i}/>
                                    <Toggle update={this.props.update} category={a.dateApplied} value={'dateApplied'} index={i}/>
                                    <Toggle update={this.props.update} category={a.contact} value={'contact'} index={i}/>
                                    <Toggle update={this.props.update} category={a.recruiter} value={'recruiter'} index={i}/>
                                    <Toggle update={this.props.update} category={a.lastContact} value={'lastContact'} index={i}/>
                                    <Toggle update={this.props.update} category={a.phase} value={'phase'} index={i}/>
                                    <Toggle update={this.props.update} category={a.notes} value={'notes'} index={i}/>
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