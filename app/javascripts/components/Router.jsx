import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LP from '../containers/LP';
import Dashboard from '../containers/Dashboard';
import Auth from './Dashboard/Auth';
import Login from './Dashboard/Login';
import Home from '../containers/Dashboard/Home';
import Separation from '../containers/Dashboard/Separation';
import TrushList from './Dashboard/Separation/TrushList';
import SeparationList from './Dashboard/Separation/SeparationList';
import Abstract from './Dashboard/Separation/Abstract';
import SeparationRegist from './Dashboard/Separation/SeparationRegist';
import Log from '../containers/Dashboard/Log';
import LogAnswered from './Dashboard/Log/Answered';
import LogUnanswered from './Dashboard/Log/Unanswered';
import Schedule from '../containers/Dashboard/Schedule';
import ScheduleRegist from './Dashboard/Schedule/Regist';
import ScheduleList from './Dashboard/Schedule/List';
import Regist from './Dashboard/Regist';
import NotFound from './Dashboard/NotFound'

/**
 * ルーティングを定義するクラス
 */
class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LP} />
          <Dashboard>
            <Switch>
              <Route path="/dashboard/login" component={Login} />
              <Auth>
                <Switch>
                  <Redirect exact from="/dashboard" to="/dashboard/home" />
                  <Route exact path="/dashboard/home" component={Home} />
                  <Route path="/dashboard/separation">
                    <Switch>
                      <Redirect exact from="/dashboard/separation" to="/dashboard/separation/list" />
                      <Redirect exact from="/dashboard/separation/list" to="/dashboard/separation/list/trush" />
                      <Separation>
                        <Route exact path="/dashboard/separation/list/trush" component={TrushList} />
                        <Route exact path="/dashboard/separation/list/separation" component={SeparationList} />
                        <Route exact path="/dashboard/separation/list/abstract" component={Abstract} />
                        <Route exact path="/dashboard/separation/regist" component={SeparationRegist} />
                      </Separation>
                    </Switch>
                  </Route>
                  <Route path="/dashboard/log">
                    <Switch>
                      <Redirect exact from="/dashboard/log" to="/dashboard/log/answered" />
                      <Log>
                        <Switch>
                          <Route exact path="/dashboard/log/answered" component={LogAnswered} />
                          <Route exact path="/dashboard/log/unanswered" component={LogUnanswered} />
                        </Switch>
                      </Log>
                    </Switch>
                  </Route>
                  <Route path="/dashboard/schedule">
                    <Switch>
                      <Redirect exact from="/dashboard/schedule" to="/dashboard/schedule/list" />
                      <Schedule>
                        <Switch>
                          <Route exact path="/dashboard/schedule/list" component={ScheduleList} />
                          <Route exact path="/dashboard/schedule/regist" component={ScheduleRegist} />
                        </Switch>
                      </Schedule>
                    </Switch>
                  </Route>
                  <Route path="/dashboard/regist" component={Regist} />
                  <Route path="/dashboard" component={NotFound} />
                </Switch>
              </Auth>
            </Switch>
          </Dashboard>
        </Switch>
      </BrowserRouter>
    );
  }
}

AppRouter.propTypes = {
};

export default AppRouter;
