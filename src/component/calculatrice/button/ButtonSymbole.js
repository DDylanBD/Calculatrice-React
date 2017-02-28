import React from 'react';
import './Button.css';
class ButtonSymbole extends React.Component {
    constructor(props) {
        super(props);
    }
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
            <button onClick={this.Click} className='buttonSymbole' data-val123={text}>{text}</button>
          )
    }
}
export default ButtonSymbole;
