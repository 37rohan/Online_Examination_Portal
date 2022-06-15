/* import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Signout = () => {
    const { logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
            <h2>Signed Out</h2>
    );
};

export default Signout;
 */