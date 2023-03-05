import {Outlet} from 'react-router-dom';
import Header from './Header/Header';

const MainPageLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default MainPageLayout;
