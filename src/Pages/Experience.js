import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Button, Link } from "@mui/material";
import Simranjeet from "../assets/simranjeet.pdf"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
         Vidyalankar Polytechnic, Wadala, Mumbai
          </h3>
          <p>Diploma in Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Mumbai University,Mumbai, Maharashtra
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           IEC University,Himachal Pradesh
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
           Master's Degree
          </h4>

          <p> Business Administration-(IT)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Technical Consultant (UI) - Zeus Learning
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mumbai, Maharashtra
          </h4>
          <p>Developed the front end templates for 4 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          UI Developer - Adapty Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Mumbai, Maharashtra
          </h4>
          <p>
            Helped the team launch  major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Senior Software Engineer - Linedata Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Mumbai, Maharashtra
          </h4>
          <p>
          Coordinate with stakeholders to understand business 
          requirements, design and develop effective solutions.
          Work in agile settings to plan and break down 
          design/solution into manageable tasks/stories for the
          team.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="donwloadcv">
       <a href={Simranjeet} download="cv">Donwload CV</a>
            
       

      </div>
    </div>
  );
}

export default Experience;