import React, { useState } from 'react'

// accept arguments in props
export default function TextForm(props) {

    // convert to uppercase
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    // convert to lowercase
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }

    // it is used for to set text value which is enter in textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // clear text
    const handleClearText = () => {
        setText('');
        props.showAlert("Text cleared!","success");
    }

    // for copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
    }

    // remove extra white spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space!","success");
    }

    // this is syntax for useState
    //  text is a variable (write name according to you)
    // setText is a function (write name according to you)
    // in useState, you can define default text.
    const [text, setText] = useState('');

    return (
        <>
            <div className={`container mt-3 text-${props.mode==='dark'?'white':'dark'}`}>
                <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>  {/* use for display heading by props */}
                <div className="mb-3">
                    {/* onChange is compulsary to set text value in variable. */}
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'#152327':'white', color: props.mode==='dark'?'white':'black' }} value={text} id="myBox" rows="6"></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-2' onClick={handleUpCase}>Convert to Uppercase</button>

                <button className='btn btn-primary mx-1 my-2' onClick={handleLowCase}>Convert to Lowercase</button>

                <button className='btn btn-primary mx-1 my-2' onClick={handleClearText}>Clear text</button>

                <button className='btn btn-primary mx-1 my-2' onClick={handleCopy}>Copy to clipboard</button>

                <button className='btn btn-primary mx-1 my-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            
            <div className={`container mt-3 text-${props.mode==='dark'?'white':'dark'}`}>
                <h2>Your text summary</h2>

                {/* for see words count and characters count */}
                <p>{text.split(" ").length} words and {text.length} characters.</p> 

                {/* if take 0.008 minute to read 1 word  so count reading time */}
                <p>Taken {0.008 * text.split(" ").length} Minutes to read.</p>

                <h2>Preview</h2>
                {/* display what is in textarea */}
                <p>{text.length>0?text:'Enter text into above textarea to preview here.'}</p>
            </div>
        </>
    )
}
