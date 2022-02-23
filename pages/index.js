import React,{useEffect, useState} from 'react';
// main layout component
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';
import Banner from '../components/Banner';
import ProjectGrid from '../components/ProjectGrid';
import {projectImages} from '../utilities/services';

const HomePage = ()=>{
  const projectGridStyles ={
    width: '80px',
    height: '80vh',
    border: '2px solid yellow',
  }

  return (
    <Layout title='Home'>
        <div style={projectGridStyles}>
          <ProjectGrid/>
        </div>
    </Layout>
  )
};

export default HomePage;