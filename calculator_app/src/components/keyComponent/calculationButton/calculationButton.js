import React from "react";
class CalculationButton extends React.Component {
    render() {
        return (
            <div>
                <button className='calButton' onClick={() => this.props.function(this.props.cal)} style={{ backgroundColor: this.props.cal === 'AC' ? 'white' : 'orange' }}>{this.props.cal}</button>
            </div>
        )
    }
}

export default CalculationButton;