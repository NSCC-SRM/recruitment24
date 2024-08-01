import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">TimeLine</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-event">
          <div className="timeline-circle"></div>
          <div className="timeline-content left">
            <div className="timeline-date">Date XX/XX/2024</div>
            <div className="timeline-text">Application Submission</div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="timeline-circle"></div>
          <div className="timeline-content right">
            <div className="timeline-date">Date XX/XX/2024</div>
            <div className="timeline-text">Application Selection for Interview</div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="timeline-circle"></div>
          <div className="timeline-content left">
            <div className="timeline-date">Date XX/XX/2024</div>
            <div className="timeline-text">Interview starts</div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="timeline-circle"></div>
          <div className="timeline-content right">
            <div className="timeline-date">Date XX/XX/2024</div>
            <div className="timeline-text">Results Announcement</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;