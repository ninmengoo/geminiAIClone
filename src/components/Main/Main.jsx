import React, { useContext, useState } from 'react'
import "./Main.css"
import { assets } from "../../assets/assets"
import { Context } from '../../context/Context'



const Main = () => {

    const cardsData = [{ text: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon },
    { text: "Briefly summarize this concept: urban planning", icon: assets.bulb_icon },
    { text: "Brainstorm team bonding activities for our work retreat", icon: assets.message_icon },
    { text: "Improve the readability of the following code", icon: assets.code_icon }]


    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=" " />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => setInput(cardsData[0].text)}>
                                <p>{cardsData[0].text}</p>
                                <img src={cardsData[0].icon} alt=" " />
                            </div>
                            <div className="card" onClick={() => setInput(cardsData[1].text)}>
                                <p>{cardsData[1].text}</p>
                                <img src={cardsData[1].icon} alt=" " />
                            </div>
                            <div className="card" onClick={() => setInput(cardsData[2].text)}>
                                <p>{cardsData[2].text}</p>
                                <img src={cardsData[2].icon} alt=" " />
                            </div>
                            <div className="card" onClick={() => setInput(cardsData[3].text)}>
                                <p>{cardsData[3].text}</p>
                                <img src={cardsData[3].icon} alt=" " />
                            </div>
                        </div>
                    </> : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />

                            {loading ? <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }} />
                            }

                        </div>
                    </div>}




                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here..." />
                        <div>
                            <img src={assets.gallery_icon} alt=" " />
                            <img src={assets.mic_icon} alt=" " />
                            <img onClick={() => onSent(input)} src={assets.send_icon} alt=" " />
                        </div>

                    </div>

                    <p className="bottom-info">
                        Gemini may display inaccurate info, make sure to double check the result
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main