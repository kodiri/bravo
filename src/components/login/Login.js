import React, { useState } from 'react';
// import React, { useState } from './node_modules/react';
import './login.css';
//import Logo from './img/TAP.png';

export default function Login() {
    // eslint-disable-next-line 
    const [user, setUser] = useState([
        { email: 'szym0nd4widowicz@gmail.com', password: 'test' },
        { email: 'cyckyaczk@gmail.com', password: 'test2' }
    ]);
// eslint-disable-next-line 
    const [toggle, setToggle] = useState(true);

    const [login, setLogin] = useState({
        username: '', password: ''
    });

    const [error, setError] = useState(
        {error: true, errorUser: 'invalid user name', errorPassword: 'invalid password', errorColor: 'pink'}
    );

    function loginCheck(event) {
        console.log(event.target.value);
        setLogin({ username: event.target.value })
    }

    function passwordCheck(event) {
        console.log(event.target.value);
        setLogin({ password: event.target.value })
    }

    function loginClick() {
        let valid = user.find(user => user.email === login.username);
        valid ?
            console.log('find it') :
            setError({error: !error, errorColor: 'pink'});
        //setToggle(!toggle);
    }

    return (
        <>
            {
            toggle
                ?
                <div className="login">
                    <div className="item">
                        <input 
                        name="email"
                        onChange={loginCheck}placeholder="email or phone" style={{ backgroundColor: 'white'}} />
                        {!error.error ? <p className="error">Invalid email or phone number</p> : ''}
                    </div>
                    <div className="item">
                        <input name="password" onChange={passwordCheck} placeholder="password" />
                        {!error.error ? <p className="error">Invalid password</p> : ''}
                    </div>
                    <div className="item">
                        <button onClick={() => loginClick()}>Login</button>
                    </div>
                </div>
                : <div>
                    <button onClick={() => loginClick()}>Logout</button>
                    <h1>User Profile</h1>
                </div>
            }
        </>
    );
}