import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import '../../public/styles/style1.css';
import '../../public/styles/style2.css';
import '../../public/styles/style3.css';
import '../../public/styles/style4.css';
import '../../public/styles/style5.css';
import '../../public/styles/style6.css';
import '../../public/styles/style7.css';
import '../../public/styles/style8.css';
import '../../public/styles/style9.css';
import '../../public/styles/style10.css';
import '../../public/styles/style11.css';
import '../../public/styles/tablet1.css';
import '../../public/styles/tablet2.css';
import '../../public/styles/tablet3.css';
import '../../public/styles/tablet4.css';
import '../../public/styles/tablet5.css';
import '../../public/styles/tablet6.css';
import '../../public/styles/tablet7.css';
import '../../public/styles/tablet8.css';
import '../../public/styles/tablet9.css';
import '../../public/styles/phone.css';
import '../../public/styles/phone2.css';
import '../../public/styles/phone3.css';
import '../../public/styles/style12.css';
import '../../public/styles/style13.css';
import '../../public/styles/style14.css';
import '../../public/styles/style15.css';

class App extends React.Component {
  render() {
    return (
      <div className='main_wrap'>
          <Switch>
            {routes.map((route, i) => (
              <Route
              key={1}
              path={route.path}
              exact={route.exact}
              component={route.component}
              />
            ))}
          </Switch>
      </div>
    )
  }
}

export default App;
