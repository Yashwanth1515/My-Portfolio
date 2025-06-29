import React from 'react'
import './Services.css'
import frontend from '../../assets/front-development.png'
import database from '../../assets/data-server.png'
import backend from '../../assets/software.png'

const Services = () => {
  return (
    <section id='services'>
      <div className="serviceheadtitle">
        Services I Provide
      </div>
      <span className='servicedesc'>I will provide a lot of services in the field of Web development and desiging field to the clients.I aquire the new technologies in design feild as fas as i can. I have well communication skills for to fullfill clients desires</span>
      <div className="servicebars">
        <div className="servicebar">
          <img src={frontend} alt="frontend" className='image' />
          <div className="servicetext">
            <h2>FRONTEND DEVELOPMENT</h2>
            <p><u>Services:-</u><span><ul><li>Responsive design implementation</li><li>Creating interactive UI/UX</li></ul></span></p>
          </div>
        </div>
        <div className="servicebar">
          <img src={database} alt="database" className='image' />
          <div className="servicetext">
            <h2>DATABASE MANAGEMENT</h2>
            <p><u>Services:-</u><span><ul><li>MongoDB</li><li>SQL</li></ul></span></p>
          </div>
        </div>
        <div className="servicebar">
          <img src={backend} alt="backend" className='image' />
          <div className="servicetext">
            <h2>BACKEND DEVELOPMENT</h2>
            <p><u>Services:-</u><span><ul><li>Node.js</li><li>Express.js</li></ul></span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
