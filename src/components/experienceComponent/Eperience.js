import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work"
import "./index.css"

function Experience() {
  return (
    <div className="experience foo">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sathyabama University Tamilnadu Chennai
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021- 2022"
          iconStyle= {{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Trainee At NxtWave Ccbp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Andhra Pradesh Hyderabad
          </h4>
          <p>
          Enrolled in a comprehensive course covering React, Nodejs ,Expressjs HTML, JavaScript, and Data Structures & Algorithms in Python, focused on building Fullstack applications and strengthening problem-solving skills.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 (Remote-Paid)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Itern In Full Creative
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Tamilnadu Chennai
          </h4>
          <p>
          Completed a comprehensive one-month internship focused on hands-on experience in frontend development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022- present"
          iconStyle= {{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer At Bank Of America
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai Tamilnadu
          </h4>
          <p>
          Proactively troubleshoot and resolve complex technical challenges, and bugs of our bank Financial Center application  by meticulously analyzing logs using Splunk, a leading log analysis and monitoring tool. enhancing overall efficiency.  
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
