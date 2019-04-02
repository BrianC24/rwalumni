import React, { Component } from 'react';

class Toggle extends Component {
    state = {
        toggle: false,
        itemToUpdate: ''
    }

    submit = (e) => {
        e.preventDefault();

        this.props.update(this.props.index, this.props.value, this.state.itemToUpdate);
        this.setState({ toggle: true, itemToUpdate: '' })
    }

    render() {
        return (
            <td onClick={() => this.setState({ toggle: true})}>
                {!this.state.toggle ?
                    this.props.category
                    :
                    <form onSubmit={(e) => this.submit(e)}>
                        <input 
                            type="text" 
                            placeholder={this.props.category} 
                            className="form-control" 
                            value={this.state.itemToUpdate}
                            onChange={(e) => this.setState({ itemToUpdate: e.target.value })}/>
                    </form>
                }

            </td>
        );
    }
}

export default Toggle;