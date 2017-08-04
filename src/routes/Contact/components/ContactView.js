import React from 'react'
import './ContactView.scss'
import PlantImage from '../assets/lola.jpg'

export const ContactView = () => (
  <div>

    <h2>{'Get in touch'}</h2>
    <div className = "textContainer">
      {"I currently live and work in the Seattle, Washington area. I am avaible for questions, work, or chatting about succulents. Feel free to contact me through one of the following methods."}
    </div>

    <div className = "contactContainer">
      <div className = "contactItem" >
        <div className ="contactLabel">
          {"Email:"} 
        </div>
        <div className = "contactDetails">
            <a href="mailto:kelley.piering@gmail.com" target="_top">{'Kelley.Piering@gmail.com'}</a>
        </div>
      </div>

      <div className = "contactItem" >
        <div className ="contactLabel">
          {"Phone:"} 
        </div>
        <div className = "contactDetails">
            <a href="tel:240-676-7508">{"240.676.7508"}</a>
        </div>
      </div>

      <div className = "contactItem" >
        <div className ="contactLabel">
          {"Skype:"} 
        </div>
        <div className = "contactDetails">
            {"kpiering"}
        </div>
      </div>


    </div>

    <div className= "sucImgContainer">
      <img alt='This is one of my succulents' src={PlantImage} />
    </div>
  </div>
)

export default ContactView
