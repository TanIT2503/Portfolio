import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import './About.scss'

const abouts = [
  {
    title: 'Full-Stack Developer', decscription: 'I am a full-stack developer', imgUrl: images.about01
  },
  {
    title: 'UX/UI', decscription: 'I am a full-stack developer', imgUrl: images.about02
  },
  {
    title: 'Data Analyst', decscription: 'I am a full-stack developer', imgUrl: images.about03
  },
  {
    title: 'Web Developer', decscription: 'I am a full-stack developer', imgUrl: images.about04
  }
]

const About = () => {
  return (
    <>
      <h2 className="head-text"> I Know That <span>Good Devs</span> <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.decscription}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About