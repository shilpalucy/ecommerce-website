import React from 'react';

// import './WomenGym.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
// import AllShoes from '../../AllShoes.css';

import AirZoom from './ethnic1.jpg';
import Metcon3 from './ethnic2.jpg';
import SuperRep from './ethnic3.jpg';
import Metcon6 from './ethnic4.jpg';
import Metcon6You from './ethnic5.jpg';
import Legend from './ethnic6.jpg';

const WomenGym = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar 
        title="Women's"
        pathGym="/women/gym"
        pathJordan="/women/jordan"
        pathWalking="/women/running"
        pathFootball="/women/football"
        pathAthletics="/women/tennis"
        pathBasketball="/women/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent 
          image={AirZoom}
          id="110000"
          title="Nike Air Zoom SuperRep"
          before={135}
          after={110}
          category="Women's HIIT Class Shoe"
        />
        <ShoeComponent 
          image={Metcon3}
          id="110001"
          title="Nike Free Metcon 3"
          before={140}
          after={90}
          category="Women's Training Shoe"
        />
        <ShoeComponent 
          image={SuperRep}
          id="110002"
          title="Nike SuperRep Go"
          before={110}
          after={110}
          category="Women's Training Shoe"
        />
        <ShoeComponent 
          image={Metcon6}
          id="110003"
          title="Nike Metcon 6 By You"
          before={185}
          after={150}
          category="Custom Training Shoe"
        />
        <ShoeComponent 
          image={Metcon6You}
          id="110004"
          title="Nike Metcon 6 By You"
          before={185}
          after={150}
          category="Custom Training Shoe"
        />
        <ShoeComponent 
          image={Legend}
          id="110005"
          title="Nike Legend Essential"
          before={60}
          after={45}
          category="Women's Training Shoe"
        />
      </div>
    </div>
  );
}

export default WomenGym;