import React from 'react';
import Login from './pages/login/Login';
import Reg from './pages/reg/Reg';
import Nav from './pages/nav/Nav';
import Citylist from './pages/citylist/CityList';
import Search from './pages/search/Search';
import HouseMap from './pages/map/Map';
import ForgetPassword from './pages/forgetpwd/ForgetPassword';
// 配置路由
import {HashRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login"  component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/" exact component={Nav}></Route>
        <Route path="/citylist" component={Citylist}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/map" component={HouseMap}></Route>
        <Route path="/forgetPassword" component={ForgetPassword}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
