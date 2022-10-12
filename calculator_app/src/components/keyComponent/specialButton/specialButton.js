import React from "react";
class SpecialButton extends React.Component {
    render() {
        return (
            <div>
                <button className='spcButton' onClick={() => this.props.function(this.props.spc)} > { this.props.spc } </button>
            </div>
        )
    }
}

export default SpecialButton;