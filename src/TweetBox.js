import React, {useState} from 'react';
import './tweetBox.css';
import {Avatar, Button } from '@mui/material';
import {db} from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const handleTweetMessage = event => {
    setTweetMessage(event.target.value);
  }

  const handleTweetImage = event => {
    setTweetImage(event.target.value);
  }

  const sendTweet = (event) => {
     event.preventDefault();
     db.collection('post').add({
         displayName: "Olatunji",
         username: "bentike",
         verified: true,
         text: tweetMessage,
         avatar: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
         image: tweetImage
     });
     
     setTweetMessage('');
     setTweetImage('');
  }

  return (
    <div className='tweetBox'>
         <form>
            <div className='tweetBox--input'>
              <Avatar src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"/>
              <input
               placeholder="What's happening"
               value={tweetMessage} 
               onChange={handleTweetMessage}
               />
            </div>
            <input 
               placeholder='Enter image URL' 
               className='tweetBox--imageInput'
               value={tweetImage}
               onChange={handleTweetImage}    
              />
            <Button type='submit' onClick={sendTweet} className='tweetBox-btn'>Tweet</Button>
         </form>
    </div>
  )
}

export default TweetBox;