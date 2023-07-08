import React from 'react';
import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Header = () => {
    return (        
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingLeft:20,height:55,color:'white',backgroundColor:'gray'}}>
            <div>
                <button > <Link to="/">Home</Link></button>
                <button  style={{marginLeft:10}}> <Link to="/itemslist">List</Link></button>
            </div>
            <h3 style={{marginRight:10}}>Byte Tech Solutions</h3>
        </div>
    );
}

export default Header;
