import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <VerticalTimeline
      className="vertical-timeline"
      layout={"1-column-left"}
      lineColor={"#535458"}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#E5E3C9", color: "#495371" }}
        contentArrowStyle={{ borderRight: "7px solid  #E5E3C9" }}
        date="2021 - Present"
        iconStyle={{ background: "#E5E3C9", color: "#495371" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          Suranaree University of Technology
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Master of Engineering, Mechatronics Engineering
        </h4>
        <p>GPAX: 4.00</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        // contentStyle={{ background: '#E5E3C9', color: '#495371' }}
        contentArrowStyle={{ borderRight: "7px solid  #E5E3C9" }}
        date="2017 - 2020"
        iconStyle={{ background: "#E5E3C9", color: "#495371" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          Suranaree University of Technology
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bachelor of Engineering, Aeronautical Engineering
        </h4>
        <p>GPAX: 3.13</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        // contentStyle={{ background: '#E5E3C9', color: '#495371' }}
        contentArrowStyle={{ borderRight: "7px solid  #E5E3C9" }}
        date="2010 - 2016"
        iconStyle={{ background: "#E5E3C9", color: "#495371" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          Kaennakhon Wittayalai School
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Special Sciences and Mathematics Program (GIFTED)
        </h4>
        <p>GPAX: 3.50</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Education;
