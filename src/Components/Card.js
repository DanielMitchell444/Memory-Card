import React from 'react';
import styles from '../App.module.css';
import { useState } from 'react';

const Card = ({name, keys, image, onClick}) => {


 return(

<div 
className = {styles.content}
>
 <div className= {styles.card}
 onClick = {onClick}
 name = {name}
 >

  <img src = {image}
  

  /> 
  <h1>{name}</h1>
  <h2>{keys}</h2>
 </div>
 </div>

 )
}

export default Card;