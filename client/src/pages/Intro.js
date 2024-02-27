import React, { useState, useEffect} from 'react';
import Video from "../comps/Video";

export default function Intro() {
// REACT STATES
   // States for window size
   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);

// REACT EFFECT
   // Updating margins whenever screensize changes
   useEffect(() => {
       // Update once when loaded
       updateMargins();
       // ...then everytime the window is resized
       window.addEventListener("resize", updateMargins);
   })


// FUNCTIONS
   // Logic behind the size changes, most are arbitrary values I found through testing
   function updateMargins() {
       var w = window.innerWidth;
       var h = window.innerHeight;
       setWidth(w);
       setHeight(h);
   }


// STYLES
   const div = {
       margin: '0px',
       display: 'flex',
       justifyContent: 'center', /* Horizontal centering */
       alignItems: 'center' /* Vertical centering test */
   }


// RETURN
   return(
      <div
         style={div}>
         <Video height={height} width={width}/>
      </div>
   );
}