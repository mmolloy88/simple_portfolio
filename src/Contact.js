import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
  faTwitter,
  faGithub,
  faLinkedin
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

          <a
            href="https://www.linkedin.com/in/wearematt88/"
            className="linkedIn socials"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          
          <br/>
          
          </div>
        </div>
    );
  }
}
 
export default Contact;