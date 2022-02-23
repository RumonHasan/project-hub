import * as React from "react";
import { motion } from "framer-motion";
import { Menu, Close } from "@material-ui/icons";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const menuIconStyles = {
  color: 'white',
  fontSize: '32px',
  marginBottom: 5,
}

export const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className='menu-button'>
    {isOpen ? <Close style={menuIconStyles}/> : <Menu style={menuIconStyles}/>}
  </button>
);
