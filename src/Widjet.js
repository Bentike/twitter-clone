import React from 'react';
 import './widjet.css';
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed, 
  TwitterShareButton, 
  // TwitterTweetEmbed
} from 'react-twitter-embed';
function Widjet() {
  return (
    <div className='widjet'>
       <div className='widjet__input'>
          <SearchIcon className='widjet__searchIcon'/>
          <input placeholder='Search Twitter'/>
       </div>

       <div className='widjet__widjetContainer'>
          <h2>What's happening</h2>
          {/* <TwitterTweetEmbed tweetId={"858551177860055040"}/> */}
          {/* <TwitterTimelineEmbed
            sourceType='profile'
            screenName='Naija_PR'
            options={{height: 100}}
          /> */}
          <TwitterShareButton
            url={"https://twitter.com/bentecology"}
            options={{text: "Happy doing awesome stuffs", via: "Bentike"}}
          />
       </div>
    </div>
  )
}

export default Widjet;