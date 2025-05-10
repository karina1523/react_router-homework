import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ hideNavbar }) => {
    useEffect(() => {
        if (hideNavbar) {

            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.style.display = 'none';
            }
        }
    }, [hideNavbar]);

    return (
        <div>
            <h1>Error 404</h1>

        </div>
    );
};

export default NotFound;
