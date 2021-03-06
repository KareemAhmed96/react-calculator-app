import React from 'react';
import PropTypes, { func } from "prop-types";


class ButtonComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler} >{this.props.display}</button>
            </div>
        )
    }

}


export default ButtonComponent;