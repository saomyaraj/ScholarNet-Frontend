/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

function FramerMotion({children}) {
  return (
    <motion.div
        initial={{opacity:0, x:'600px'}}
        whileInView={{opacity:1, x:'0px'}}
        transition={{duration:0.8}}
    >
        {children}
    </motion.div>
  )
}

FramerMotion.propTypes = {
  children: PropTypes.node.isRequired
};

export default FramerMotion