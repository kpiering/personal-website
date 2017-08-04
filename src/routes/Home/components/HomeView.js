import React from 'react'
import SelfImage from '../assets/me.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h2>Hello!</h2>
    <div className = "imageTextContainer">
      <div className = "imgContainer">
        <img alt='This is me from elementary school!' src={SelfImage} />
      </div>
      <div className = "textContainer">
        {"Welcome to my website! My name is Kelley Piering. I am an amalgam of  programming, chocolate, succulents, and nerdy things. I strongly believe usability is the most important factor of any product.  I like learning new things and I pick them up quickly. In my spare time you might find me teaching myself something new or sewing something you didn't know you needed. "}
      </div>
    </div>
  </div>
)

export default HomeView
