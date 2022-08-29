import React, {forwardRef} from 'react';
import './post.css';
import {Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const  Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
  return (
    <div className='post' ref={ref}>
       <div className='post__avatar'>
          <Avatar src={avatar}/>
       </div>
       <div className='post__body'>
          <div className='post__header'>
             <div className='post__headerText'>
                <h4>
                    {displayName} {" "}
                    <span className='post__handle'>
                        {verified && <VerifiedUserIcon className='post__badge' sx={{ fontSize: 15 }}/>} {' '}
                        {username}
                    </span>
                </h4>
             </div>
             <div className='post__headerDescription'>
                <p>{text}</p>
             </div>
          </div>
          <img src={image} alt='tweet'/>
          <div className='post__footer'>
            <ChatBubbleOutlineIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
          </div>
       </div>
    </div>
  )
});

export default Post;