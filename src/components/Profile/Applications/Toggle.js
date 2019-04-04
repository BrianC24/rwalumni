import React, { Component } from 'react';
import { S_IFREG } from 'constants';

class Toggle extends Component {
    state = {
        toggle: false,
        itemToUpdate: this.props.category
    }

    submit = (e) => {
        e.preventDefault();

        this.props.update(this.props.index, this.props.value, this.state.itemToUpdate);
        this.setState({ toggle: false })
    }

    // checks textarea if they press enter to submit
    enterCheck = (e) => {
        if(e.keyCode == 13) {
            this.submit(e)
        } 
    }


    render() {
        return (
            <td onClick={() => this.setState({ toggle: true})}>
                {!this.state.toggle ?
                    this.props.category
                    :
                    <form ref="appForm" onSubmit={(e) => this.submit(e)}>

                        {this.props.value !== 'notes' ?
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.itemToUpdate}
                                onChange={(e) => this.setState({ itemToUpdate: e.target.value })}/>
                            :
                            <textarea 
                                rows="3" 
                                className="form-control"
                                value={this.state.itemToUpdate}
                                onChange={(e) => this.setState({ itemToUpdate: e.target.value })}
                                onKeyDown={(e) => this.enterCheck(e)}>
                            </textarea>
                        }

                    </form>
                }
            </td>
        );
    }
}

export default Toggle;