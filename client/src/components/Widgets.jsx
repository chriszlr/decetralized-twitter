import React from 'react'
import "../Widgets.css"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <div className='widgets__searchIcon'>Icon</div>
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className='widgets__widgetContainer'>
          <h2>What's happening</h2>

          <TwitterTimelineEmbed  
            sourceType='profile'
            screenName='johncena'
            options={{height: 800}}
          />

      </div>
    </div>
  )
}

export default Widgets