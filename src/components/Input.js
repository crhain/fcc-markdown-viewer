import React, { Component } from 'react';

export default class Input extends Component {
    render(){
        return (
            <div className="input col-md-6">
                <h3>Enter Markdown Here</h3>
                <textarea 
                    name="text-input" 
                    id="text-input"
                    className="text-window form-control"
                    rows="25"                                     
                    value={this.props.text}
                    onChange={this.props.handleChange}
                    >
                </textarea>
            </div>    
        );
    }
}