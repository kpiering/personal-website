import React from 'react';
import './PortfolioView.scss';
import SongThreadImage from '../assets/songthread.jpg';
import KPieringImage from '../assets/kpiering.jpg'


export const PortfolioView = () => (
  <div>
    

    <a href = "http://www.songthread.com" target = "_blank"> <img className = "portfolioImg" src= {SongThreadImage} /></a>

    <div className= "linkContainer">
      <a href = "http://www.songthread.com"> {'View the full site here'}</a>
    </div>

    <div className = "textContainer">
      {"I was contracted to fully design and develop a website for a SongThread, a Brussels-based cross stitch crafter. The client had a logo, some images, and requirements that included a connection to their Etsy shop, dual language internationalization, a mechanism for future updates, and more. I provided the client with a few mock-ups for the design and they greatly preferred a centered logo design. Since the logo was provided I had to work with the round shape of it. Using the craft elements for inspiration I though creating a ribbon for the menu would work well and the client agreed. The ribbon was created completely in CSS rather than using an image."}
    </div>

    <div className = "textContainer">
      {"The entire site was built using Angular 2. I created a json document and showed the client how to make updates to the content. This document allows the client full control of the text, images, and alignment of elements. Since the client is located in Brussels they wanted their website to be in both English and Dutch. The client also wanted full control over the translations rather than having it machine-made. The site switches between the two languages with a click on the options in the top right corner. Unlike many multilingual websites this one does not load separate pages for each language. At the click of a button all the text will seamlessly and instantaneously change."}
    </div>

    <div className = "textContainer">
      {"The Shop page connects to the Etsy API. All of the information on this page comes directly from the client's Etsy shop. If they make a change in their shop on Etsy it will change on the Shop page. Connecting to the API allowed for some nice little features like an image rotation on hover, something that you do not get when viewing the shop on Etsy. The Etsy information is cached by a Cron job I set up on the client's server which updates every 4 hours. This was rather a challenge because the client's hosting company website is completely in Dutch, which I do not speak!"}
    </div>

    <div className= "textContainer">
      {"Features Include:"}
      <ul>
        <li> {"Built in Angular 2"}</li>
        <li> {"All content is controlled with a json document including content placement"}</li>
        <li> {"Seamlessly switches between English and Dutch without loading a separate website"}</li>
        <li> {"Connects to the Etsy API for the Shop page"}</li>
        <li> {"When the client updates their Etsy shop the Shop page will mirror that change"}</li>
        <li> {"Simple image rotation on Shop page by hovering on images"}</li>
        <li> {"Caches Etsy data with a Cron job every 4 hours"}</li>
        <li> {"Menu ribbon created with CSS"}</li>
        <li> {"Uses Redux for state management"}</li>
      </ul>
    </div>

    <div className = "buffer"></div>

    <a href = "http://www.kpiering.com" target = "_blank"> <img className = "portfolioImg" src= {KPieringImage} /></a>

    <div className= "linkContainer">
      <a href = "http://www.kpiering.com"> {'View the full site here'}</a>
    </div>

    <div className = "textContainer">
      {"I built this site to help teach myself React. I knew I wanted something simple and straight forward because I value usability over cool factor. All the learning, programming, and fixing unexpected errors took less than a week to get the entire site up and running. I also wanted something that would scale nicely for mobile. Much of the internet today is viewed from mobile devices and I wanted to make sure that my website would adjust to different devices."}
    </div>

    <div className= "textContainer">
      {"Features Include:"}
      <ul>
        <li> {"Built with React"}</li>
        <li> {"Minimalist design that adjusts for mobile"}</li>
        <li> {"Didn't really need React but was a fun learning experience"}</li>
      </ul>
    </div>
  </div>
)

export default PortfolioView
