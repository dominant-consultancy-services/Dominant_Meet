import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faVideo,faKeyboard
} from "@fortawesome/free-solid-svg-icons";
import Header from '../Ui/Header/Header';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header/>
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Premium video meetings. Now free for everyone.</h2>
                        <p>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                        <div className="action-btn">
                            <button className="btn green">
                            <FontAwesomeIcon className="icon-block" icon={faVideo}/>
                            New Meeting
                            </button>
                            <div className="input-block">
                            <div className="input-section">
                                <FontAwesomeIcon className="icon-block" icon={faKeyboard}/>
                                <input placeholder="Enter a code or link"/>
                            </div>
                            <div className="btn no-bg">Join</div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="help-text">
                        <a href="https://dominantcs.com/">Laarn more</a> about Dominant Meet
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://lh3.googleusercontent.com/2Qz2Yac0YpKgrNyj1KAw6yQeNBTvgPRVpubb9qOcOJsJItGOU9Rilf2XXLta_8JeB8fE5U1tLW7hEv11dB9m_jxavr1suydgha3afg=rwu-v1-w1400" alt="dominantcs.com"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
