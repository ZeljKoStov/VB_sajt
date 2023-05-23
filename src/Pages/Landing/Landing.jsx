import React,{useState} from 'react'
import {easeInOut, motion} from 'framer-motion'
import {ReactComponent as Logotext} from '../../assets/Text.svg'
import {ReactComponent as Logocircle} from '../../assets/Borovnica.svg'
import {ReactComponent as Logoleaf} from '../../assets/Lisce.svg'
import family from '../../assets/family.jpg'
import grancica from '../../assets/Tree2.png'
import blueberry from '../../assets/blueberriesedit5.webp'
import healthy from '../../assets/healt7.png'
import nature from '../../assets/nature26.png'
import fresh from '../../assets/fresh3.png'
import jar from '../../assets/jam4.jpg'
import frozen from '../../assets/frozen1.jpg'
import BWB from '../../assets/BWB2-cutout.png'
import { Blueberry } from '../../components'
import slika from '../../assets/slikakompot.png'
import './Landing.css'

const Landing = ({prop}) => {

  const pro=prop;

  const containerVariants= {
    offscreen: {
      opacity:0,
      scale:0
    },
    offscreensecond:{
        opacity:1,
        scale:0.9
    },
    onscreen1: {
      opacity:1,
      scale:1,
      transition: {
        
        duration: 0.3,
        delay:0.5
      }
    },
    onscreen1_1: {
        opacity:1,
        scale:1,
        transition: {
          
          duration: 0.3,
          delay:0.1
        }
      },
    onscreen2: {
        opacity:1,
        scale:1,
        transition: {
          
          duration: 0.5,
          delay:0.55
        }
      },
    onscreen2_1: {
        opacity:1,
        scale:1,
        transition: {
          
          duration: 0.3,
          delay:0.1
        }
      },
    onscreen3: {
    opacity:1,
    scale:1,
    transition: {
       
        duration: 0.3,
        delay:1.3
    }
    },
    onscreen3_1: {
        opacity:1,
        scale:1,
        transition: {
          
          duration: 0.3,
          delay:0.1
        }
      }
  };

  const[num11,setNum11]=useState('-64.285rem');
  const[num12,setNum12]=useState('0rem');
  const[num21,setNum21]=useState('-64.285rem');
  const[num22,setNum22]=useState('0rem');
  const[num31,setNum31]=useState('-64.285rem');
  const[num32,setNum32]=useState('0rem');
  const[zind1,setZind1]=useState(0);
  const[zind2,setZind2]=useState(0);
  const[zind3,setZind3]=useState(0);
  const[opa1,setOpa1]=useState(0);
  const[opa2,setOpa2]=useState(0);
  const[opa3,setOpa3]=useState(0);

  return (
    <div className='landing'>
      <div className='landin-background'>
        <div className='Landing-background-image'>
            <img src={grancica} alt=''></img>
        </div>
        <Blueberry position_top={90} position_left={10} opacity={0.5} rotate={20} size={100}/>
        <Blueberry position_top={65} position_left={3} opacity={0.5} rotate={270} size={170}/>
        <Blueberry position_top={87} position_left={35} opacity={0.4} rotate={0} size={200}/>
        <Blueberry position_top={60} position_left={30} opacity={0.2} rotate={350} size={230}/>
        <Blueberry position_top={60} position_left={45} opacity={0.3} rotate={20} size={100}/>
        <Blueberry position_top={50} position_left={30} opacity={0.5} rotate={0} size={50}/>
        <Blueberry position_top={70} position_left={20} opacity={0.4} rotate={320} size={40}/>
        <Blueberry position_top={40} position_left={10} opacity={0.2} rotate={320} size={240}/>
        <Blueberry position_top={22} position_left={5} opacity={0.6} rotate={0} size={60}/>
        <Blueberry position_top={10} position_left={20} opacity={0.5} rotate={20} size={150}/>
        <Blueberry position_top={17} position_left={40} opacity={0.2} rotate={350} size={230}/>
      </div>
      <div className='landing-first'>

        {pro && <motion.div className='landing-first-logo'
            animate={{
                y:'4.3rem'
            }}
            transition={{
                delay:3.5,
                duration:1,
                easings:easeInOut
            }}
            >
            <motion.div  alt='' className='logo-leaf'
                initial={{
                    x:'150px',
                    y:'-60px',
                    height: '120px',
                    width: 'auto',
                    scale:0
                }}
                animate={{
                    scale:1
                }}
                transition={{
                    delay:2,
                    duration:1,
                    type: "spring",
                    damping:12,
                    stiffness:100
                }}
            >
                <Logoleaf/>
            </motion.div>
            <div className='logo-circle'>    
                <motion.div className='logo-circle-under'
                    initial={{
                        x:'-50vw'
                    }}
                    animate={{
                        x:'0',
                        rotate: 720
                    }}
                    transition={{
                        duration:2,
                        easings:easeInOut
                    }}
                >
                     <Logocircle/>
                </motion.div>
                
            </div>
           
            <motion.div alt='logo' className='logo-text'
                initial={{
                    opacity:0
                }}
                whileInView={{
                    opacity:1
                }}
                transition={{
                    duration:1,
                    easings:easeInOut
                }}
            >
                <Logotext/>
            </motion.div>
            
        </motion.div>
        }
    
        {!pro && <motion.div className='landing-first-logo'
            animate={{
                y:'4.3rem'
            }}
            transition={{
                delay:0,
                duration:0,
                easings:easeInOut
            }}
        >
            <motion.div alt='' className='logo-leaf'
                initial={{
                    x:'150px',
                    y:'-60px',
                    height: '120px',
                    width: 'auto',
                    scale:0
                }}
                animate={{
                    scale:1
                }}
                transition={{
                    delay:2,
                    duration:1,
                    type: "spring",
                    damping:12,
                    stiffness:100
                }}
            >
                <Logoleaf/>
            </motion.div>
            
            <div  className='logo-circle'> 
            <motion.div className='logo-circle-under'
                initial={{
                    x:'-50vw'
                }}
                animate={{
                    x:'0',
                    rotate: 720
                }}
                transition={{
                    duration:2,
                    easings:easeInOut
                }}
            >
                <Logocircle/>
            </motion.div>
       
            </div>    
            
            <motion.div alt='logo' className='logo-text'
                initial={{
                    opacity:0
                }}
                whileInView={{
                    opacity:1
                }}
                transition={{
                    duration:1,
                    easings:easeInOut
                }}
            >
                <Logotext/>
            </motion.div>
           
        </motion.div>
        }
      </div>
      <div className='landing-second'>
            <div className='landing-second-card_one'> 
                <div className='landing-second-card-container'>
                    <motion.div
                        className="landing-second-card"
                        variants={containerVariants}
                        initial={pro?"offscreen":"offscreensecond"}
                        whileInView={pro?"onscreen1":"onscreen1_1"}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <div className="landing-second-card-1">
                            <div className='landing-second-card-1-h1'> 
                                <p>Ko smo mi</p>
                            </div>
                            <div className='landing-second-card-1-text'>
                                <p>Porodično poljoprivredno gazdinstvo osnovano 2012 godine. Poljoprivredom se bavimo na najsavremenijem načinu uz poštovanje svih agrotehničkih mera ...</p>
                            </div>
                            <div className='landing-second-card-1-more'>
                                <p>...detaljnije</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className='Landing-Second-card-1-img'>
                            <img src={family} alt=''></img>
                    </div>
                </div>
            </div>
            <div className='landing-second-card_two'>
                <div className='landing-second-card-container'>
                    <div className='Landing-Second-card-1-img'>
                            <img src={family} alt=''></img>
                    </div>
                    <motion.div
                        className="landing-second-card"
                        variants={containerVariants}
                        initial={pro?"offscreen":"offscreensecond"}
                        whileInView={pro?"onscreen1":"onscreen2_1"}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <div className="landing-second-card-1">
                            <div className='landing-second-card-1-h1'> 
                                <p>Gde se nalazimo</p>
                            </div>
                            <div className='landing-second-card-1-text'>
                                <p>Porodično poljoprivredno gazdinstvo osnovano 2012 godine. Poljoprivredom se bavimo na najsavremenijem načinu uz poštovanje svih agrotehničkih mera ...</p>
                            </div>
                            <div className='landing-second-card-1-more'>
                                <p>...detaljnije</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='landing-second-card_three'>
                <div className='landing-second-card-container'>
                    <motion.div
                        className="landing-second-card"
                        variants={containerVariants}
                        initial={pro?"offscreen":"offscreensecond"}
                        whileInView={pro?"onscreen1":"onscreen3_1"}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <div className="landing-second-card-1">
                            <div className='landing-second-card-1-h1'> 
                                <p>Sta radimo</p>
                            </div>
                            <div className='landing-second-card-1-text'>
                                <p>Porodično poljoprivredno gazdinstvo osnovano 2012 godine. Poljoprivredom se bavimo na najsavremenijem načinu uz poštovanje svih agrotehničkih mera ...</p>
                            </div>
                            <div className='landing-second-card-1-more'>
                                <p>...detaljnije</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className='Landing-Second-card-1-img'>
                            <img src={family} alt=''></img>
                    </div>
                </div>
            </div>
      </div>
      <div className='landing-third'>
            <div className='landing-third-img-1'>
                <img src={blueberry} alt=''></img>
            </div>
            <div className='landing-third-img-2'>
                <img src={healthy} alt=''></img>
            </div>
            <div className='landing-third-img-3'>
                <img src={nature} alt=''></img>
            </div>
      </div>
      <div className='landing-fourth'>
            <div className='landing-fourth-boos'>
                <div className='fresh' style={{zIndex:zind1, opacity:opa2+opa3===1?0.3:1}}>
                    <div className='fresh-card'
                        onMouseOver={() =>{ setNum11('0rem'); setNum12('64.285rem'); setZind1(100); setOpa1(1)}}
                        onMouseLeave={() => { setNum11('-64.285rem'); setNum12('0rem'); setZind1(0);setOpa1(0)}}
                    >
                        <img src={fresh} alt=''></img>
                    </div>
                    <div className='fresh-second' >
                        <div className='fresh-items' 
                             onMouseOver={() =>{ setNum11('0rem'); setNum12('64.285rem'); setZind1(100);setOpa1(1)}}
                             onMouseLeave={() => { setNum11('-64.285rem'); setNum12('0rem'); setZind1(0);setOpa1(0)}}
                             style={{left:num11}}
                        >
                            <div className='card'>
                                <img src={BWB} alt=''></img>
                            </div>
                        </div>
                        <div className='fresh-text' style={{left:num12}}>
                            <div className='fresh-text-div'
                                 onMouseOver={() =>{ setNum11('0rem'); setNum12('64.285rem'); setZind1(100);setOpa1(1)}}
                                 onMouseLeave={() => { setNum11('-64.285rem'); setNum12('0rem'); setZind1(0);setOpa1(0)}}
                            >

                            </div>
                        </div>
                    </div>
                </div>
                <div className='jars' style={{zIndex:zind2 ,opacity:opa1+opa3===1?0.3:1}}>
                    <div className='jars-card'
                            onMouseOver={() =>{ setNum21('0rem'); setNum22('64.285rem'); setZind2(100);setOpa2(1)}}
                            onMouseLeave={() => { setNum21('-64.285rem'); setNum22('0rem'); setZind2(0);setOpa2(0)}}
                    >
                        <img src={jar} alt=''></img>
                    </div>
                    <div className='jars-second' >
                        <div className='jars-items' 
                            onMouseOver={() =>{ setNum21('0rem'); setNum22('64.285rem'); setZind2(100);setOpa2(1)}}
                            onMouseLeave={() => { setNum21('-64.285rem'); setNum22('0rem'); setZind2(0);setOpa2(0)}}
                            style={{left:num21}}>

                        </div>
                        <div className='jars-text' style={{left:num22}}>
                            <div className='jars-text-div'
                                 onMouseOver={() =>{ setNum21('0rem'); setNum22('64.285rem'); setZind2(100);setOpa2(1)}}
                                 onMouseLeave={() => { setNum21('-64.285rem'); setNum22('0rem'); setZind2(0);setOpa2(0)}}
                            >

                            </div>
                        </div>
                    </div>        
                </div>
                <div className='frozen' style={{zIndex:zind3, opacity:opa2+opa1===1?0.3:1}} >
                    <div className='frozen-card'
                                onMouseOver={() =>{ setNum31('0rem'); setNum32('64.285rem'); setZind3(100);setOpa3(1)}}
                                onMouseLeave={() => { setNum31('-64.285rem'); setNum32('0rem'); setZind3(0);setOpa3(0)}}
                        >
                            <img src={frozen} alt=''></img>
                    </div>
                    <div className='frozen-second' >
                        <div className='frozen-items' 
                            onMouseOver={() =>{ setNum31('0rem'); setNum32('64.285rem'); setZind3(100);setOpa3(1)}}
                            onMouseLeave={() => { setNum31('-64.285rem'); setNum32('0rem'); setZind3(0);setOpa3(0)}}
                            style={{left:num31}}>

                        </div>
                        <div className='frozen-text' style={{left:num32}}>
                            <div className='frozen-text-div'
                                onMouseOver={() =>{ setNum31('0rem'); setNum32('64.285rem'); setZind3(100);setOpa3(1)}}
                                onMouseLeave={() => { setNum31('-64.285rem'); setNum32('0rem'); setZind3(0);setOpa3(0)}}
                            >

                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            <div className='landing-fourth-stretch'>

            </div>
      </div>
      <div className='veka'>
        <div className='zeljko'>
            <p> ZEljko i Veka su Momak i devojka</p>
        </div>
        <div className='slika'>
            <img src={slika} alt='img'></img>
        </div>
      </div>
    </div>
  )
}

export default Landing
