import React from 'react';
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{
    render(){
        return(
            <div className="Container">
                <header className="App-header">
                    <h1><a className="headerLink" href="/">covidTracker</a></h1>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/Country">Country</Navbar.Brand>
                        <Navbar.Brand href="/World">World Map</Navbar.Brand>
                    </Navbar>
                </header>
            </div>
        )
    }
}
export default Header;