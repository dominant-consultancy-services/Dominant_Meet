import React from 'react';
import CallPageFooter from '../Ui/CallPageFooter/CallPageFooter';
import CallPageHeader from '../Ui/CallPageHeader/CallPageHeader';
import MeetingInfo from '../Ui/MeetingInfo/MeetingInfo';
import Messenger from '../Ui/Messenger/Messenger';
import  './CallPage.scss';

const CallPage = () => {
    return (
        <div className="callpage-container">
            <video className="video-container" src="" controls></video>

            <CallPageHeader/>
             <CallPageFooter/>
            <MeetingInfo/>
            <Messenger/> 
        </div>
    )
}

export default CallPage;
