import { useState } from "react"
import SingleProject from "../SingleProject/SingleProject"
import "./Projects.css"


import AdminPanel from "../../screenshots/AdminPanel.png"
import Dashboard from "../../screenshots/Dashboard.png"
import UserPanel from "../../screenshots/UserPanel.png"
import music1 from "../../screenshots/music1.png"
import music2 from "../../screenshots/music2.png"
import JTS1 from "../../screenshots/JTS1.png"
import JTS2 from "../../screenshots/JTS2.png"
 

import arrow from "../../assets/icons/view-more-arrow.svg"


function Projects() {
  const [projects, setProjects] = useState([{
    name: "Hotel Management System",
    description: "A hotel management system that allows users to book rooms, view available rooms, and manage their bookings. It is built with ReactJS and uses a mock API for data.",
    stack: ["ReactJS", "Express", "Nodejs", "MongoBD"],
    images: [AdminPanel, Dashboard, UserPanel],
    links: ["https://hotel-management-7rg9.onrender.com", "https://github.com/FullStackParihar/Hotel_Management"]
  },

  {
    name: "My Music App",
    description: "Not your average music app- it's packed with standard features like displaying the current song and artist details plus another cool feature, the ability of the background to adapt based on the current song or artist.",
    stack: ["Reactjs", "Redux tool kit", "API integration", "Tailwind CSS"],
    images: [music1, music2],
    links: ["https://my-music-hub.netlify.app/", "https://github.com/FullStackParihar/my-music-app"]
  },
  {
    name: "JTS-Transportations",
    description: "A transport website developed with React and Tailwind CSS. It includes dynamic vehicle filtering, fleet display, and shimmer effect to enhance user experience. Integrated APIs for data rendering.",
    stack: ["React.js", "Tailwind CSS", "API Integration"],
    images: [JTS1, JTS2],
    links: [
      "https://jts-transportations.netlify.app/",
      "https://github.com/FullStackParihar/JTS-Tranposrtation"
    ]
  }
  ])

  const mappedProjects = projects.map(({ name, description, stack, images, links }) => {
    return <SingleProject key={name} name={name} description={description} stack={stack} images={images} links={links} />
  })
  return (
    <section className="projects">
      <div className="projects-inner">
        <h1 id="projects">PROJECTS</h1>

        <div className="projects-container">
          {mappedProjects}
        </div>

        <a href="https://github.com/FullStackParihar" target="_blank" >
          <button className="view-more">
            View more on Github
            <img src={arrow} alt="" />
          </button>
        </a>

      </div>
    </section>
  )
}

export default Projects