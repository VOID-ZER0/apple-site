import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer';
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import Showcase from './components/Showcase';
import Performance from './components/Performance';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import AppleIntelligence from './components/AppleIntelligence';
import Connectivity from './components/Connectivity';

gsap.registerPlugin(ScrollTrigger);




const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer></ProductViewer>
      <Showcase></Showcase>
      <Performance></Performance>
      <Features></Features>
      <AppleIntelligence></AppleIntelligence>
      <Connectivity></Connectivity>
      <Highlights></Highlights>
      <Footer></Footer>
  
    </main>
  )
}


export default App;
