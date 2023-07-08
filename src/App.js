import './App.css';
import Home from './Pages/Home/home';
import Itemslist from './Pages/Itemslist/itemslist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nopage from './Pages/nopage/nopage';

function App() {
  return (
    
  
    // <Routes>
    //   <Route path='/' element={<Home />}>        
    //     <Route path='itemslist' element={<Itemslist />} />        
    //     <Route path='*' element={<Nopage />} />
    //   </Route>
    // </Routes>
        <Switch>
          
          <Route path="/itemslist">
            <Itemslist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   
  );
}

export default App;
