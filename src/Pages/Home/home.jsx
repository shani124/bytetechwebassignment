import React from 'react';
import './home.css';
import Header from '../../Components/header/header';
import Counter from '../../Components/counter/counter';
const Home = () => {
    return (
        <div>
           <Header/>
           <h2>Counter</h2>
           <Counter/> 
        </div>
    );
}

export default Home;
