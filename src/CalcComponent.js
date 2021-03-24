import React from 'react';
import PropTypes, { func } from "prop-types";
import ScreenComponent from "./ScreenComponent"
import KeyPadComponent from "./KeyPadComponent"


class CalcComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            screen: "0",
            pressed: "",
        }
    }

    getClickedButtton = (event) => {

        if(event.target.innerHTML == "=") {
            this.evaluate()
            return
        }

        if(event.target.innerHTML == "AC") {
            this.clear()
            return
        }

        if(event.target.innerHTML == "+/-") {
            this.toggleSign()
            return
        }

        if(event.target.innerHTML == "%") {
            this.percentage()
            return
        }

        if(this.state.screen == "0") {
            let withoutZero = this.state.screen.substr(1, this.state.screen.length-1)
            this.setState({screen: withoutZero+event.target.innerHTML})
            return
        }

        this.setState({screen: this.state.screen+event.target.innerHTML})
        this.setState({pressed: event.target.innerHTML})
        
        console.log(event)
    }

    evaluate = () => {
        let result = eval(this.state.screen)
        console.log("result: ", result)

        this.setState({screen: String(result)})
    }

    clear = () => {
        this.setState({screen: "0"})
    }

    toggleSign() {
        let sign = this.state.screen[0]

        console.log("First Char", this.state.screen[0])

        if(sign == "-") {
            let number = this.state.screen.substr(1, this.state.screen.length-1)
            
            this.clear()
            this.setState({screen: number})
        }
        else {
            this.setState({screen: '-'+this.state.screen})
        }
    }

    percentage() {
        this.setState({screen: this.state.screen/100})
    }

    render() {
        return (
            <div>
                <ScreenComponent res={this.state.screen} />
                <KeyPadComponent clickHandler={this.getClickedButtton} eval={this.evaluate} pressed={this.state.pressed} />
            </div>
        )
    }
}


export default CalcComponent;