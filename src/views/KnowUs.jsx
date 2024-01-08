import React from 'react'
import HeaderOthers from '../components/HeaderOthers'

import img1 from '../assets/images/image (21).png'
import img2 from '../assets/images/image (22).png'
import img3 from '../assets/images/image (23).png'
import img4 from '../assets/images/image (24).png'
import KnowConnect from '../components/KnowConnect'

function KnowUs() {

  window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

  return (
    <div id='knowus' className=' '>
      <HeaderOthers />
      <h1 className=' font-anton text-[calc(50px+5vw)] px-10 mt-[50vh] mb-20'>About Know. Organization: Architects of Innovation, Catalysts of Progress</h1>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'>At Know. Organization, we're not simply technologists; we're proactive partners in your journey towards transformative achievements. We don't merely build software; we craft bespoke solutions that propel your ambitions into tangible realities. Our story isn't about flamboyant pronouncements; it's about quietly exceeding expectations through dedication, ingenuity, and a shared commitment to excellence.</h2>
      <img src={img1} alt=""  className=' relative h-[50vw] float-end m-10'/>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'>Our genesis lies in a collective yearning for dynamic progress. We sought to transcend the shackles of predictability and mediocrity, forging a path where technology becomes a potent catalyst for audacious aspirations. Where limitations are stepping stones, not impassable barriers, and the boundless potential of human ambition reigns supreme.</h2>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'>Thus, we assembled - a symphony of skilled minds: engineers, designers, strategists, and visionaries. United by a singular, resolute mission: to unlock the inherent power of technology and empower you to realize your most ambitious dreams.</h2>
      <img src={img2} alt=""  className=' relative h-[30vw] float-start m-10'/>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'>This is Know. Organization. We're not your conventional tech company. We're the silent architects of innovation, meticulously transforming daring concepts into cutting-edge solutions that deliver impact. We're the navigators of uncharted territories, venturing into the unknown with meticulous planning and unwavering resolve. We're the unwavering champions of your boundless ambition, guiding your vision with focused expertise and unwavering support.</h2>
      <h1 className=' font-anton text-[calc(50px+5vw)] px-10 mt-[50vh] mb-20'>Our guiding principles are the pillars of our success:</h1>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'><span className='text-[calc(15px+2vw)]'>Audacious Vision, Rigorous Execution:</span> We embrace audacious ambitions, but ground them in pragmatic strategies and meticulous execution.</h2>
      <img src={img3} alt=""  className=' relative h-[50vw] float-end m-10'/>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'><span className='text-[calc(15px+2vw)]'>Collaborative Harmony, Individual Brilliance:</span> We thrive on the synergy of diverse perspectives, fostering an environment where individual brilliance flourishes within a collaborative tapestry.</h2>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'><span className='text-[calc(15px+2vw)]'>Client-Centric Focus, Impeccable Outcomes:</span> Your vision is our compass. We prioritize deep understanding of your needs and deliver exceptional solutions that exceed expectations.</h2>
      <img src={img4} alt=""  className=' relative h-[30vw] float-start m-10'/>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'><span className='text-[calc(15px+2vw)]'>Sustainable Impact, Measurable Progress:</span> We go beyond profits; our pursuit is lasting, positive change. We measure success by the tangible advancements we enable for individuals and communities.</h2>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'><span className='text-[calc(15px+2vw)]'>Continuous Learning, Evolving Expertise:</span> We embrace a relentless pursuit of knowledge, constantly honing our skills and adapting to the dynamic landscape of technology.</h2>
      <h2 className=' font-montserrat text-[calc(15px+1vw)] px-10 my-96'>Our core strength lies not in lines of code, but in the immeasurable value of collaboration. We listen intently, dissect your vision with meticulous care, and champion your success as if it were our own. We are your trusted collaborators, your strategic partners, your unwavering allies on this journey towards realizing the impossible.</h2>
      <KnowConnect />
    </div>
  )
}

export default KnowUs