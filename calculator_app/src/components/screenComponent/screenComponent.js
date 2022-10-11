import React from 'react';
class Screen extends React.Component {
    render() {
        return (
            <div className='screenTop' style={{color: 'white'}}>
                { this.props.result ? this.props.result : "" }
            </div >
        )
    }
}
export default Screen;