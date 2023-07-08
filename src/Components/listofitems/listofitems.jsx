import React, { useState,useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';


const Listofitems = () => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [data,Setdata]=useState([]);

    
    useEffect(() => {
        fetchData()
      .then(response => Setdata(response.data))
      .catch(error => console.log(error));
      console.log(data)  
       
    },[]);

    async function fetchData() {        
        return await axios.get('https://hisocars.techinnsoft.com/api/Booking/get-hot-offer');
      }
    

    return (
        <div> 
            <p>This list is fetched by the provided URL:&nbsp;https://hisocars.techinnsoft.com/api/Booking/get-hot-offer</p>       
        <List>            
          {data.map((item, index) => (
            <ListItem key={index} style={{backgroundColor:'gray',color:'white'}}>
              <ListItemText primary={item.brandName} />
            </ListItem>
          ))}
        </List>
      </div>
    );
}

export default Listofitems;
