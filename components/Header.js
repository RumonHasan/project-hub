import React,{useEffect, useState} from 'react';
import { Typography } from '@material-ui/core';

 const Header = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleText, setTitleText] = useState('');

  const titleBlock = {
    display: 'flex',
  };

  useEffect(()=>{
    const titleArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', ' ', 'H', 'U', 'B'];
    if(titleIndex >= titleArray.length){
      return;
    }
    if(titleArray.length > titleIndex){
      const displayTitle = setTimeout(()=>{
        setTitleText((prevText)=> prevText + titleArray[titleIndex]);
        setTitleIndex((currentIndex)=> currentIndex += 1);
      },  300);
      return (()=>{
        clearTimeout(displayTitle);
      })
    }
  },[titleIndex]);


  const titleTextStyles = {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: '"Lucida Console", "Courier New", monospace',
    fontSize: 'clamp(1.5rem, 7.5vw, 7rem)',
  }
  return (
    <div style={titleBlock}>
      <Typography variant='h1' style={titleTextStyles}>{titleText}</Typography>
    </div>
  )
};

export default Header;
