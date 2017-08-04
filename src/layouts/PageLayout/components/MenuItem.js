import React from 'react';
import { IndexLink, Link } from 'react-router';

const MenuItem = ({item}) => {
    if(item.link === "/"){
       return   <div className = 'menuItem'>
                    <IndexLink to= {item.link} activeClassName='activeItem' activeStyle ={{color:'#486154'}} >{item.title}</IndexLink>

                    <div className = "spacer"> 
                        {'-'} 
                    </div>
                </div>

    }
    else{
        return  <div className = 'menuItem'>
                    <Link to={item.link} activeClassName='activeItem' activeStyle ={{color:'#486154'}} >{item.title}</Link>
                    
                    <div className = "spacer"> 
                        {'-'} 
                    </div>
                </div>
    };
}

export default MenuItem;
