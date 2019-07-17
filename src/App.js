import React from 'react'
import {HashRouter,Route,Link,Switch,Redirect} from 'react-router-dom'


import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
class App extends React.Component {

  render(){
    return(
      <HashRouter>
        {/* 配置路由规则 */}
        <Switch>
           <Redirect exact path="/" to="/home"></Redirect>
           <Route path="/home" component={Home}/>
           <Route path="/login" component={Login}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App