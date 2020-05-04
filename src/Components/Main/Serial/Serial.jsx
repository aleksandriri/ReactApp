import React from 'react';
import style from './Serial.module.css'
import {NavLink} from "react-router-dom";
import Block from "../Block/Block";

const Serial = (props) => {
    debugger
    let BlockElements = props.stateSerial.SerialData.map((serial) => {
        return (
            <NavLink className={'main__block__item'} to="/page">
                <Block key={serial.id} name={serial.name} poster={serial.poster}/>
            </NavLink>
        )
    });
    return (
        <div className={'content__inner'}>
            {BlockElements}
        </div>
    );
};

export default Serial;