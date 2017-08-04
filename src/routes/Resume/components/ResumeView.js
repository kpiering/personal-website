import React from 'react'
import './ResumeView.scss'
import { IndexLink } from 'react-router';

export const ResumeView = () => (
  <div>

    <h2>{'Kelley Piering'}</h2>

    <div className = "resumeItem">
     
      <p>
        <IndexLink to= {'/'} >{'kpiering.com'}</IndexLink>
      </p>

      <p>
        <a href="tel:240-676-7508">{"240.676.7508"}</a>
      </p>

      <p>
        <a href="mailto:kelley.piering@gmail.com" target="_top">{'Kelley.Piering@gmail.com'}</a>
      </p>
    </div>

    <h2 className = "topMargin">{'Skills'}</h2>
    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Languages'}
        </p>
      </div>

      <div className = "rightCol">
        {'HTML, CSS, JS / ES6 / Typescript, SSI, ActionScript, PHP'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Frameworks'}
        </p>
      </div>

      <div className = "rightCol">
        {'Angular, React, Sass, Redux'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Tools'}
        </p>
      </div>

      <div className = "rightCol">
        {'Node, npm, Git, SVN, GitHub'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Software'}
        </p>
      </div>

      <div className = "rightCol">
        {'Visual Studio, Photoshop, Illustrator, Flash, InDesign'}
      </div>
    </div>

    <h2 className = "topMargin">{'Work Experience'}</h2>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Handcraft Entrepreneur'}
        </p>
        
        <p className = "small">
          {'Sept 2010 - Present'}
        </p>
      </div>

      <div className = "rightCol">
        {'Designed, patterned, created, and photographed handmade items which I sold online and in person at a variety of shows. Sold up to 60 items per month online. Fully managed my online presence across several different platforms.'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'CrowdStar'}
        </p>
        
        <p className = "small">
          {'Software Engineer'}
        </p>

        <p className = "small">
          {'Feb 2011- May 2012'}
        </p>
      </div>

      <div className = "rightCol">
        {'Worked on Facebook games Happy Pets, Happy Aquarium, and It Girl. Created new features, reprogrammed old ones, updated security, fixed bugs, and rewrote large portions of the code base. (AS3, PHP)'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Freelance'}
        </p>

        <p className = "small">
          {'Web Design and Development'}
        </p>

        <p className = "small">
          {'Summer 2008 – Winter 2010'}
        </p>
      </div>

      <div className = "rightCol">
        {'Design and developed web sites with varying technologies to meet the needs of various clients. (HTML, CSS, JS, AS 2&3)'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'High Trek Adventure '}
        </p>
        <p className = "small">
          {'Web Designer'}
        </p>

        <p className = "small">
          {'Summer 2008 – Fall 2008'}
        </p>
      </div>

      <div className = "rightCol">
        {'Design web sites and create the front end code. Created graphics for the web site, advertisement, and e-mail inserts.'}
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'EU Services'}
        </p>
        <p className = "small">
          {'Web Intern'}
        </p>

        <p className = "small">
          {'Summer 2007'}
        </p>
      </div>

      <div className = "rightCol">
        {'Created web sites based on image files. Remade existing sites with CSS instead of tables. Repaired web sites what were not compatible with Internet Explorer 6. Created  ites for Time Warner, YMCA, ASTD, Geico, and others. (HTML, CSS, JS)'}
      </div>
    </div>

    <h2 className = "topMargin">{'Education'}</h2>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Masters of Science'}
        </p>
        <p className = "small">
          {'Rochester Institute of Technology'}
        </p>

        <p className = "small">
          {'2008 - 2010'}
        </p>
      </div>

      <div className = "rightCol">
        <p>
          {'Game Design and Development'}
        </p>

        <p>
          {'Concentration in Content Development'}
        </p>
      </div>
    </div>

    <div className = "resumeItem">
      <div className = "leftCol">
        <p className = "bold">
          {'Bachelor of Science '}
        </p>
        <p className = "small">
          {'Rochester Institute of Technology'}
        </p>

        <p className = "small">
          {'2005-2008'}
        </p>
      </div>

      <div className = "rightCol">
        <p>
          {'New Media Interactive Development'}
        </p>

        <p>
          {'Concentration in Japanese Foreign Language'}
        </p>
      </div>
    </div>

    <div className = "resumeCenterItem">
      {'References available upon request'}
    </div>

    <div className = "resumeCenterItem">
      <a href="../assets/Kelley_Piering_Resume.pdf" target="_blank">{'Download the version PDF here'}</a>
    </div>

  </div>
)

export default ResumeView
