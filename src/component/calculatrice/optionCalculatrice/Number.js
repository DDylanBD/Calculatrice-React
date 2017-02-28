import React from 'react';
import Button from './Button';

export default class Numbers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var _clickHandler = this.props._clickHandler;

        return (
            <section className="buttons-wrapper numbers">
                {this.props.numbers.map(function(b) {
                    return <Button text={b} _clickHandler={_clickHandler}/>
                })}
            </section>
        );
    }
}

Numbers.defaultProps = {
    numbers: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        '.',
        '=',
        '+',
    ]
};
