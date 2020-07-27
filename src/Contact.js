import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
 
class Contact extends Component {
  render() {
    return (
      
        <div className="socials">
          <h3>Check out my Github and twitter account: </h3>
          <br/>
        <div className="bucket">
          <a
              href="https://twitter.com/wearematt88"
              className="twitter socials"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
          </a>
          <a
            href="https://github.com/mmolloy88"
            className="github socials"
          >
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
          <br/>
          
          </div>
        </div>
    );
  }
}
 
export default Contact;