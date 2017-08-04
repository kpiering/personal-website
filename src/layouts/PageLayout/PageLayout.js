import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import './PageLayout.scss';
import Menu from './containers/MenuContainer';

export const PageLayout = ({ children }) => (
  <div className='pageContent'>
    <div className = 'sideBorders'>
      <div className = "header">
      
        <div className = "logo">
            <IndexLink to= '/' >{'KP'}</IndexLink>
        </div>

        <Menu></Menu>
  
      </div>
      
      <div className='page-layout__viewport'>
        {children}
      </div>
    

    </div> 

    <div className = "footer">
      &copy;{" 2017 "}<a href="mailto:kelley.piering@gmail.com" target="_top">{'Kelley Piering'}</a>
    </div>
  </div>
 
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
