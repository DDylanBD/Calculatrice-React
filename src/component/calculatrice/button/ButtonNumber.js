import React from 'react';
import './Button.css';
class ButtonNumber extends React.Component {

    Click = () => {
        var val = this.props.text;
        this.props.Handler.call(null,val);
    }

    render() {
        var {
            Handler,
            text,
        } = this.props;
        return (
            <button onClick={this.Click} className='buttonStyle' data-val123={text}>{text}</button>
          )
    }
}
export default ButtonNumber;
