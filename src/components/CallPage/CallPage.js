import {useParams} from "react-router-dom";
import {React,useState,useEffect} from 'react';
import CallPageFooter from '../Ui/CallPageFooter/CallPageFooter';
import CallPageHeader from '../Ui/CallPageHeader/CallPageHeader';
import MeetingInfo from '../Ui/MeetingInfo/MeetingInfo';
import Messenger from '../Ui/Messenger/Messenger';
import  './CallPage.scss';

const CallPage = () => {
    let {id} = useParams();
    // console.log(id);
    const isAdmin = window.location.hash == "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    // console.log(isAdmin,url);
    const [meetInfoPopup,setMeetInfoPopup] = useState(false);


    useEffect(()=>{
     if(isAdmin){
         setMeetInfoPopup(true);
     }
    },[])

    return (
        <div className="callpage-container">
            <video className="video-container" src="" controls></video>

            <CallPageHeader/>
             <CallPageFooter/>
             {(isAdmin && meetInfoPopup)&&(
               <MeetingInfo/>
             )}
            
            <Messenger/> 
        </div>
    )
}

export default CallPage;
