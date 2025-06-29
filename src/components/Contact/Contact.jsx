import React from 'react'
import './Contact.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/instagram.png'

const Contact = () => {
    return (
        <>
            <hr className='hr' />
            <div id="icons">
                <footer className="icons">
                    <div className="logoname">Yashwanth</div>
                    <div className="icon">
                        <p className='social'>Social media</p><br />
                        <ul>
                            <li><a href="https://github.com/Yashwanth1515"><img src={github} alt="github" className='imgs' /></a></li>
                            <li><a href="https://www.linkedin.com/in/m-yashwanth-70b9a8287"><img src={linkedin} alt="linked in" className='imgs' /></a></li>
                            <li><a href=""><img src={insta} alt="instagram" className='imgs' /></a></li>
                        </ul>
                    </div>
                </footer>
                <div className="items">
                    <div className="item1">
                        <p>content:-</p>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>
                    <div className="item2">
                        <p>Email:-</p>
                        <ul>
                            <li>mangaliyeswanth@gmail.com</li>
                            <li>yashwanth2k325@gmail.com</li>
                        </ul>
                    </div>
                    <div className="item3">
                        <p>mobile no:-</p>
                        <ul>
                            <li>+91 9390963034</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
