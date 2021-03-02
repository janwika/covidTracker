import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render(){
        return(
          <div className="Container">
            <footer className="App-footer">
              <div className="container">
                <span>&copy; Jan Widerhofer-Kaukal <a className="footerLink" href="github" >Open Source</a> Data from <a className="footerLink" href="https://about-corona.net/">About Corona</a></span>
              </div>
            </footer>
          </div>
        )
    }
}
export default Footer;