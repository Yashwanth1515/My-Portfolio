import React from 'react'
import './Skills.css'
import web from '../../assets/webprogramming.png'
import ui from '../../assets/website-layout.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillsTitle">What I do</span>
            <skills className="skillsdesc">Enthusiastic and skilled front-end developer with experience in building responsive, user-friendly web applications using React.js, JavaScript, HTML, and CSS. Strong foundation in Data Structures and Algorithms (DSA), enabling efficient and optimized coding practices. Currently exploring advanced frameworks like Next.js and actively applying problem-solving skills in real-world projects. Committed to writing clean, maintainable code and delivering high-quality user experiences. </skills>
            <div className="skillsBars">
                <div className="skillbar">
                    <img src={ui} alt="UI/UX" className='web' />
                    <div className="skillBarText">
                        <h2>Data Structure and Algorithms </h2>
                        <p>Proficient in Data Structures and Algorithms with hands-on problem-solving experience in C++, using platforms like LeetCode and Codeforces to strengthen algorithmic thinking and coding efficiency.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={web} alt="web development" className='web' />
                    <div className="skillBarText">
                        <h2>WEB DEVELOPMENT</h2>
                        <p>I have well knowledge about html,css and javascript</p>
                    </div>
                    <button class="swallow__icon">
                        <span></span>
                    </button>
                </div>
                <p className='wad'>Hi there! I’m Yashwanth, a passionate web application developer with a knack for creating dynamic and user-friendly web experiences</p>

            </div>
        </section>
    )
}

export default Skills
