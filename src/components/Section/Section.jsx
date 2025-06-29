import React from 'react';
import './Section.css';
import Myimage from '../../assets/ssyash.jpg';
import download from '../../assets/Download.png';
import web from '../../assets/github.png';
import resume from '../../assets/Yashwanth.pdf'

const Section = () => {
    return (
        <section>
            <div className='intro'>
                <div className="intro-name">
                    <span className='span'>Hello,</span><br />
                    <span className='span2'>I'm </span>
                    <span className='intro-name1'>Yashwanth</span><br />
                    <span className='span3'>Web Designer</span><br />
                    <span className='line'>
                        Front-end developer skilled in React.js, JavaScript, HTML, and CSS with a solid foundation in Data Structures and Algorithms. Passionate about building responsive, user-friendly interfaces and exploring modern frameworks like Next.js.
                    </span><br />
                    <a href={web} download>
                    <button className='btn' aria-label="Download CV">
                        <img src={download} alt="Download icon" className='download' /><a href={resume} download> Download CV</a>
                    </button>
                    </a>
                </div>
                <img src={Myimage} alt="Yashwanth" className='img' />
            </div>
        </section>
    );
}

export default Section;
