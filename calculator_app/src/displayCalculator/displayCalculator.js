import NumberButton from "../components/keyComponent/numberButton/numberButton";
import CalculationButton from "../components/keyComponent/calculationButton/calculationButton";
import SpecialButton from "../components/keyComponent/specialButton/specialButton";
import Screen from "../components/screenComponent/screenComponent";
import React from "react";

class DisplayCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayValue: '', resultValue: 0, logic: [], numberInput: [] };
    }

    render() {
        const clearScreen = () => {
            this.setState({ displayValue: '', resultValue: 0, logic: [], numberInput: [] })
        }

        const previousDigit = (digit) => {
            this.state.numberInput.push(digit);
            this.setState({
                displayValue: this.state.displayValue === '' ? String(digit) : this.state.displayValue + digit,
                numberInput: this.state.numberInput
            })
        }

        const previousDot = () => {
            this.setState({ displayValue: this.state.displayValue + '.' })
        }

        const previousLogic = (logic) => {
            this.state.logic.push(logic);
            this.setState({
                displayValue: this.state.displayValue + logic,
                logic: this.state.logic
            })
        }
        const previousPositiveNegative = () => {
            this.setState({
                displayValue: this.state.displayValue.charAt(0) === '-' ? this.state.displayValue.substring(1) : '-' + this.state.displayValue
            })
        }

        const previousPercent = () => {
            const percentNum = parseFloat(this.state.displayValue)
            this.setState({
                displayValue: String(percentNum / 100)
            })
        }

        const resultCalculate = () => {
            var result = parseFloat(this.state.numberInput[0]);
            for (var i = 1; i < this.state.numberInput.length; i++) {
                if (this.state.logic[i - 1] === '+') {
                    result += parseFloat(this.state.numberInput[i]);
                }
                else if (this.state.logic[i - 1] === '-') {
                    result -= parseFloat(this.state.numberInput[i]);
                }
                else if (this.state.logic[i - 1] === '*') {
                    result = result * parseFloat(this.state.numberInput[i]);
                }
                else if (this.state.logic[i - 1] === '/') {
                    result /= parseFloat(this.state.numberInput[i]);
                }

            }
            this.setState({
                displayValue: this.state.displayValue,
                resultValue: result
            })
        }

        return (
            <div>
                <Screen result={this.state.resultValue} />
                <div className='previous'>{this.state.displayValue}</div>
                <div className="rowButton">
                    <div className="row1">
                        <SpecialButton spc='AC' function={clearScreen} />
                        <SpecialButton spc='+-' function={previousPositiveNegative} />
                        <SpecialButton spc='%' function={previousPercent} />
                        <CalculationButton cal = '/' function={previousLogic} />
                    </div>
                    <div className="row2">
                        <NumberButton number = '7' function={previousDigit} />
                        <NumberButton number = '8' function={previousDigit} />
                        <NumberButton number = '9' function={previousDigit} />
                        <CalculationButton cal = '*' function={previousLogic} />
                    </div>
                    <div className="row3">
                        <NumberButton number = '4' function={previousDigit} />
                        <NumberButton number = '5' function={previousDigit} />
                        <NumberButton number = '6' function={previousDigit} />
                        <CalculationButton cal = '-' function={previousLogic} />
                    </div>
                    <div className="row4">
                        <NumberButton number = '1' function={previousDigit} />
                        <NumberButton number = '2' function={previousDigit} />
                        <NumberButton number = '3' function={previousDigit} />
                        <CalculationButton cal = '+' function={previousLogic} />
                    </div>
                    <div className="row5">
                        <NumberButton number = '0' function={previousDigit} />
                        <NumberButton number = '.' function={previousDot} />
                        <CalculationButton cal = '=' function={resultCalculate} />
                    </div>
                </div>
            </div>
        )
    }
}
export default DisplayCalculator;