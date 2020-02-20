import React from 'react';
//components
import User from '../../components/User';

const AuthIndex = () => {
    return (
        <div>
            <p>The auth page</p>
            <User name="Adam" age="29" />
        </div>
    );
};

export default AuthIndex;