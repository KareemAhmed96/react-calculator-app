import React from 'react';
import PropTypes, { func } from "prop-types";
import ActionButtonComponent from "./ActionButtonComponent"
import NumberButtonComponent from "./NumberButtonComponent"


let numbersArray = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.']
]
  
let horizontalOptions = [
    'AC', '+/-', '%'
]
  
let verticalOptions = [
    '/',
    '*',
    '-',
    '+',
    '='
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
                            <td><ActionButtonComponent display={horizontalOptions[0]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={horizontalOptions[1]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={horizontalOptions[2]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={verticalOptions[0]} clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td><NumberButtonComponent display={numbersArray[0][0]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[0][1]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[0][2]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={verticalOptions[1]} clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td><NumberButtonComponent display={numbersArray[1][0]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[1][1]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[1][2]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={verticalOptions[2]} clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td><NumberButtonComponent display={numbersArray[2][0]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[2][1]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[2][2]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={verticalOptions[3]} clickHandler={this.props.clickHandler}/></td>
                        </tr>

                        <tr>
                            <td colSpan="2"><NumberButtonComponent display={numbersArray[3][0]} clickHandler={this.props.clickHandler}/></td>
                            <td><NumberButtonComponent display={numbersArray[3][1]} clickHandler={this.props.clickHandler}/></td>
                            <td><ActionButtonComponent display={verticalOptions[4]} eval={this.props.eval} clickHandler={this.props.clickHandler} /></td>
                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }

}


export default ButtonComponent;