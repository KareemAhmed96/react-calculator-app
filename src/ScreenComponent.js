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
            <div class="container">
                <div id="output">{this.props.res}</div>
            </div>
        )
    }

}


export default ScreenComponent;