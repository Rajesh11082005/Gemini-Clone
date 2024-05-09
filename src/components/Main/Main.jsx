import { useContext, useRef } from "react"
import { assets } from "../../assets/assets"
import "./Main.css"
import { Context } from "../../context/Context"

const Main = () => {

  const { onSent, recentPrompts, showResult, loading, resultData, setInput, input } = useContext(Context);

  const inputBox = useRef()

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onSent();
      e.target.value = ""
    }
  }

  const handleClick= (e) => {
    onSent();
    console.log(inputBox);
    inputBox.current.value = ""
  }


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">

        {!showResult
          ?
          <>
            <div className="greet">
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="coompass" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning.</p>
                <img src={assets.bulb_icon} alt="bulb" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat.</p>
                <img src={assets.message_icon} alt="message" />
              </div>
              <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="code" />
              </div>
            </div>
          </>
          :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {
                loading
                ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }


        <div className="main-bottom">
          <div className="search-box">
            <input type="text" ref={inputBox} onChange={(e) => {setInput(e.target.value);}} onKeyDown={handleEnter} placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? <img onClick={handleClick} src={assets.send_icon} alt="send" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main