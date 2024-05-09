import './SideBar.css';
import { assets } from "../../assets/assets"
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';


const SideBar = () => {

  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompts, newChat } = useContext(Context)

  const toggleSideBar = function () {
    setExtended((prev) => !prev)
  }

  const loadPrompt = async (p) => {
    setRecentPrompts(p)
    await onSent(p)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="menu" onClick={toggleSideBar} />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="plus" />
          {
            extended
              ?
              <p>New Chat</p>
              :
              null
          }
        </div>
        {
          extended ?
            <div className="recent">
              <p className="recent-title">Recent</p>
              {
                prevPrompt.map((item, index) => {
                  return (
                    <div className="recent-entry" onClick={()=>loadPrompt(item)}>
                      <img src={assets.message_icon} alt="message" />
                      <p>{item.slice(0,18)}...</p>
                    </div>
                  )
                })
              }

            </div>
            :
            null
        }

      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="?" />
          {
            extended ?
              <p>Help</p>
              :
              null
          }
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="?" />
          {
            extended ?
              <p>Activity</p>
              :
              null
          }
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="?" />
          {
            extended ?
              <p>Settings</p>
              :
              null
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar