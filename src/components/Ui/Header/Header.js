import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
        faQuestionCircle,
        faExclamationCircle,
        faCog
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://dominantcs.com/upload/logo/logo.png" alt="dominantcs.com"/>
                <span className="help-text">
                    Meet
                </span>
            </div>
            <div className="action-btn">
                    <FontAwesomeIcon className="icon-block" icon={faQuestionCircle}/>
                    <FontAwesomeIcon className="icon-block" icon={faExclamationCircle}/>
                    <FontAwesomeIcon className="icon-block" icon={faCog}/>
            </div>
        </div>
    )
}

export default Header;
