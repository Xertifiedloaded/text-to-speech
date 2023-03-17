import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import classes from './speech.module.css'
const TextToSpeech = () => {
    const [speaks, setSpeak] = useState('');
    const { speak } = useSpeechSynthesis();
    const handleClick = (e) => {
        setSpeak(e.target.value)
    }
    const handleSubmit = () => {
        speak({ text: speaks })
    };
    return (
        <>
            <div className={classes.main}>

                <div className={classes.speak}>
                    <p>Xertified text to speech</p>
                    <textarea
                        value={speaks}
                        onChange={handleClick}
                    />
                    <button onClick={handleSubmit}>Speak 🗣</button>
                </div>
            </div>
        </>
    )
}

export default TextToSpeech;