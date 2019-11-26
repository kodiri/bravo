import React, { useState }from 'react';
import './QRCodeForm.css';
export default function QRCodeForm() {
    const qrCodeArray = [];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyOrg, setCompanyOrg] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    // let emailReplace = email.replace("@", "%40");
    const [telTypeCell, setTelTypeCell] = useState('');
    const [telTypeWork, setTelTypeWork] = useState('');
    const [note, setNote] = useState('');
    const [url, setUrl] = useState('');
    const [address, setAddress] = useState('');
    const [qrUrl, setQRUrl] = useState('');

    const handleSubmit = (event)=> {
        event.preventDefault();
        let qrCodeObj = {
            firstName: {firstName},
            lastName: {lastName},
            email: {email},
            companyOrg:{companyOrg},
            jobTitle:{jobTitle},
            telTypeCell:{telTypeCell},
            telTypeWork:{telTypeWork},
            note:{note},
            url:{url},
            address: {address},
        };
       const composeURL = `https://qrickit.com/api/qr.php?d=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0aN%3a${lastName}%3b${firstName}%0d%0aORG%3a${companyOrg}.%0d%0aTITLE%3a${jobTitle}%0d%0aEMAIL%3a${email}%0d%0aTEL%3bTYPE%3dCELL%3a${telTypeCell}%0d%0aTEL%3bTYPE%3dWORK%2c%0d%0aVOICE%3a${telTypeWork}%0d%0aNOTE%3a${note}%0d%0aURL%3a${url}%0d%0aADR%3a%3b%3b${address}%0d%0aEND%3aVCARD%0A&addtext=&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=300`;

        // qrCodeArray.push(qrCodeObj);
        console.log('button clicked', qrCodeObj);
        // console.log(qrCodeArray);
        setQRUrl(composeURL);
        console.log(qrUrl);
    }

    return (
        <>
        <div className='QRCodeFormContainer'>
            <h1>TAP QR Code Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='tapInputRow'>
                    <label htmlFor='firstName'>First name: </label>
                    <input 
                        className='tapInput'
                        id='firstName'
                        type='text'
                        placeholder='Enter first name'
                        name='firstName'
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last name</label>
                    <input 
                        id='lastName'
                        type='text'
                        placeholder='Last name'
                        name='lastName'
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                        id='email'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='companyOrg'>Company</label>
                    <input 
                        id='companyOrg'
                        type='text'
                        placeholder='Company name'
                        name='companyOrg'
                        value={companyOrg}
                        onChange={(e)=> setCompanyOrg(e.target.value)}  
                    />
                </div>
                <div>
                    <label htmlFor='jobTitle'>Job Title</label>
                    <input 
                        id='jobTitle'
                        type='text'
                        placeholder='Job title'
                        name='jobTitle'
                        value={jobTitle}
                        onChange={(e)=> setJobTitle(e.target.value)}  
                    />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <textarea 
                        id='address'
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}  
                    />
                </div>                
                <div>
                    <label htmlFor='mobile'>Mobile</label>
                    <input 
                        id='telTypeCell'
                        type='number'
                        placeholder='Mobile number'
                        name='telTypeCell'
                        value={telTypeCell}
                        onChange={(e)=> setTelTypeCell(e.target.value)}                        
                    />
                </div>
                <label htmlFor='telTypeWork'>Work</label>
                    <input 
                        id='telTypeWork'
                        type='number'
                        placeholder='Work number'
                        name='telTypeWork'
                        value={telTypeWork}
                        onChange={(e)=> setTelTypeWork(e.target.value)}
                    />
                <div>
                    <label htmlFor='socialMediaUrl1'>Social Media URL 1</label>
                    <input 
                        id='url'
                        type='text'
                        placeholder='Social Media URL'
                        name='url'
                        value={url}
                        onChange={(e)=> setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='socialMediaUrl2'>Social Media URL 2</label>
                    <input 
                        id='note'
                        type='text'
                        placeholder='Add. Social Media URL'
                        name='note'
                        value={note}
                        onChange={(e)=> setNote(e.target.value)}
                    />
                </div>                                
                <input
                    type='submit' 
                    name='submit' 
                    value='Create QR Code'
                />                
            </form>
        </div>
        <div className='displayQRCode'>
            {
                firstName || lastName ? <img alt='qrcode' src={qrUrl}></img> : 'No QR Code yet!'
            }
        </div>
    </>
    )
}
