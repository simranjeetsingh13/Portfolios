import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="http://www.instagram.com/simranjeetsingh_96" target="_blank">
        <InstagramIcon />
        </Link>
        <Link href="http://www.facebook.com/simransinghalag" target="_blank">
        <FacebookIcon />
        </Link>
        <Link href="http://www.linkedin.com/in/simranjeet-singh-98678a53" target="_blank" >
        <LinkedInIcon /> 
        </Link>
      
      </div>
      <p> &copy; Simranjeet Singh</p>
    </div>
  );
}

export default Footer;