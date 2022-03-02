import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSnapchat, faInstagram, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div className="row justify-content-between text-start text-light p-4 bg-dark mt-5">
            <div className="col-3">
                <div>Contact Info</div>
                <div className="small mt-2">
                    <FontAwesomeIcon icon={faPhone} className="mx-2" />
                    0100000000
                </div>
                <div className="small">
                    <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                    abc1234@gmail.com
                </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-light rounded-0 border border-2">Click Me!!</button>
            </div>
            <div className="col-3 d-flex flex-column align-items-center justify-content-end">
                <div className="small">
                    <FontAwesomeIcon icon={faFacebook} className="m-1" />
                    <FontAwesomeIcon icon={faSnapchat} className="m-1" />
                    <FontAwesomeIcon icon={faInstagram} className="m-1" />
                    <FontAwesomeIcon icon={faTwitter} className="m-1" />
                    <FontAwesomeIcon icon={faPinterest} className="m-1" />
                    <FontAwesomeIcon icon={faLinkedin} className="m-1" />
                </div>
                <div className="m-1 py-3">
                    powered by w3school
                </div>

            </div>
        </div>
    )
}

export default Footer;