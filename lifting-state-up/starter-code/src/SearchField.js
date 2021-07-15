import React, { Component } from 'react'

export default class SearchField extends Component {

    handleChange = event => {
        // we want to trigger an update of the state of query in App.js
        this.props.setQuery(event.target.value);
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.query}
                onChange={this.handleChange}
            />
        )
    }
}
