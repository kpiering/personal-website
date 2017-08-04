import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ menuItems} ) => {
    return <div className = "menu">
      {
        menuItems.map((item, index) => {
        
        return <MenuItem item={item} key={`menuItem_${index}`}></MenuItem>;
      })
    }
    </div>;
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({ 
                                                title: PropTypes.string.isRequired, 
                                                link: PropTypes.string.isRequired })).isRequired
};

export default Menu;
