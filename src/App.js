import React, { useEffect } from 'react';
import { BrowserRouter as Router,Routes} from 'react-router-dom';
import { Route} from 'react-router';
import { useStateValue } from './components/StateProvider/StateProvider';
import { auth } from './firebase';

import './App.css';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Men from './components/AllShoes/Men/Men';
import Women from './components/AllShoes/Women/Women';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import MenGym from './components/AllShoes/Men/MenGym/MenGym';
import MenTennis from './components/AllShoes/Men/MenTennis/MenTennis';
import WomenTennis from './components/AllShoes/Women/WomenTennis/WomenTennis';
import WomenGym from './components/AllShoes/Women/WomenGym/WomenGym';
import MainPageLayout from './components/MainPageLayout';
import { Container} from '@material-ui/core';


function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
   
  }, []);

  console.log('User is >>>', user);

  return (
    <Container>
     
          <Router>
      <div className="app">
        <Routes >
        <Route element={<MainPageLayout/>}>
          <Route path="/men/gym" element={<MenGym />} />
           
          <Route path="/men/tennis" element={<MenTennis />} />
           
          
          <Route path="/men" element={<Men />} />
            
          <Route path="/women/gym" element={<WomenGym />} />
           
          <Route path="/women/tennis" element={<WomenTennis />} />
           
          
          <Route path="/women" element={<Women />} />
            

          <Route path="/login" element={<Login />} />
            

          <Route path="/checkout" element={<Checkout />} />
            

          <Route path="/" element={<Home />} />
            
        </Route> 
        </Routes>
      </div>
    </Router>
    
    </Container>
    
  );
}

export default App;