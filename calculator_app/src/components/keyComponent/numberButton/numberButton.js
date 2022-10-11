import React from "react";
class NumberButton extends React.Component {
    render() {
        return (
            <div>
                <button className='numButton' onClick={() => this.props.function(this.props.number)} style={{ width: this.props.number === '0' ? '200px' : '100px' }}>{this.props.number} </button>
            </div>
        )
    }
}
export default NumberButton;