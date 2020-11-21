import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <Link className='navbar-brand' to='/'>
                Video-App
            </Link>

            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>
                            List of videos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/addvideo'>
                            Add new video
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
