import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.photoURL && <small style={{ color: "white" }}>{user.displayName} </small>
                }
                {
                    user.photoURL ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Log In</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;