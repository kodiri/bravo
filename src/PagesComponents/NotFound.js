import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    let history = useHistory();
    function goBackHandle() {
        history.goBack();
    }
    return (
        <div>
            <h1>Sorry the page you are looking for is not available :(</h1>
            <button onClick={goBackHandle}>Go to the previous page</button>
        </div>
    );
};

export default NotFound;