import React, { Component } from 'react';

export default class Input extends Component {
    render(){
        return (
            <div className="input col-md-6">
                <h3>My Input Window</h3>
                <textarea 
                    name="text-input" 
                    id="text-input"                     
                    cols="30" 
                    rows="10"
                    value={this.props.text}
                    onChange={this.props.handleChange}
                    >
                </textarea>
            </div>    
        );
    }
}