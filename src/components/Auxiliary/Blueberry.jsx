import React from 'react'
import './Blueberry.css'
import {ReactComponent as Bobica} from '../../assets/bobica.svg'

const Blueberry = (props) => {

  const style={
   
    translate: `${props.position_left}vw ${props.position_top}vh` ,
    transform: `rotate(${props.rotate}deg)`,
    opacity:props.opacity,
    width:'auto',
    height:props.size+"px"
  }

  return (
    <div className='window'>
        <div style={style}>
        <Bobica width={props.size} height={props.size}/>
       
        </div>
    </div>
  )
}

export default Blueberry
