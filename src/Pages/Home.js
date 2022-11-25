import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css"
import { Link } from "@mui/material";




const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is Simranjeet </h2>
                <div className='prompt'><p>A software developer with a passion for learning and creating.</p>
                <Link href="http://www.linkedin.com/in/simranjeet-singh-98678a53" target="_blank" >
        <LinkedInIcon /> 
        </Link>
        <Link href="mailto: singhsimran156@gmail.com" target="_blank" >
                <EmailIcon />
                </Link>
                <Link href="https://github.com/simranjeetsingh13"  target="_blank" >
          <GithubIcon />
          </Link>
                </div>
            </div>
            <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,TypeScript</span>
          </li>
        </ol>
      </div>
          
            
        </div>
    );
};

export default Home;