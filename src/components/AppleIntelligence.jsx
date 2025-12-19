
import React from 'react'
import { color } from 'three/tsl';

const AppleIntelligence = () => {

  
  // const styles = {
  //   display: 'inline-block',
  //   background: 'rgb(245, 245, 247)',
  //   backgroundClip: 'text',
  //   fontSize: '50px',
  //   justifyContent: 'center',
  //   marginLeft: '550px',
  //   WebkitBackgroundClip: 'text', // Necessary for cross-browser support
  //   WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
  //   WebkitBoxDecorationBreak: 'clone',
  //   boxDecorationBreak: 'clone',
  //   backgroundImage: 'linear-gradient(108deg, #0090f7, #ba62fc 33%, #f2416b 66%, #f55600)',
  //   fontSize: 'clamp(24px, 5vw, 50px)', // Fluid typography: stays between 24px and 50px
  //   marginLeft: 'auto', 
  //   marginRight: 'auto',
    
  // };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontal centering
    alignItems: 'center',     // Vertical centering (if needed)
    width: '100%',
    padding: '20px',         // Prevents text from hitting edges on mobile
    flexDirection: 'column',
  };
  
  const Styles = {
    display: 'inline-block',
    backgroundImage: 'linear-gradient(108deg, #0090f7, #ba62fc 33%, #f2416b 66%, #f55600)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    WebkitBoxDecorationBreak: 'clone',
    boxDecorationBreak: 'clone',
    display: 'inline-block',
    lineHeight: '1.1',
    
    // Responsive font size using 'clamp'
    fontSize: 'clamp(28px, 8vw, 60px)', 
    textAlign: 'center'
  };
  

  
  
    const subTitle = {
      fontSize: 'clamp(28px, 8vw, 60px)', 
      textAlign: 'center',
      color:'white',
      lineHeight: '1.2',

  }


  const para = {
    fontSize: '20px',
    maxWidth: '800px',
    paddingTop: '20px',

  }

  const ai = {
    marginTop: '20px',
    maxWidth: '75%',
    // position: 'absolute',
    overflowClipMargin: 'content-box',
    overflow: 'clip',
  } 
 

  return (
    <section>
      <div style={containerStyle}>
        <h1 style={Styles}>Apple Intelligence.</h1>
        <h1 style={subTitle}>Task and you shall receive.</h1>
        <p style={para}>Apple Intelligence{" "}
           <span className='text-white'>helps you write, express yourself and get things done effortlessly.</span>
           {" "} Turn a quick note into a polished announcement. Remove distractions from photos with Clean Up. Create unique images with new ChatGPT styles in Image Playground. And use intelligent actions in the Shortcuts app to create automations — like comparing an audio transcription to typed notes and extracting information from a PDF. Apple Intelligence is AI — for you and I.47
           </p>
           <p className="text-primary">Learn more about apple intelligence</p>

           <img src='/ai.jpg' style={ai}></img>
      </div>
    </section>
  )
}

export default AppleIntelligence