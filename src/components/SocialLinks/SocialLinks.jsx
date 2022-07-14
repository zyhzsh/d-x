import { Grid } from '@mui/material'
import React from 'react'
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import './style.css';
const SocialLinks = () => {
  return (
        <Grid className='socialLinks' item container xs={12} >
          <Grid item xs={12} >
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/shenghang-zhu-8a1851187/"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/zyhzsh"><img src={navIcon2} alt="Github" /></a>
            </div>
          </Grid>
        </Grid> 
  )
}

export default SocialLinks