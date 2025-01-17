import React, { useState, useContext } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets"
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extented, setExtented] = useState(false);
    const {Onsent, prevPrompts, setRecentPrompts, newChat} = useContext(Context)

    const loadPrompt = async(prompt) =>{
        setRecentPrompts(prompt) 
        await Onsent(prompt)
    }
    
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=> setExtented(prev => !prev)} className= "menu" src={assets.menu_icon} alt= ""/>
            <div  className="new-chat" onClick={()=>newChat()}>
                <img src={assets.plus_icon} alt= ""/>
                {extented?<p>New Chat</p>:null}
            </div>
            {extented?<div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(<div className='recent-entry' onClick= {()=>{loadPrompt(item)}}>
                        <img src={assets.message_icon} alt=""/>
                        <p>{item} ...</p>
                    </div>)
                })}
                
            </div>:null}
            
        </div>
        <div className="bottom">
            <div className="buttom-item recent-entry" >
                <img src={assets.question_icon} alt=" "/>
                {extented?<p>Help</p>:null}
            </div>

            <div className="buttom-item recent-entry" >
                <img src={assets.history_icon} alt=" "/>
                {extented?<p>Activity</p>:null}
            </div>
            
            <div className="buttom-item recent-entry" >
                <img src={assets.setting_icon} alt=" "/>
                {extented?<p>Setting</p>:null}
            </div>
        </div>

    </div>
  )
}

export default Sidebar