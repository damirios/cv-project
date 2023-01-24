import { v4 as uuidv4 } from 'uuid';
import React from 'react';

function constructSignleBlock(info) {
    return (
        <div className="experience-education-block" key={uuidv4()}>
            <div className="organization">
                <p className="organization__name">{info.organization || info.university}</p>
                <p className="organization__dates">{info.dateFrom} - {info.dateTo}</p>
            </div>
            <div className="person">
                <p className="person__position">{info.position || info.degree}</p>
                <p className="person__details">{info.details}</p>
            </div>
        </div>
    );
}

function constructBlocks(careerObject) {
    const blocks = [];
    Object.keys(careerObject).forEach(key => {
        const info = careerObject[key];
        blocks.push(constructSignleBlock(info));
    });
    return (
        <div className="experience-education-blocks">
            {blocks.map(block => block)}
        </div>
    );
}

export const Preview = React.forwardRef((props, ref) => {
    const {personal, education, experience} = props.cvInfo;
    if (personal !== null) {
        return (
            <div ref={ref} className="preview">
                <div className="container">
                    <div className="preview__column">
                        <div className="preview__about-me">
                            <div className="preview__photo">
                                <img src={personal.photo} alt="avatar" />
                            </div>
                            <div className="preview__name">
                                <p className="preview__first-name">{personal.firstName}</p>
                                <p className="preview__last-name">{personal.lastName}</p>
                            </div>
                            <div className="preview__description">
                                {personal.description}
                            </div>
                            <div className="preview__contacts">
                                <p className="preview__address">{personal.address}</p>
                                <p className="preview__phone">{personal.phone}</p>
                                <p className="preview__email">{personal.email}</p>
                            </div>
                        </div>
                        <div className="preview__career">
                            <div className="preview__experiences career-place">
                                <h2>Work Experience</h2>
                                {constructBlocks(experience)}
                            </div>
                            <div className="preview__educations career-place">
                                <h2>Education</h2>
                                {constructBlocks(education)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
    
});
