"use client"
import Image from 'next/image'
import { useState } from 'react';
import "../../styles/homePage/firstComponent.css"
import Form from './dataForm';
import cloud from "../../../../assets/cloud.png";
import awsLogo from "../../../../assets/awsLogo.png";
import razorpay from "../../../../assets/razorpay.png";
import redhat from "../../../../assets/redhat.svg";
import tensorflow from "../../../../assets/tensorflow.svg";
import azure from "../../../../assets/azure.svg";

function FirstComponent(req, res) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            //   name,
            //   phone,
            email,
            //   message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                console.log(req.body)
                // setName('')
                // setPhone('')
                setEmail('')
                // setBody('')
                console.log(req.body);
            };
        });
    };

    return (
        <>
            <div className='wholeComponent'>
                <div>
                    <p className='firstLine'>
                        Don&apos;t Judge, Just <span className='firstLine-span'>Explore!</span>
                    </p>
                    <br />
                    <p className='largeTextFirst'>
                        A Balanced academic industry approach for uplifting students <br />
                        by enhanced learning for skill development leading to informed career <br />
                        choices resulting increased employability, creating innovative mindset <br />
                        for open-source with professional evaluation for tough competition <br />
                        in this ever evoloving world of technologies.
                    </p>
                    {/* <Form /> */}
                    <div className='cloud-box' >
                        <Image
                            className='cloud'
                            src={cloud}
                            alt="Cloud Data"
                        />
                        <p className="organization">Trusted by World Leading Organizations</p>
                    </div>
                    <div className='companyLogos'>
                        <Image className='awsLogo' src={awsLogo} alt="AWS Logo" width='150' height='150' />
                        <Image className='razorpay' src={razorpay} alt="Razorpay Logo" width='150' height='150' />
                        <Image className='azure' src={azure} alt="azure logo" width='150' height='150' />
                        <Image className='tensorflow' src={tensorflow} alt="Tensorflow Logo" width='150' height='150' />
                    </div>
                    {/* <div className='companyLogos'>
                        <Image className='razorpay' src={razorpay} alt="Razorpay Logo" width='100' height='100' />
                    </div> */}



                    {/* //MailBox & MailConnector */}
                    {/* <div className={styles.container}> */}
                    {/* < form className='wholeComponent' > */}
                    {/* < formGroup className='inputGroup' >
                                < label htmlFor='name'>Name</label>
                                < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className='inputField'/>
                            </formGroup>< formGroup className='inputGroup' >
                                < label htmlFor='email'>Phone</label>
                                < input type='email' onChange={(e)=>{setPhone(e.target.value)}} name='email' className='inputField' />
                            </formGroup> */}
                    {/* < formGroup className='inputGroup' >
                                < label htmlFor='email'>Email</label>
                                < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className='inputField' />
                            </formGroup> */}
                    {/* < formGroup className='inputGroup' >
                                < label htmlFor='message'>Message</label>
                                < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className='inputField' />
                            </formGroup> */}
                    {/* < input type='submit' onClick={(e)=>{handleSubmit(e)}}/> */}
                    {/* </form > */}
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}


/*Function to handle the data submitted in form*/
const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
        //   name,
        //   phone,
        email,
        //   message
    }
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            // setName('')
            // setPhone('')
            setEmail('')
            // setBody('')
        };
    });
};


/*Custom form builder for data submission */





export default FirstComponent;