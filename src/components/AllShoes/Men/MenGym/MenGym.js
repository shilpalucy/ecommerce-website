import React from 'react';

// import './MenGym.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
// import AllShoes from '../../AllShoes_Navbar/AllShoes';

import Metcon6 from './kid2.jpg';
import AirMonarch from './kid3.jpg';
import MatFraser from './kid4.jpg';
import MaxAlpha from './kid5.jpg';
import AirZoom from './kid6.jpg';
import Romaleos4 from './kid7.jpg';

const MenGym = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar 
        title="Kids"
        pathGym="/men/gym"
        // pathJordan="/men/jordan"
        // pathWalking="/men/running"
        // pathFootball="/men/football"
        pathAthletics="/men/tennis"
        // pathBasketball="/men/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent 
          id="100000"
          image={Metcon6}
          title="Nike Metcon 6"
          before={170}
          after={140}
          category="Gym Shoe"
        />
        <ShoeComponent 
          id="100001"
          image={Romaleos4}
          title="Nike Romaleos 4 SE"
          before={240}
          after={200}
          category="Gym Shoe"
        />
        <ShoeComponent
          id="100002"
          image={AirZoom}
          title="Nike Air Zoom SuperRep"
          before={130}
          after={130}
          category="Gym Shoe"
        />
        <ShoeComponent 
          id="100003"
          image={MatFraser}
          title="Nike Metcon 6 Mat Fraser"
          before={190}
          after={190}
          category="Gym Shoe"
        />
        <ShoeComponent 
          id="100004"
          image={AirMonarch}
          title="Nike Air Monarch IV"
          before={70}
          after={60}
          category="Gym Shoe"
        />
        <ShoeComponent 
          id="100005"
          image={MaxAlpha}
          title="Nike Max ALpha Trainer 2"
          before={100}
          after={100}
          category="Gym Shoe"
        />
      </div>
    </div>
  );
}

export default MenGym;