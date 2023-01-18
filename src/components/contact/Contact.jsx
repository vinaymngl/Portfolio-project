import React, { useContext, useRef } from 'react';
import "./contact.css"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done,setDone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0d1ue49', 'template_tfknbpm', formRef.current, '9t1KhCyWNf6f7F1S-')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss</h1>
                    <div className="info">
                        <div className="c-info-item">
                            <img src=""
                                alt=""
                                className="c-icon"
                            />
                            +12345678
                        </div>
                        <div className="c-info-item">
                            <img src=""
                                alt=""
                                className="c-icon"
                            />
                            vinaymangal003@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src=""
                                alt=""
                                className="c-icon"
                            />
                            Jaipur,India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}  >
                        <input type="text" style = {{backgroundColor: darkMode &&"#444"}} placeholder='Name' name="user_name" />
                        <input type="text" style = {{backgroundColor: darkMode && "#444"}} placeholder='Subject' name="user_subject" />
                        <input type="email" style = {{backgroundColor: darkMode &&"#444"}} placeholder='Email' name="user_email" />
                        <textarea name="message" style = {{backgroundColor: darkMode && "#444"}} placeholder='Message' rows="5" />
                        <button>Submit</button>
                        {done && "Thank you for the message"}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
