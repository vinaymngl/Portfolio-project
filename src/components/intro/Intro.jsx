import React from 'react'
import "./intro.css";
import me from "../../img/me.png"

const Intro = () => {
    return (
        <div className='intro-container'>
            <div className="left">
                <div className="left-wrapper">
                    <div className="title-wrapper">
                        <h1 className='intro-name-desc'>Hello, Myself</h1>
                        <h2 className='intro-name'>Vinay Mangal</h2>
                    </div>
                    <div className="intro-profile">
                        <div className="intro-profile-wrapper">
                            <div className='intro-profile-wrapper-title'>Web developer</div>
                            <div className='intro-profile-wrapper-title'>software develper</div>
                            <div className='intro-profile-wrapper-title'>UI/UX designer</div>
                            <div className='intro-profile-wrapper-title'>Graphic designer</div>
                            <div className='intro-profile-wrapper-title'>Data Analyst</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta deserunt vel distinctio nulla fugiat modi eos exercitationem illum doloremque tempora, culpa, reiciendis iusto! Repellendus commodi rerum illum nobis nihil.
                    </p>
                    <svg
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                        fill="none"
                        stroke="black"
                        className="intro-scroll"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="scroll">
                            <path
                                id="Vector"
                                d="M40.5 15L34.5 9L28.5 15"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                id="Vector_2"
                                d="M28.5 24L34.5 30L40.5 24"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <g id="Group">
                                <path
                                    id="Vector_3"
                                    d="M9 37.5H60"
                                    stroke-width="3"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <path
                                id="Vector_4"
                                d="M34.5 27V9"
                                stroke-width="2.9895"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <g id="Group_2">
                                <path
                                    id="Vector_5"
                                    d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                    stroke-width="3"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="right">
                <div className="intro-bg"></div>
                <img src={me} alt="" className='intro-img' />
            </div>
        </div>
    )
}

export default Intro
