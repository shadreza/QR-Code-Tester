import React from 'react';
import { useState } from 'react';
import './Homepage.css';
// importing the qr module
import QRCode from "react-qr-code";

const Homepage = () => {

    const empty = ""
    const [input, setInput] = useState(empty)
    const [text, setText] = useState(input)

    const getCode = () => {
        setText(input)
        if( input.trim().length > 0 ) {
            document.getElementById('output-div').style.display="block"
        } else {
            document.getElementById('output-div').style.display="none"
            alert('Please enter your text properly !')
        }
    }

    const changeInput = (e) => {
        setInput(e.target.value)
        document.getElementById('output-div').style.display="none"
    }

    return (
        <div className="homepage-parent-div">
            <h1 className="homepage-title">
                <span className="homepage-title-span-section">QR</span> code generator
            </h1>
            <div className="homepage-input-for-qr">
                <p>
                    <small className="small-text">enter what you wanna make a qr-code of</small>
                </p>
                <input type="text" id="input-val" className="homepage-input-section" placeholder="type here..." onChange={e => { changeInput(e)}} />
                <br />
                <button className="generate-qr-button" onClick={() => {getCode()}}>
                    Generate QR
                </button>
            </div>
            <div className="homepage-output-for-qr" id="output-div">
                <QRCode value= {text} />
                <br />
                <p>
                    <small className="small-ending-text">now scan your code!</small>
                </p>
            </div>
        </div>
    );
};

export default Homepage;