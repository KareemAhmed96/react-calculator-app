import React from 'react';
import PropTypes, { func } from "prop-types";
import ActionButtonComponent from "./ActionButtonComponent"
import NumberButtonComponent from "./NumberButtonComponent"


let buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
]


class ButtonComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(numbersArray)
        return (
            <div>
                <h1>Button Component</h1>
                <div>Pressed Button: {this.props.pressed}</div>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <td><ActionButtonComponent display={buttons[0][0]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[0][1]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[0][2]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[0][3]} clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td><NumberButtonComponent display={buttons[1][0]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[1][1]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[1][2]}  clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[1][3]}  clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td><NumberButtonComponent display={buttons[2][0]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[2][1]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[2][2]}  clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[2][3]}  clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td><NumberButtonComponent display={buttons[3][0]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[3][1]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[3][2]}  clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[3][3]}  clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td colSpan="2"><NumberButtonComponent display={buttons[4][0]}  clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={buttons[4][1]}  clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={buttons[4][2]}  eval={this.props.eval} clickHandler={this.props.clickHandler} /></td>
                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }

}


export default ButtonComponent;