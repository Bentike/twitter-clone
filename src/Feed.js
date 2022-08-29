import React, {useState, useEffect} from 'react';
import './feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import {db} from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('post').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div  className='feed'>
        {/* header */}
        <div className='feed--header'>
          <h2>Home</h2>
        </div>
        <TweetBox/>
        <FlipMove>
            {posts.map(post => {
            return  <Post
                  key={post.text}
                  text={post.text}
                  image={post.image}
                  displayName={post.displayName}
                  username={post.username}
                  verified={post.verified}
                  avatar={post.avatar}
                />
            })}
        </FlipMove>
    </div>
  )
}

export default Feed;