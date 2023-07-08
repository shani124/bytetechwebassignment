import React from 'react';
import './itemslist.css'

import Header from '../../Components/header/header';
import Listofitems from '../../Components/listofitems/listofitems';
const Itemslist = () => {
    return (
        
        
       
        <div>
            <Header/>
            <h2>Items list</h2>
            <Listofitems/>
        </div>
    );
}

export default Itemslist;
