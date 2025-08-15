import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=>toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex ": "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
                <div onClick={()=>toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MCA</h3>
                            <span className="qualification__subtitle">IGIT, Saranga</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - 2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">B.Sc. Computer Science</h3>
                            <span className="qualification__subtitle">Fakir Mohan Autonomus College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2023    
                            </div>
                        </div>
                    </div>

{/* 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">+2</h3>
                            <span className="qualification__subtitle">Prananath College (Autonomous)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">10th</h3>
                            <span className="qualification__subtitle">Saraswati Shishu Vidya Mandir</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018    
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Frontend Developer</h3>
                            <span className="qualification__subtitle">IBM SkillsBuild</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Jun 2024 - Aug 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;