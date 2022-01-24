import React, { useState } from 'react';


export default function TextForm(props) {
    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces removed","success");
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Uppercase","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lowercase","success");
    }
    const handleJoinClick = () => {
        // setText(text.trim());
        // console.log(typeof text);
        // let newText = text.split(" ");
        // console.log(typeof newText);
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
        props.showAlert("words joined","success");

    }
    const handleTrimClick = () => {
        setText(text.trim());
        console.log(text);
        props.showAlert("Text trimed","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handlecleanClick = () => {
        setText("");
        props.showAlert("Text cleaned","success");
    }
    const getWords = () => {
        if (text === "") {
            return 0;
        } else {
            return text.split(" ").length;
        }

    }
    const [text, setText] = useState('');
    // text = "New text"; // Wrong way to change the text
    // setText("");// correct way to cghange the text
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#002356' : 'white' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#292a2e',color: props.mode === 'light' ? 'black' : 'white'}} className="form-control" placeholder='Enter Text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>{/*  onChange method is requied because it will not be  editable if we specify value as a state variable(state variable can onlh be change by using the setText method) */}
                <button className="btn btn-primary mx-1 mt-2" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleLowClick}>lowercase</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handlecleanClick}>clear</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleTrimClick}>Trim</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleJoinClick}>Join</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={removeExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'light' ? '#002356' : 'white'}}>
                <h1>Your text summery</h1>
                <p>{getWords()} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read </p>
                <h3> Preview </h3>
                <p>{text.length>0?text:'Enter Something to preview!'}</p>
            </div>
        </>
    )
}
