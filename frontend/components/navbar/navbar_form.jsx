import React from 'react';
import { Link } from 'react-router-dom';

//! function component will do the work, no need for class

const NavBar = ({currentUser, logout}) => {
    
    const loggedout = () => {
        return (
            <>
                <Link to="/login" id="login-btn">Log in</Link>
                <Link to="/signup" id="signup-btn">Sign up</Link>
            </>
        )
    };

    const loggedin = (currentUser) => {
        return (
            <>
                <button id='logout-btn' onClick={() => logout()}></button>
                <div>{currentUser.username}</div>
            </>
        )
    };

    return currentUser ? loggedin() : loggedout();

}


// class NavBarForm extends React.Component {

     
    
    

//     render(){  
//         const { currentUser } = this.props;
        
//     }

// }

export default NavBar;