import React from 'react';
import PropTypes, { func } from "prop-types";


class ScreenComponent extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <h1>Screen Component</h1>
                <div>Screen: {this.props.res}</div>
            </div>
        )
    }

}


export default ScreenComponent;