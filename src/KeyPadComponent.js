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
            <div>
                <h1>Button Component</h1>
                <div>Pressed Button: {this.props.pressed}</div>
                <br/>
                
                <table>
                    <tbody>
                        <tr>
                            {buttons[0].map(
                            (ele, index, array) => 
                               <td><ButtonComponent display={ele} clickHandler={this.props.clickHandler}/></td>
                            )}
                        </tr>
                        <tr>
                            {buttons[1].map(
                            (ele, index, array) => 
                                <td><ButtonComponent display={ele} clickHandler={this.props.clickHandler}/></td>
                            )}
                        </tr>
                        <tr>
                            {buttons[2].map(
                            (ele, index, array) => 
                                <td><ButtonComponent display={ele} clickHandler={this.props.clickHandler}/></td>
                            )}
                        </tr>
                        <tr>
                            {buttons[3].map(
                            (ele, index, array) => 
                                <td><ButtonComponent display={ele} clickHandler={this.props.clickHandler}/></td>
                            )}
                        </tr>
                        <tr>
                            {buttons[4].map(
                            (ele, index, array) => 
                                <td><ButtonComponent display={ele} clickHandler={this.props.clickHandler}/></td>
                            )}
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}


export default KeyPadComponent;