import React from 'react';
import PropTypes, { func } from "prop-types";
import ButtonComponent from "./ButtonComponent"


let buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
]


class KeyPadComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(buttons)
        return (
            <div class="container">
            
                <table>
                    <tbody>
                        
                        {buttons.map(
                            (ele, index) => (
                                <tr>
                                    {buttons[index].map(
                                        (ele) => (
                                            <td><ButtonComponent display={ele} clickHandler={this.props.clickHandler}/></td>
                                        )
                                    )}
                                </tr>
                            )
                        )}
                        
                    </tbody>
                </table>

            </div>
        )
    }

}


export default KeyPadComponent;