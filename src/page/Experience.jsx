import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCode, FaHardHat } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    return (
        <VerticalTimeline
            className='vertical-timeline'
            layout={"1-column-left"}
            lineColor={"#535458"}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#488FB1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #488FB1' }}
                date="Aug 2021 - Present"
                iconStyle={{ background: '#488FB1', color: '#fff' }}
                icon={<FaCode />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer (Back-End)</h3>
                <h4 className="vertical-timeline-element-subtitle">SNC Former Public Co., Ltd.</h4>
                <p>
                    I am working in “B12 IIoT” Dashboard development team.
                </p>
                <ul>
                    <li>Develop software for web service.</li>
                    <li>Design RESTful APIs built in Node.js and PHP.</li>
                    <li>Database design and management.</li>
                    <li>Interface between hardware and software.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: '#488FB1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #488FB1' }}
                date="Mar 2021 -  Aug 2021"
                iconStyle={{ background: '#488FB1', color: '#fff' }}
                icon={<FaHardHat />}
            >
                <h3 className="vertical-timeline-element-title">Planning Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">THAI AVIATION INDUSTRIES Co., Ltd.</h4>
                <p>
                    I am working in Planning Engineer C-130 Team.
                </p>
                <ul>
                    <li>Planning for aircraft C-130 maintenance.</li>
                    <li>Finding the cause of various cracks in aircraft.</li>
                    <li>Summary of information to bring the aircraft into.</li>
    
                </ul> 
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Experience;
