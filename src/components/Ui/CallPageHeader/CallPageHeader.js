import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCommentAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import './CallPageHeader.scss';

import React from 'react';

const CallPageHeader = () => {
    return (
        <div className="frame-header">
                <div className="header-items icon-block">
                    <FontAwesomeIcon icon={faUserFriends}/>
                </div>
                <div className="header-items icon-block">
                    <FontAwesomeIcon icon={faCommentAlt}/>
                    <span className="alert-circle-icon"></span>
                </div>
                <div className="header-items date-block">1:00 PM</div>
                <div className="header-items icon-block">
                    <FontAwesomeIcon className="icon profile" icon={faUserCircle}/>
                </div>
        </div>
    )
}

export default CallPageHeader;
