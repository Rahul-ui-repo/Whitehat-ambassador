import React, { useState } from 'react';
import './emailModal.scss';

const EmailModal = (props) => {
    const [email, setEmail] = useState("")
    const [message , setMessage] = useState("")

    const sendmail = () => {
            props.rewardPointsIncrease();
            setMessage("")
            fetch('https://movers-san-francisco.com/email_sender.php', {
                method: 'POST',
                'Accept': 'application/json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'email_message=' + JSON.stringify({
                    'mail_to': email,
                    'mail_subject': "Gift card",
                    'mail_message': "Here is your Gift Card"
                })
            }).then(response => response.json()).then(data => {
                if (data.result == 'success') {
                    setMessage("Gift card Sent !")
                }
                else {
                    setMessage("Gift card Not Sent! Try Again")
                }
            })
    }

    const closeModal = () => {
        setMessage("")
        setEmail("")
        props.closeModal()
    }

    return (
        <>
            {props.modalShow ?
                <div className="emailModal">
                    <div>Enter your friend's email:</div>
                    <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    <div className="buttons">
                        <input type="button" value="Send Gift card" onClick={() => sendmail()} />
                        <input type="button" value="Close" onClick={() => closeModal()} />
                    </div>
                    {message.length > 0 && <h5>{message}</h5>}
                    <h5>Email functionality is working , you can send the mail to any email id</h5>
                </div> : ""}
        </>
    )
}

export default EmailModal