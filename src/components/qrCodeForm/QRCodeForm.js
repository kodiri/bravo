import React, { useState }from 'react';
import './QRCodeForm.css';
export default function QRCodeForm() {
    
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
    const [ firstNameSelected, setFirstNameSelected ] = useState(true);
    const [lastNameSelected, setLastNameSelected] = useState(true);
    const [companyOrgSelected, setCompanyOrgSelected] = useState(true);
    const [jobTitleSelected, setJobTitleSelected] = useState(true);
    const [emailSelected, setEmailSelected] = useState(true);
    const [telTypeCellSelected, setTelTypeCellSelected] = useState(true);
    const [telTypeWorkSelected, setTelTypeWorkSelected] = useState(true);
    const [noteSelected, setNoteSelected] = useState(true);
    const [urlSelected, setUrlSelected] = useState(true);
    const [addressSelected, setAddressSelected] = useState(true);
    const [ qrButtonPressed, setqrButtonPressed ] = useState(false);

    const handleSubmit = (event)=> {
        event.preventDefault();
        setqrButtonPressed(true);
        const generatedQRUrl = generateQRCode();
        setQRUrl(generatedQRUrl);
    }
    
    // function to submit selected fields to QR code URL
    const generateQRCode = () => {
        let qrFirstName  = firstNameSelected ? firstName : '' ;
        let qrLastName = lastNameSelected ? lastName: '' ;
        let qrEmail = emailSelected ? email : '' ;
        let qrCompanyOrg = companyOrgSelected ? companyOrg : '' ;
        let qrJobTitle = jobTitleSelected ? jobTitle : '' ;
        let qrtelTypeCell = telTypeCellSelected ? telTypeCell : '' ;
        let qrtelTypeWork = telTypeWorkSelected ? telTypeWork : '' ;
        let qrNote = noteSelected ? note : '' ;
        let qrUrl = urlSelected ? url : '' ;
        let qrAddress = addressSelected ? address : '' ;
        // const composeURL = `https://qrickit.com/api/qr.php?d=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0aN%3a${qrLastName}%3b${qrFirstName}%0d%0aORG%3a${qrCompanyOrg}.%0d%0aTITLE%3a${qrJobTitle}%0d%0aEMAIL%3a${qrEmail}%0d%0aTEL%3bTYPE%3dCELL%3a${qrtelTypeCell}%0d%0aTEL%3bTYPE%3dWORK%2c%0d%0aVOICE%3a${qrtelTypeWork}%0d%0aNOTE%3a${qrNote}%0d%0aURL%3a${qrUrl}%0d%0aADR%3a%3b%3b${qrAddress}%0d%0aEND%3aVCARD%0A&addtext=&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=300`;
        const composeURL = 'https://qrickit.com/api/qr.php?d=BEGIN%3aVCARD%0d%0aVERSION%3a3.0%0d%0aN%3a'
         + qrLastName
         +'%3b'
         + qrFirstName
         + '%0d%0aORG%3a'
         + qrCompanyOrg
         + '%0d%0aTITLE%3a'
         + qrJobTitle
         + '%0d%0aEMAIL%3a'
         + qrEmail
         + '%0d%0aTEL%3bTYPE%3dCELL%3a'
         + qrtelTypeCell
         + '%0d%0aTEL%3bTYPE%3dWORK%2c%0d%0aVOICE%3a'
         + qrtelTypeWork
         + '%0d%0aNOTE%3a'
         + qrNote
         + '%0d%0aURL%3a'
         + qrUrl
         + '%0d%0aADR%3a%3b%3b'
         + qrAddress
         + '%0d%0aEND%3aVCARD%0A&addtext=&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=300';
        return composeURL
    }
    return (
        <>
        <div className='QRCodeFormContainer'>
            <h2>TAP QR Code Form</h2>
            <p>Tick checkbox to include field in QR Code</p>
            <form onSubmit={handleSubmit}>
                <div className='tapInputRow'>
                    <label htmlFor='firstName'>First name</label>
                    <input 
                        className='tapInput'
                        id='firstName'
                        type='text'
                        placeholder='Enter first name'
                        name='firstName'
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                    />
                    <input 
                        type="checkbox" 
                        name="firstNameSelected" 
                        checked={firstNameSelected} 
                        onChange={(e)=> setFirstNameSelected(!firstNameSelected)}/>
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='lastName'>Last name</label>
                    <input 
                        className='tapInput'
                        id='lastName'
                        type='text'
                        placeholder='Last name'
                        name='lastName'
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                    />
                    <input 
                        type="checkbox" 
                        name="lastNameSelected"
                        checked={lastNameSelected} 
                        onChange={(e)=> setLastNameSelected(!lastNameSelected)}
                    />
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        className='tapInput'                    
                        id='email'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input 
                        type="checkbox" 
                        name="emailSelected"
                        checked={emailSelected} 
                        onChange={(e)=> setEmailSelected(!emailSelected)}
                    />                    
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='companyOrg'>Company</label>
                    <input 
                        className='tapInput'                    
                        id='companyOrg'
                        type='text'
                        placeholder='Company name'
                        name='companyOrg'
                        value={companyOrg}
                        onChange={(e)=> setCompanyOrg(e.target.value)}  
                    />
                    <input 
                        type="checkbox" 
                        name="companyOrgSelected"
                        checked={companyOrgSelected} 
                        onChange={(e)=> setCompanyOrgSelected(!companyOrgSelected)}
                    />                     
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='jobTitle'>Job Title</label>
                    <input 
                        className='tapInput'                    
                        id='jobTitle'
                        type='text'
                        placeholder='Job title'
                        name='jobTitle'
                        value={jobTitle}
                        onChange={(e)=> setJobTitle(e.target.value)}  
                    />
                    <input 
                        type="checkbox" 
                        name="jobTitleSelected"
                        checked={jobTitleSelected} 
                        onChange={(e)=> setJobTitleSelected(!jobTitleSelected)}
                    />                     
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='address'>Address</label>
                    <input
                        className='tapInput'                    
                        id='address'
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}  
                    />
                    <input 
                        type="checkbox" 
                        name="addressSelected"
                        checked={addressSelected} 
                        onChange={(e)=> setAddressSelected(!addressSelected)}
                    />                     
                </div>                
                <div className='tapInputRow'>
                    <label htmlFor='mobile'>Mobile</label>
                    <input 
                        className='tapInput'                    
                        id='telTypeCell'
                        type='number'
                        placeholder='Mobile number'
                        name='telTypeCell'
                        value={telTypeCell}
                        onChange={(e)=> setTelTypeCell(e.target.value)}                        
                    />
                    <input 
                        type="checkbox" 
                        name="telTypeCellSelected"
                        checked={telTypeCellSelected} 
                        onChange={(e)=> setTelTypeCellSelected(!telTypeCellSelected)}
                    />                     
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='telTypeWork'>Work</label>
                        <input 
                        className='tapInput'                        
                            id='telTypeWork'
                            type='number'
                            placeholder='Work number'
                            name='telTypeWork'
                            value={telTypeWork}
                            onChange={(e)=> setTelTypeWork(e.target.value)}
                    />
                    <input 
                        type="checkbox" 
                        name="telTypeWork"
                        checked={telTypeWorkSelected} 
                        onChange={(e)=> setTelTypeWorkSelected(!telTypeWorkSelected)}
                    />                     
                </div>    
                <div className='tapInputRow'>
                    <label htmlFor='socialMediaUrl1'>S. Media URL #1</label>
                    <input 
                        className='tapInput'                    
                        id='url'
                        type='text'
                        placeholder='Social Media URL'
                        name='url'
                        value={url}
                        onChange={(e)=> setUrl(e.target.value)}
                    />
                    <input 
                        type="checkbox" 
                        name="urlSelected"
                        checked={urlSelected} 
                        onChange={(e)=> setUrlSelected(!urlSelected)}
                    />                     
                </div>
                <div className='tapInputRow'>
                    <label htmlFor='socialMediaUrl2'>S. Media URL #2</label>
                    <input 
                        className='tapInput'                    
                        id='note'
                        type='text'
                        placeholder='Social Media URL'
                        name='note'
                        value={note}
                        onChange={(e)=> setNote(e.target.value)}
                    />
                    <input 
                        type="checkbox" 
                        name="noteSelected"
                        checked={noteSelected} 
                        onChange={(e)=> setNoteSelected(!noteSelected)}
                    />                 
                </div>                                
                <input
                    type='submit' 
                    name='submit' 
                    value='Create QR Code'
                />                
            </form>
        </div>
        <div id='displayQRCode'>
            {
                qrButtonPressed ? <img alt='qrcode' src={qrUrl}></img> : <h2>No QR Code yet!</h2>
            }
        </div>
    </>
    )
}
