import React, {Component} from 'react';
import ButtonNumber from './button/ButtonNumber.js';
import ButtonSymbole from './button/ButtonSymbole.js';

import './Calcul.css';

class Calculatrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "calc": '',
            "allowdecimal": true
        };
    }
    Calcul = (inp) => {
        var allowFutureDecimals = true;
        switch (inp) {
            case "Supp":
                let string = this.state.calc;
                var out = string.substr(0, string.length - 1);
                break;
            case "=":
                var out = eval(this.state.calc);
                allowFutureDecimals = true;
                break;
            case 'AC':
                var out = '';
                break;
            default:
                if (inp == '+' || inp == '-' || inp == '*' || inp == '/') {
                    allowFutureDecimals = true;
                }
                var out = this.state.calc + '' + inp;
        }

        this.setState({"calc": out, "allowdecimal": allowFutureDecimals});
    }

    render() {

        return (
            <div className='container'>
                <div className='containerCalculatrice'>
                    <div className="resultat">
                        <input className='inputResultat' type="text" placeholder="0" value={this.state.calc}/>
                    </div>
                    <div className='containerButton'>
                        <div className='containerNumber'>
                            <div className='contButtonNumber'>
                                <ButtonNumber text="1" Handler={this.Calcul}></ButtonNumber>
                                <ButtonNumber text="2" Handler={this.Calcul}></ButtonNumber>
                                <ButtonNumber text="3" Handler={this.Calcul}></ButtonNumber>
                            </div>
                            <div className='contButtonNumber'>
                                <ButtonNumber text="4" Handler={this.Calcul}></ButtonNumber>
                                <ButtonNumber text="5" Handler={this.Calcul}></ButtonNumber>
                                <ButtonNumber text="6" Handler={this.Calcul}></ButtonNumber>
                            </div>
                            <div className='contButtonNumber'>
                                <ButtonNumber text="7" Handler={this.Calcul}></ButtonNumber>
                                <ButtonNumber text="8" Handler={this.Calcul}></ButtonNumber>
                                <ButtonNumber text="9" Handler={this.Calcul}></ButtonNumber>
                            </div>
                            <div className='containerSymbole2'>
                                <div className='buttonStyle buttonStyle2'>
                                    <ButtonSymbole text='*' Handler={this.Calcul}></ButtonSymbole>
                                </div>
                                <div className='buttonStyle buttonStyle2'>
                                    <ButtonSymbole text='/' Handler={this.Calcul}></ButtonSymbole>
                                </div>
                                <div className='buttonStyle buttonStyle2'>
                                    <ButtonSymbole text='AC' Handler={this.Calcul}></ButtonSymbole>
                                </div>

                            </div>
                        </div>
                        <div className='containerSymbole'>
                            <ButtonSymbole text='+' Handler={this.Calcul}></ButtonSymbole>
                            <ButtonSymbole text='-' Handler={this.Calcul}></ButtonSymbole>
                            <ButtonSymbole text='=' Handler={this.Calcul}></ButtonSymbole>
                            <ButtonSymbole text="Supp" Handler={this.Calcul}></ButtonSymbole>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Calculatrice;
