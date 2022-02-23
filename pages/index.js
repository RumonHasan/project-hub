import React,{useEffect, useState} from 'react';
// main layout component
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';

const HomePage = ()=>{
  const [titleIndex, setTitleIndex] = useState(0);
  const titleArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', '', 'H', 'U', 'B'];

  const titleBlock = {
    display: 'flex',
    color: 'white',
  };

  useEffect(()=>{
    const displayTitle = setTimeout(()=>{
      setTitleIndex((currentTitleIndex)=> {
        if(titleArray.length > currentTitleIndex){
          currentTitleIndex += 1
        }
      });
    }, 500);
    return (()=>{
      clearTimeout(displayTitle);
    })
  });

  console.log(titleIndex);

  return (
    <Layout title='Home'>
        <div style={titleBlock}>
        </div>
    </Layout>
  )
};

export default HomePage;