import '../styles/globals.css';
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import useReducer from '../utilities/useReducer';
import useThemeReducer from '../utilities/useThemeReducer';

// redux based reducers for project and theme states
const primaryStore = configureStore({
  reducer:{
    projectReducer: useReducer,
    themeReducer: useThemeReducer,
  }
});

function MyApp({ Component, pageProps }) {
  React.useEffect(()=>{ // rmeoving server side rendering of material ui elements
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[])
  return (
      <Provider store={primaryStore}>
        <Component {...pageProps} />
      </Provider> 
  );
}

export default MyApp