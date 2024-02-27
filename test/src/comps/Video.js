import React from 'react';
import animation from '../other/Untitled_Artwork.mp4'

export default function VideoPlayer(props) {
// STYLES
   const video= {
    // Video will always be 2/3 the screen size, centered in the middle
    // Video changes are determined by:
    // Whether the window is changing vertically (make the video smaller in height) or horizontally (make the video smaller in width)
    height: (props.height*.90),
    };

  return (
    <>
      <video
        autoPlay
        muted
        style={video}>
        <source src={animation} type="video/mp4"/>
      </video>
        
    </>
  );
}